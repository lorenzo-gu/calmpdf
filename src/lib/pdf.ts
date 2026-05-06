"use client";

/**
 * Helpers for client-side PDF manipulation.
 * All functions here run entirely in the browser — no network I/O.
 */
import { PDFDocument } from "pdf-lib";
import { degrees } from "pdf-lib";

export async function readFileAsArrayBuffer(file: File): Promise<ArrayBuffer> {
  return await file.arrayBuffer();
}

export function triggerDownload(bytes: Uint8Array, filename: string, mime = "application/pdf") {
  // Cast keeps TS happy under strict `lib.dom` typings where Uint8Array may be
  // backed by SharedArrayBuffer; `BlobPart` expects ArrayBuffer-backed views.
  const blob = new Blob([bytes as BlobPart], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  // Release the object URL a tick later so downloads complete in all browsers.
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function triggerBlobDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function formatBytes(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / 1024 / 1024).toFixed(2)} MB`;
}

export async function mergePdfs(files: File[]): Promise<Uint8Array> {
  const out = await PDFDocument.create();
  for (const f of files) {
    const buf = await readFileAsArrayBuffer(f);
    const src = await PDFDocument.load(buf, { ignoreEncryption: true });
    const copied = await out.copyPages(src, src.getPageIndices());
    copied.forEach((p) => out.addPage(p));
  }
  return await out.save({ useObjectStreams: true });
}

export async function rotatePdf(file: File, rotation: 90 | 180 | 270): Promise<Uint8Array> {
  const buf = await readFileAsArrayBuffer(file);
  const src = await PDFDocument.load(buf, { ignoreEncryption: true });

  src.getPages().forEach((page) => {
    const current = page.getRotation().angle;
    page.setRotation(degrees((current + rotation) % 360));
  });

  return await src.save({ useObjectStreams: true, addDefaultPage: false });
}

export async function splitPdf(
  file: File,
  from: number,
  to: number,
): Promise<Uint8Array> {
  const buf = await readFileAsArrayBuffer(file);
  const src = await PDFDocument.load(buf, { ignoreEncryption: true });
  const total = src.getPageCount();
  const start = Math.max(1, Math.min(from, total));
  const end = Math.max(start, Math.min(to, total));
  const indices = Array.from({ length: end - start + 1 }, (_, i) => start - 1 + i);
  const out = await PDFDocument.create();
  const pages = await out.copyPages(src, indices);
  pages.forEach((p) => out.addPage(p));
  return await out.save({ useObjectStreams: true });
}


export async function reorderPdf(file: File, order: number[]): Promise<Uint8Array> {
  const buf = await readFileAsArrayBuffer(file);
  const src = await PDFDocument.load(buf, { ignoreEncryption: true });
  const total = src.getPageCount();
  if (order.length !== total) {
    throw new Error("Page order does not match PDF page count.");
  }
  const out = await PDFDocument.create();
  const pages = await out.copyPages(src, order);
  pages.forEach((p) => out.addPage(p));
  return await out.save({ useObjectStreams: true, addDefaultPage: false });
}


export function parsePageSelection(input: string, totalPages: number): number[] {
  const chunks = input.split(',').map((c) => c.trim()).filter(Boolean);
  if (!chunks.length) {
    throw new Error("Enter at least one page or range (example: 1-3, 6, 9-11).");
  }
  const pages = new Set<number>();
  for (const chunk of chunks) {
    const part = chunk.trim();
    if (/^\d+$/.test(part)) {
      const n = Number(part);
      if (n < 1 || n > totalPages) throw new Error(`Page ${n} is outside 1-${totalPages}.`);
      pages.add(n);
      continue;
    }
    const m = part.match(/^(\d+)\s*-\s*(\d+)$/);
    if (!m) throw new Error(`Invalid range "${part}".`);
    const start = Number(m[1]);
    const end = Number(m[2]);
    if (start > end) throw new Error(`Range "${part}" must be ascending.`);
    if (start < 1 || end > totalPages) throw new Error(`Range "${part}" is outside 1-${totalPages}.`);
    for (let i = start; i <= end; i += 1) pages.add(i);
  }
  return [...pages].sort((a, b) => a - b);
}

export async function extractPdfPages(file: File, indices: number[]): Promise<Uint8Array> {
  if (indices.length === 0) throw new Error("Select at least one page.");
  const buf = await readFileAsArrayBuffer(file);
  const src = await PDFDocument.load(buf, { ignoreEncryption: true });
  const total = src.getPageCount();
  if (indices.some((i) => i < 0 || i >= total)) throw new Error("One or more page selections are out of bounds.");
  const out = await PDFDocument.create();
  const copied = await out.copyPages(src, indices);
  copied.forEach((page) => out.addPage(page));
  return await out.save({ useObjectStreams: true, addDefaultPage: false });
}

export async function pdfPageCount(file: File): Promise<number> {
  const buf = await readFileAsArrayBuffer(file);
  const src = await PDFDocument.load(buf, { ignoreEncryption: true });
  return src.getPageCount();
}

/**
 * Lightweight compression pass.
 *
 * Real image-level recompression needs pdfjs-dist (render each page to canvas
 * at reduced DPI). We keep this MVP dependency-light and focus on lossless
 * optimizations that still cut 5–30% off most PDFs:
 *  - strip metadata
 *  - enable object streams
 *  - re-save through pdf-lib, which removes unused objects
 *
 * See TODO in the page for the image-recompression upgrade path.
 */
export async function compressPdfLossless(file: File): Promise<Uint8Array> {
  const buf = await readFileAsArrayBuffer(file);
  const src = await PDFDocument.load(buf, { ignoreEncryption: true, updateMetadata: false });
  // Strip identifying metadata.
  src.setTitle("");
  src.setAuthor("");
  src.setSubject("");
  src.setKeywords([]);
  src.setProducer("CalmPDF");
  src.setCreator("CalmPDF");
  return await src.save({ useObjectStreams: true, addDefaultPage: false });
}
