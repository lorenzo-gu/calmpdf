"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { Dropzone } from "@/components/Dropzone";
import { formatBytes, pdfPageCount, splitPdf, triggerDownload } from "@/lib/pdf";

export function SplitPdfTool() {
  const [file, setFile] = useState<File | null>(null);
  const [pages, setPages] = useState<number | null>(null);
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(1);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!file) {
      setPages(null);
      return;
    }
    pdfPageCount(file)
      .then((n) => {
        setPages(n);
        setFrom(1);
        setTo(n);
      })
      .catch(() => setError("Could not read the PDF. Is it password-protected?"));
  }, [file]);

  async function handleSplit() {
    if (!file || !pages) return;
    setBusy(true);
    setError(null);
    try {
      const bytes = await splitPdf(file, from, to);
      const name = file.name.replace(/\.pdf$/i, "") + `-pages-${from}-${to}.pdf`;
      triggerDownload(bytes, name);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-6">
      {!file ? (
        <Dropzone onFiles={(fs) => setFile(fs[0] ?? null)} label="Drop a PDF to split" />
      ) : (
        <div className="card">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate font-medium text-sage-900">{file.name}</p>
              <p className="text-xs text-sage-700">
                {formatBytes(file.size)}{pages ? ` · ${pages} pages` : ""}
              </p>
            </div>
            <button type="button" className="btn-ghost" onClick={() => setFile(null)} disabled={busy}>
              Choose another
            </button>
          </div>
        </div>
      )}

      {pages && (
        <div className="card">
          <h3 className="font-semibold">Choose a page range</h3>
          <div className="mt-4 flex flex-wrap items-end gap-4">
            <label className="flex flex-col text-sm">
              <span className="text-sage-700 mb-1">From page</span>
              <input
                type="number"
                min={1}
                max={pages}
                value={from}
                onChange={(e) => setFrom(Math.max(1, Math.min(pages, Number(e.target.value) || 1)))}
                className="w-24 rounded-lg border border-sand-200 px-3 py-2"
              />
            </label>
            <label className="flex flex-col text-sm">
              <span className="text-sage-700 mb-1">To page</span>
              <input
                type="number"
                min={from}
                max={pages}
                value={to}
                onChange={(e) => setTo(Math.max(from, Math.min(pages, Number(e.target.value) || from)))}
                className="w-24 rounded-lg border border-sand-200 px-3 py-2"
              />
            </label>
            <p className="text-xs text-sage-700">Total pages: {pages}</p>
          </div>
        </div>
      )}

      {error && <p className="text-sm text-red-600" role="alert">{error}</p>}

      <div className="flex gap-3">
        <button type="button" className="btn-primary" disabled={busy || !pages} onClick={handleSplit}>
          {busy && <Loader2 className="h-4 w-4 animate-spin" />}
          {busy ? "Splitting…" : "Extract pages"}
        </button>
      </div>
    </div>
  );
}
