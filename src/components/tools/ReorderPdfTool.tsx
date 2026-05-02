"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, Download, GripVertical, Loader2 } from "lucide-react";
import { Dropzone } from "@/components/Dropzone";
import { formatBytes, pdfPageCount, reorderPdf, triggerDownload } from "@/lib/pdf";

type PageItem = { id: string; pageNumber: number };

function moveItem(items: PageItem[], index: number, direction: -1 | 1) {
  const next = index + direction;
  if (next < 0 || next >= items.length) return items;
  const copy = [...items];
  [copy[index], copy[next]] = [copy[next], copy[index]];
  return copy;
}

export function ReorderPdfTool() {
  const [file, setFile] = useState<File | null>(null);
  const [pages, setPages] = useState<PageItem[]>([]);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const hasChanges = useMemo(() => pages.some((p, i) => p.pageNumber !== i + 1), [pages]);

  async function handleFile(selected: File | null) {
    if (!selected) return;
    setBusy(true);
    setStatus(null);
    setError(null);
    try {
      if (!/\.pdf$/i.test(selected.name) && selected.type !== "application/pdf") {
        throw new Error("Please choose a PDF file.");
      }
      const total = await pdfPageCount(selected);
      setFile(selected);
      setPages(Array.from({ length: total }, (_, i) => ({ id: crypto.randomUUID(), pageNumber: i + 1 })));
      setStatus(total === 1 ? "This file has one page, so there is nothing to reorder." : `Loaded ${total} pages.`);
    } catch (e) {
      setFile(null);
      setPages([]);
      setError(e instanceof Error ? e.message : "Could not open this PDF.");
    } finally {
      setBusy(false);
    }
  }

  async function handleDownload() {
    if (!file || pages.length === 0) return;
    setBusy(true);
    setError(null);
    setStatus(null);
    try {
      const order = pages.map((p) => p.pageNumber - 1);
      const bytes = await reorderPdf(file, order);
      const outputName = file.name.replace(/\.pdf$/i, "") + "-reordered.pdf";
      triggerDownload(bytes, outputName);
      setStatus(hasChanges ? `Downloaded ${outputName}.` : `Downloaded ${outputName} with the original page order.`);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not reorder PDF.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-6">
      {!file ? (
        <Dropzone onFiles={(files) => void handleFile(files[0] ?? null)} label="Drop a PDF to reorder pages" hint="Your document is processed locally in your browser." />
      ) : (
        <div className="card">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate font-medium text-sage-900">{file.name}</p>
              <p className="text-xs text-sage-700">{formatBytes(file.size)} · {pages.length} pages</p>
            </div>
            <button type="button" className="btn-ghost" onClick={() => { setFile(null); setPages([]); setStatus(null); setError(null); }} disabled={busy}>Choose another</button>
          </div>
        </div>
      )}

      {file && pages.length > 0 && (
        <div className="card">
          <h2 className="font-semibold text-sage-900">Reorder pages</h2>
          <p className="mt-1 text-sm text-sage-700">Drag rows to move pages, or use the move buttons for keyboard-friendly controls.</p>
          <ul className="mt-4 space-y-2" aria-label="PDF pages">
            {pages.map((page, index) => (
              <li
                key={page.id}
                className="flex items-center justify-between gap-3 rounded-xl border border-sand-200 bg-white px-3 py-2"
                draggable
                onDragStart={() => setDraggingId(page.id)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => {
                  if (!draggingId || draggingId === page.id) return;
                  const from = pages.findIndex((p) => p.id === draggingId);
                  const to = pages.findIndex((p) => p.id === page.id);
                  if (from < 0 || to < 0) return;
                  const copy = [...pages];
                  const [item] = copy.splice(from, 1);
                  copy.splice(to, 0, item);
                  setPages(copy);
                }}
                onDragEnd={() => setDraggingId(null)}
              >
                <div className="flex items-center gap-2">
                  <GripVertical className="h-4 w-4 text-sage-500" aria-hidden="true" />
                  <span className="text-sm text-sage-800">Page {page.pageNumber}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button type="button" aria-label={`Move page ${page.pageNumber} up`} className="btn-ghost !px-2 !py-1" onClick={() => setPages((prev) => moveItem(prev, index, -1))} disabled={index === 0 || busy}><ArrowUp className="h-4 w-4" /></button>
                  <button type="button" aria-label={`Move page ${page.pageNumber} down`} className="btn-ghost !px-2 !py-1" onClick={() => setPages((prev) => moveItem(prev, index, 1))} disabled={index === pages.length - 1 || busy}><ArrowDown className="h-4 w-4" /></button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
      {status && <p role="status" className="text-sm text-sage-700">{status}</p>}

      <button type="button" className="btn-primary" onClick={handleDownload} disabled={!file || busy || pages.length === 0}>
        {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
        {busy ? "Preparing PDF…" : "Download reordered PDF"}
      </button>
    </div>
  );
}
