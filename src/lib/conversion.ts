"use client";

/**
 * Browser-only document conversion helpers.
 * Nothing here makes network calls; everything runs against the local File.
 */
import type { Paragraph as DocxParagraph } from "docx";

const PDF_PAGE_STYLES = `
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 12pt;
  line-height: 1.5;
  color: #111;
  background: white;
  width: 8.5in;
  min-height: 11in;
  padding: 0.75in;
  box-sizing: border-box;
`;

const PDFJS_WORKER_PATH = "/pdf.worker.min.mjs";

type PdfTextItem = {
  str: string;
  transform: number[];
  width: number;
  height: number;
  fontName?: string;
  hasEOL?: boolean;
};

type ExtractedLine = {
  y: number;
  height: number;
  text: string;
};

function isTextItem(item: unknown): item is PdfTextItem {
  return (
    typeof item === "object" &&
    item !== null &&
    typeof (item as { str?: unknown }).str === "string" &&
    Array.isArray((item as { transform?: unknown }).transform)
  );
}

function groupItemsIntoLines(rawItems: unknown[]): ExtractedLine[] {
  const items = rawItems.filter(isTextItem);
  if (items.length === 0) return [];

  // Sort top-to-bottom (PDF y axis grows upward, so larger y first), then left-to-right.
  items.sort((a, b) => {
    const yA = a.transform[5];
    const yB = b.transform[5];
    if (Math.abs(yA - yB) < 2) return a.transform[4] - b.transform[4];
    return yB - yA;
  });

  const groups: { y: number; height: number; items: PdfTextItem[] }[] = [];
  for (const item of items) {
    const y = item.transform[5];
    const h = Math.max(item.height || 0, 1);
    const last = groups[groups.length - 1];
    const threshold = last ? Math.max(last.height * 0.5, 2) : 2;
    if (last && Math.abs(last.y - y) < threshold) {
      last.items.push(item);
      last.height = Math.max(last.height, h);
    } else {
      groups.push({ y, height: h, items: [item] });
    }
  }

  return groups.map((g) => {
    g.items.sort((a, b) => a.transform[4] - b.transform[4]);
    const text = g.items
      .map((it) => it.str)
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();
    return { y: g.y, height: g.height, text };
  });
}

export async function pdfToDocx(file: File): Promise<Blob> {
  const isPdfByName = /\.pdf$/i.test(file.name);
  const isPdfByType = file.type === "application/pdf";
  if (!isPdfByName && !isPdfByType) {
    throw new Error("Please choose a PDF file.");
  }

  const [pdfjsLib, docxLib] = await Promise.all([
    import("pdfjs-dist"),
    import("docx"),
  ]);

  if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_PATH;
  }

  const { Document, Packer, Paragraph, TextRun, PageBreak } = docxLib;

  let pages: ExtractedLine[][];
  try {
    const arrayBuffer = await file.arrayBuffer();
    const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) });
    const pdf = await loadingTask.promise;

    pages = [];
    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
      const page = await pdf.getPage(pageNumber);
      const textContent = await page.getTextContent();
      pages.push(groupItemsIntoLines(textContent.items));
    }
  } catch {
    throw new Error("This file could not be converted. Try a simpler document or a smaller file.");
  }

  const allText = pages
    .flat()
    .map((line) => line.text)
    .join(" ")
    .trim();
  if (allText.length < 20) {
    throw new Error(
      "This PDF does not appear to contain selectable text. Scanned PDFs are not supported yet.",
    );
  }

  const children: DocxParagraph[] = [];
  for (let pageIdx = 0; pageIdx < pages.length; pageIdx++) {
    const lines = pages[pageIdx];
    const avgHeight =
      lines.length > 0
        ? lines.reduce((sum, l) => sum + l.height, 0) / lines.length
        : 12;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.text.length === 0) continue;
      children.push(
        new Paragraph({ children: [new TextRun({ text: line.text })] }),
      );

      // Heuristic paragraph break: a vertical gap noticeably larger than the
      // average line height suggests the next line starts a new paragraph.
      const next = lines[i + 1];
      if (next && line.y - next.y > avgHeight * 1.6) {
        children.push(new Paragraph({ children: [new TextRun({ text: "" })] }));
      }
    }

    if (pageIdx < pages.length - 1) {
      children.push(new Paragraph({ children: [new PageBreak()] }));
    }
  }

  try {
    const doc = new Document({
      sections: [{ properties: {}, children }],
    });
    return await Packer.toBlob(doc);
  } catch {
    throw new Error("This file could not be converted. Try a simpler document or a smaller file.");
  }
}

export async function docxToPdf(file: File): Promise<Blob> {
  if (!/\.docx$/i.test(file.name)) {
    throw new Error("Please choose a DOCX file.");
  }

  const [{ default: mammoth }, { default: html2pdf }] = await Promise.all([
    import("mammoth"),
    import("html2pdf.js"),
  ]);

  let html: string;
  try {
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.convertToHtml({ arrayBuffer });
    html = result.value;
  } catch {
    throw new Error("This file could not be converted. Try a simpler document or a smaller file.");
  }

  const wrapper = document.createElement("div");
  // Hide via positioning on the wrapper only. html2pdf.js clones the source
  // element into an internal render iframe, and `position: fixed` on the
  // source causes html2canvas to capture an empty frame, producing a blank PDF.
  wrapper.style.cssText = "position:absolute;left:-10000px;top:0;pointer-events:none;";
  const page = document.createElement("div");
  page.setAttribute("style", PDF_PAGE_STYLES);
  page.innerHTML = html;
  wrapper.appendChild(page);
  document.body.appendChild(wrapper);

  try {
    const blob: Blob = await html2pdf()
      .set({
        margin: 0,
        filename: "converted.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .from(page)
      .outputPdf("blob");
    return blob;
  } catch {
    throw new Error("This file could not be converted. Try a simpler document or a smaller file.");
  } finally {
    wrapper.remove();
  }
}
