"use client";

/**
 * Browser-only document conversion helpers.
 * Nothing here makes network calls; everything runs against the local File.
 */

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

  const container = document.createElement("div");
  container.setAttribute("style", PDF_PAGE_STYLES + "position:fixed;left:-10000px;top:0;");
  container.innerHTML = html;
  document.body.appendChild(container);

  try {
    const blob: Blob = await html2pdf()
      .set({
        margin: 0,
        filename: "converted.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .from(container)
      .outputPdf("blob");
    return blob;
  } catch {
    throw new Error("This file could not be converted. Try a simpler document or a smaller file.");
  } finally {
    container.remove();
  }
}
