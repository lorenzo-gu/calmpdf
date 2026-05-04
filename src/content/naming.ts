export const BRAND_NAME = "CalmPDF";

export const TOOL_NAMES = {
  pdfToWord: "PDF to Word",
  wordToPdf: "Word to PDF",
  editPdf: "Edit PDF",
  rotatePdf: "Rotate PDF",
  compressPdf: "Compress PDF",
  mergePdf: "Merge PDF",
  splitPdf: "Split PDF",
} as const;

export const HUB_LABELS = {
  tools: "All PDF tools",
  guides: "PDF How-to Guides",
} as const;

export const UI_COPY = {
  howItWorks: "How it works",
  relatedGuides: "Related guides",
} as const;

export const SUPPORTING_FORMAT_COPY = {
  wordExport: "Exports .docx",
  wordInput: "Supports .docx files",
} as const;

export const TERMINOLOGY_FORBIDDEN_VARIANTS = [
  "PDF to Word (DOCX)",
  "Word (DOCX) to PDF",
  "DOCX to PDF",
  "PDF to DOCX",
  "All PDF Tools",
  "How-to guides",
  "How-to Guides",
  "CalmPDF CalmPDF",
] as const;
