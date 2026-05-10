"use client";

import { useMemo, useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Dropzone } from "@/components/Dropzone";
import { formatBytes, triggerBlobDownload } from "@/lib/pdf";

const PDFJS_WORKER_PATH = "/pdf.worker.min.js";

type JpgPage = { pageNumber: number; blob: Blob; previewUrl: string };

function clampQuality(value: number) {
  return Math.max(40, Math.min(95, value));
}

export function PdfToJpgTool() {
  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState(82);
  const [pages, setPages] = useState<JpgPage[]>([]);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const qualityRatio = useMemo(() => clampQuality(quality) / 100, [quality]);

  async function renderToJpg(selected: File, jpgQuality: number) {
    const pdfjsLib = await import("pdfjs-dist");
    if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
      pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_PATH;
    }

    const bytes = await selected.arrayBuffer();
    const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(bytes) });
    const pdf = await loadingTask.promise;
    const rendered: JpgPage[] = [];

    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
      const page = await pdf.getPage(pageNumber);
      const viewport = page.getViewport({ scale: 1.8 });
      const canvas = document.createElement("canvas");
      canvas.width = Math.ceil(viewport.width);
      canvas.height = Math.ceil(viewport.height);
      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) throw new Error("Could not create a canvas context in this browser.");

      await page.render({ canvas: canvas as HTMLCanvasElement, canvasContext: ctx, viewport }).promise;

      const blob = await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob((result) => {
          if (!result) reject(new Error("Failed to export one or more PDF pages as JPG."));
          else resolve(result);
        }, "image/jpeg", jpgQuality);
      });

      rendered.push({
        pageNumber,
        blob,
        previewUrl: URL.createObjectURL(blob),
      });
      setProgress(Math.round((pageNumber / pdf.numPages) * 100));
    }

    return rendered;
  }

  function resetState() {
    pages.forEach((p) => URL.revokeObjectURL(p.previewUrl));
    setPages([]);
    setStatus(null);
    setError(null);
    setProgress(0);
  }

  async function handleFile(selected: File | null) {
    if (!selected) return;
    if (!/\.pdf$/i.test(selected.name) && selected.type !== "application/pdf") {
      setError("Please choose a PDF file.");
      return;
    }

    resetState();
    setBusy(true);
    setFile(selected);

    try {
      const rendered = await renderToJpg(selected, qualityRatio);
      setPages(rendered);
      setStatus(`Converted ${rendered.length} page${rendered.length === 1 ? "" : "s"} to JPG.`);
    } catch (e) {
      setFile(null);
      setError(e instanceof Error ? e.message : "Could not convert this PDF to JPG.");
    } finally {
      setBusy(false);
    }
  }

  async function handleReconvert() {
    if (!file) return;
    resetState();
    setBusy(true);
    try {
      const rendered = await renderToJpg(file, qualityRatio);
      setPages(rendered);
      setStatus(`Re-rendered ${rendered.length} pages at ${clampQuality(quality)}% quality.`);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not re-render JPG previews.");
    } finally {
      setBusy(false);
    }
  }

  async function handleDownloadZip() {
    if (pages.length === 0 || !file) return;
    setBusy(true);
    setError(null);
    try {
      const JSZip = (await import("jszip")).default;
      const zip = new JSZip();
      const stem = file.name.replace(/\.pdf$/i, "");
      pages.forEach((p) => zip.file(`${stem}-page-${String(p.pageNumber).padStart(2, "0")}.jpg`, p.blob));
      const output = await zip.generateAsync({ type: "blob" });
      triggerBlobDownload(output, `${stem}-jpg-pages.zip`);
      setStatus(`Downloaded ${pages.length} JPGs as ZIP.`);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not generate ZIP archive.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-6">
      {!file ? (
        <Dropzone onFiles={(files) => void handleFile(files[0] ?? null)} label="Drop a PDF to convert to JPG" hint="All conversion happens locally in your browser." />
      ) : (
        <div className="card space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-medium text-sage-900">{file.name}</p>
              <p className="text-xs text-sage-700">{formatBytes(file.size)} · {pages.length || "…"} pages</p>
            </div>
            <button type="button" className="btn-ghost" onClick={() => { resetState(); setFile(null); }} disabled={busy}>Choose another file</button>
          </div>

          <label className="block text-sm font-medium text-sage-900" htmlFor="jpg-quality">JPG quality: {clampQuality(quality)}%</label>
          <input id="jpg-quality" type="range" min={40} max={95} step={1} value={quality} onChange={(e) => setQuality(Number(e.target.value))} className="w-full" disabled={busy} />
          <div className="flex flex-wrap gap-3">
            <button type="button" className="btn-ghost" onClick={() => void handleReconvert()} disabled={busy || !file}>Apply quality</button>
            <button type="button" className="btn-primary" onClick={() => void handleDownloadZip()} disabled={busy || pages.length === 0}>
              {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
              Download ZIP
            </button>
          </div>
        </div>
      )}

      {busy && <p role="status" className="text-sm text-sage-700">Processing… {progress}%</p>}
      {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
      {status && <p role="status" className="text-sm text-sage-700">{status}</p>}

      {pages.length > 0 && (
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="JPG page previews">
          {pages.map((p) => (
            <article key={p.pageNumber} className="card">
              <img src={p.previewUrl} alt={`PDF page ${p.pageNumber} preview`} className="w-full rounded-lg border border-sand-200" />
              <div className="mt-3 flex items-center justify-between gap-3">
                <p className="text-sm text-sage-800">Page {p.pageNumber}</p>
                <button type="button" className="btn-ghost" onClick={() => triggerBlobDownload(p.blob, `page-${String(p.pageNumber).padStart(2, "0")}.jpg`)}>Download JPG</button>
              </div>
            </article>
          ))}
        </section>
      )}
    </div>
  );
}
