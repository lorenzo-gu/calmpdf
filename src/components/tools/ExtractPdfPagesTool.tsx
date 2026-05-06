"use client";

import { useMemo, useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Dropzone } from "@/components/Dropzone";
import { extractPdfPages, formatBytes, parsePageSelection, pdfPageCount, triggerDownload } from "@/lib/pdf";

type PageState = { pageNumber: number; selected: boolean };

export function ExtractPdfPagesTool() {
  const [file, setFile] = useState<File | null>(null);
  const [pages, setPages] = useState<PageState[]>([]);
  const [rangeInput, setRangeInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const selectedCount = useMemo(() => pages.filter((p) => p.selected).length, [pages]);

  async function handleFile(next: File | null) {
    if (!next) return;
    setBusy(true);
    setError(null);
    setStatus(null);
    try {
      const total = await pdfPageCount(next);
      setFile(next);
      setPages(Array.from({ length: total }, (_, i) => ({ pageNumber: i + 1, selected: false })));
      setRangeInput("");
      setStatus(`Loaded ${total} pages. Select pages or enter ranges like 1-3, 6, 9-11.`);
    } catch (e) {
      setFile(null);
      setPages([]);
      setError(e instanceof Error ? e.message : "Could not open PDF.");
    } finally {
      setBusy(false);
    }
  }

  function applyRangeSelection() {
    if (!pages.length) return;
    try {
      const selectedPages = parsePageSelection(rangeInput, pages.length);
      const selectedSet = new Set(selectedPages);
      setPages((prev) => prev.map((p) => ({ ...p, selected: selectedSet.has(p.pageNumber) })));
      setStatus(`Selected ${selectedPages.length} pages from range input.`);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Invalid range input.");
    }
  }

  async function handleExtract() {
    if (!file || selectedCount === 0) return;
    setBusy(true);
    setError(null);
    setStatus(null);
    try {
      const selectedIndices = pages.filter((p) => p.selected).map((p) => p.pageNumber - 1);
      const bytes = await extractPdfPages(file, selectedIndices);
      const outputName = file.name.replace(/\.pdf$/i, "") + "-extracted-pages.pdf";
      triggerDownload(bytes, outputName);
      setStatus(`Downloaded ${outputName}.`);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not extract selected pages.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-6">
      {!file ? (
        <Dropzone onFiles={(files) => void handleFile(files[0] ?? null)} label="Drop a PDF to extract selected pages" hint="Processing happens locally in your browser." />
      ) : (
        <div className="card flex items-center justify-between gap-3">
          <div>
            <p className="font-medium text-sage-900">{file.name}</p>
            <p className="text-xs text-sage-700">{formatBytes(file.size)} · {pages.length} pages</p>
          </div>
          <button type="button" className="btn-ghost" disabled={busy} onClick={() => { setFile(null); setPages([]); setStatus(null); setError(null); }}>
            Choose another
          </button>
        </div>
      )}

      {file && (
        <div className="card space-y-4">
          <h2 className="font-semibold text-sage-900">Select pages</h2>
          <div className="flex flex-wrap gap-2">
            {pages.map((page) => (
              <button
                key={page.pageNumber}
                type="button"
                onClick={() => setPages((prev) => prev.map((p) => p.pageNumber === page.pageNumber ? { ...p, selected: !p.selected } : p))}
                className={`rounded-lg border px-3 py-2 text-sm ${page.selected ? "border-sage-700 bg-sage-50 text-sage-900" : "border-sand-200 bg-white text-sage-700"}`}
                aria-pressed={page.selected}
              >
                Page {page.pageNumber}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-end gap-3">
            <label className="flex min-w-[240px] flex-col text-sm">
              <span className="mb-1 text-sage-700">Quick range input</span>
              <input
                value={rangeInput}
                onChange={(e) => setRangeInput(e.target.value)}
                placeholder="1-3, 5, 8-10"
                className="rounded-lg border border-sand-200 px-3 py-2"
              />
            </label>
            <button type="button" className="btn-ghost" onClick={applyRangeSelection} disabled={busy || pages.length === 0}>Apply range</button>
            <button type="button" className="btn-ghost" onClick={() => setPages((prev) => prev.map((p) => ({ ...p, selected: true })))} disabled={busy || pages.length === 0}>Select all</button>
            <button type="button" className="btn-ghost" onClick={() => setPages((prev) => prev.map((p) => ({ ...p, selected: false })))} disabled={busy || selectedCount === 0}>Clear</button>
          </div>

          <p className="text-sm text-sage-700">{selectedCount} pages selected.</p>
        </div>
      )}

      {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
      {status && <p role="status" className="text-sm text-sage-700">{status}</p>}

      <button type="button" className="btn-primary" onClick={handleExtract} disabled={!file || busy || selectedCount === 0}>
        {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
        {busy ? "Creating PDF…" : "Download selected pages"}
      </button>
    </div>
  );
}
