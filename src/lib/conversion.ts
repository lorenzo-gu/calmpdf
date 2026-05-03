"use client";

/**
 * Browser-only document conversion helpers.
 * Nothing here makes network calls; everything runs against the local File.
 */
import type { Paragraph as DocxParagraph } from "docx";

const PDFJS_WORKER_PATH = "/pdf.worker.min.js";
const PDFJS_CMAP_URL = "/pdfjs/cmaps/";
const PDFJS_STANDARD_FONT_URL = "/pdfjs/standard_fonts/";

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

type PdfToDocxStage =
  | "load-libraries"
  | "extract-text"
  | "build-docx"
  | "pack-docx";

function isTextItem(item: unknown): item is PdfTextItem {
  return (
    typeof item === "object" &&
    item !== null &&
    typeof (item as { str?: unknown }).str === "string" &&
    Array.isArray((item as { transform?: unknown }).transform)
  );
}


function toUserFacingPdfToDocxError(error: unknown, stage?: PdfToDocxStage): Error {
  if (error instanceof Error) {
    const message = error.message?.trim() || ""
    const lower = message.toLowerCase()

    if (
      lower.includes("out of memory") ||
      lower.includes("allocation failed") ||
      lower.includes("array buffer allocation") ||
      lower.includes("invalid string length") ||
      lower.includes("maximum call stack")
    ) {
      return new Error(
        "This PDF is too large for your browser to convert locally. Try a smaller file, split the PDF, or use a device with more memory.",
      );
    }

    if (lower.includes("password") || lower.includes("encrypted")) {
      return new Error("This PDF appears to be encrypted or password-protected. Unlock it first, then try again.");
    }

    if (
      lower.includes("undefined is not a function") ||
      lower.includes("not implemented") ||
      lower.includes("not supported")
    ) {
      return new Error(
        "Your browser hit a compatibility issue while converting this PDF to Word. Please update Safari/iOS and try again, or retry in Chrome/Firefox.",
      );
    }

    if (message) {
      if (stage === "pack-docx") {
        return new Error("Failed to generate the Word file in this browser. Please try again or switch browsers.");
      }
      return new Error("Conversion failed for this PDF. Please try again or use a different browser.");
    }
  }

  return new Error("Conversion failed for an unknown reason. Try a simpler document or a smaller file.");
}

function groupItemsIntoLines(items: PdfTextItem[]): ExtractedLine[] {
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

  let pdfjsLib: typeof import("pdfjs-dist");
  let docxLib: typeof import("docx");
  try {
    [pdfjsLib, docxLib] = await Promise.all([
      import("pdfjs-dist"),
      import("docx"),
    ]);
  } catch (error) {
    throw toUserFacingPdfToDocxError(error, "load-libraries");
  }

  if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_PATH;
  }

  const { Document, Packer, Paragraph, TextRun, PageBreak } = docxLib;

  async function extractPdfText(useSystemFonts: boolean): Promise<{
    pages: ExtractedLine[][];
    totalRawChars: number;
    totalItems: number;
  }> {
    const arrayBuffer = await file.arrayBuffer();
    const loadingTask = pdfjsLib.getDocument({
      data: new Uint8Array(arrayBuffer),
      cMapUrl: PDFJS_CMAP_URL,
      cMapPacked: true,
      standardFontDataUrl: PDFJS_STANDARD_FONT_URL,
      useSystemFonts,
    });
    const pdf = await loadingTask.promise;

    const extractedPages: ExtractedLine[][] = [];
    let extractedChars = 0;
    let extractedItems = 0;
    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
      const page = await pdf.getPage(pageNumber);
      const textContent = await page.getTextContent();
      const items = (textContent.items as unknown[]).filter(isTextItem);
      extractedItems += items.length;
      for (const item of items) extractedChars += item.str.length;
      extractedPages.push(groupItemsIntoLines(items));
    }

    return {
      pages: extractedPages,
      totalRawChars: extractedChars,
      totalItems: extractedItems,
    };
  }

  let pages: ExtractedLine[][];
  let totalRawChars = 0;
  let totalItems = 0;
  try {
    const primary = await extractPdfText(false);
    pages = primary.pages;
    totalRawChars = primary.totalRawChars;
    totalItems = primary.totalItems;

    if (totalRawChars < 10) {
      const fallback = await extractPdfText(true);
      if (fallback.totalRawChars > totalRawChars) {
        pages = fallback.pages;
        totalRawChars = fallback.totalRawChars;
        totalItems = fallback.totalItems;
      }
    }
  } catch (error) {
    throw toUserFacingPdfToDocxError(error, "extract-text");
  }

  // Run the empty-PDF check against raw extracted characters rather than the
  // grouped-line text, so a quirk in line grouping can never falsely trigger
  // the scanned-PDF error on a PDF that actually contains selectable text.
  if (totalRawChars < 10) {
    if (typeof console !== "undefined") {
      console.warn(
        `[CalmPDF] PDF appears to have no extractable text (items=${totalItems}, chars=${totalRawChars}).`,
      );
    }
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

  let doc: InstanceType<typeof Document>;
  try {
    doc = new Document({
      sections: [{ properties: {}, children }],
    });
  } catch (error) {
    throw toUserFacingPdfToDocxError(error, "build-docx");
  }

  try {
    return await Packer.toBlob(doc);
  } catch (error) {
    if (typeof console !== "undefined") {
      console.error("[CalmPDF] PDF->DOCX pack stage failed.", {
        stage: "pack-docx",
        name: error instanceof Error ? error.name : "UnknownError",
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
      });
    }

    try {
      const base64 = await Packer.toBase64String(doc);
      const binary = atob(base64);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      return new Blob(
        [bytes],
        {
          type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        },
      );
    } catch (fallbackError) {
      throw toUserFacingPdfToDocxError(fallbackError, "pack-docx");
    }
  }
}

type DocxPdfBlock = {
  text: string;
  kind: "paragraph" | "heading" | "list-item";
  level?: number;
};

const PDF_LAYOUT = {
  width: 612,
  height: 792,
  margin: 54,
  baseFontSize: 12,
  lineHeight: 1.45,
} as const;

function normalizeBlockText(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

function extractDocxPdfBlocks(html: string): DocxPdfBlock[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const blocks: DocxPdfBlock[] = [];

  const selectors = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "li"].join(",");
  const nodes = Array.from(doc.body.querySelectorAll(selectors));

  for (const node of nodes) {
    const text = normalizeBlockText(node.textContent ?? "");
    if (!text) continue;

    if (node.tagName.toLowerCase() === "p") {
      blocks.push({ text, kind: "paragraph" });
      continue;
    }

    if (node.tagName.toLowerCase() === "li") {
      const depth = node.closest("ul ul, ol ol") ? 1 : 0;
      blocks.push({ text, kind: "list-item", level: depth });
      continue;
    }

    const headingLevel = Number(node.tagName.slice(1));
    blocks.push({
      text,
      kind: "heading",
      level: Number.isFinite(headingLevel) ? headingLevel : 2,
    });
  }

  if (blocks.length > 0) return blocks;

  const fallbackText = normalizeBlockText(doc.body.textContent ?? "");
  return fallbackText ? [{ text: fallbackText, kind: "paragraph" }] : [];
}

function headingFontSize(level: number | undefined): number {
  switch (level) {
    case 1:
      return 22;
    case 2:
      return 18;
    case 3:
      return 15;
    default:
      return 13;
  }
}

export async function docxToPdf(file: File): Promise<Blob> {
  if (!/\.docx$/i.test(file.name)) {
    throw new Error("Please choose a DOCX file.");
  }

  const [{ default: mammoth }, pdfLib] = await Promise.all([
    import("mammoth"),
    import("pdf-lib"),
  ]);

  let html: string;
  try {
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.convertToHtml({ arrayBuffer });
    html = result.value;
  } catch {
    throw new Error("This file could not be converted. Try a simpler document or a smaller file.");
  }

  const blocks = extractDocxPdfBlocks(html);
  if (blocks.length === 0) {
    throw new Error("This DOCX appears to be empty.");
  }

  try {
    const pdfDoc = await pdfLib.PDFDocument.create();
    const regularFont = await pdfDoc.embedFont(pdfLib.StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(pdfLib.StandardFonts.HelveticaBold);

    let page = pdfDoc.addPage([PDF_LAYOUT.width, PDF_LAYOUT.height]);
    let cursorY = PDF_LAYOUT.height - PDF_LAYOUT.margin;

    const ensureSpace = (neededHeight: number) => {
      if (cursorY - neededHeight < PDF_LAYOUT.margin) {
        page = pdfDoc.addPage([PDF_LAYOUT.width, PDF_LAYOUT.height]);
        cursorY = PDF_LAYOUT.height - PDF_LAYOUT.margin;
      }
    };

    for (const block of blocks) {
      const isHeading = block.kind === "heading";
      const fontSize = isHeading ? headingFontSize(block.level) : PDF_LAYOUT.baseFontSize;
      const lineHeight = fontSize * PDF_LAYOUT.lineHeight;
      const indent = block.kind === "list-item" ? 18 + (block.level ?? 0) * 14 : 0;
      const bulletPrefix = block.kind === "list-item" ? "• " : "";
      const x = PDF_LAYOUT.margin + indent;
      const maxWidth = PDF_LAYOUT.width - PDF_LAYOUT.margin * 2 - indent;
      const font = isHeading ? boldFont : regularFont;
      const text = `${bulletPrefix}${block.text}`;

      const wrapped = pdfLib.layoutMultilineText(text, {
        alignment: pdfLib.TextAlignment.Left,
        font,
        fontSize,
        bounds: { x, y: 0, width: maxWidth, height: PDF_LAYOUT.height },
      });

      const blockHeight = wrapped.lines.length * lineHeight;
      const spacingAfter = isHeading ? lineHeight * 0.35 : lineHeight * 0.5;

      ensureSpace(blockHeight + spacingAfter);

      page.drawText(text, {
        x,
        y: cursorY - blockHeight,
        size: fontSize,
        font,
        lineHeight,
        maxWidth,
      });

      cursorY -= blockHeight + spacingAfter;
    }

    const bytes = await pdfDoc.save();
    const pdfBytes = new Uint8Array(bytes.byteLength);
    pdfBytes.set(bytes);
    return new Blob([pdfBytes], { type: "application/pdf" });
  } catch {
    throw new Error("This file could not be converted. Try a simpler document or a smaller file.");
  }
}
