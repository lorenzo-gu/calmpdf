"use client";

import { useState } from "react";
import { ArrowDown, ArrowUp, Trash2, Loader2 } from "lucide-react";
import { Dropzone } from "@/components/Dropzone";
import { formatBytes, mergePdfs, triggerDownload } from "@/lib/pdf";

export function MergePdfTool() {
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function addFiles(more: File[]) {
    setError(null);
    setFiles((prev) => [...prev, ...more]);
  }

  function move(i: number, dir: -1 | 1) {
    setFiles((prev) => {
      const next = [...prev];
      const j = i + dir;
      if (j < 0 || j >= next.length) return prev;
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });
  }

  function remove(i: number) {
    setFiles((prev) => prev.filter((_, idx) => idx !== i));
  }

  async function handleMerge() {
    if (files.length < 2) {
      setError("Pick at least two PDFs to merge.");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const bytes = await mergePdfs(files);
      triggerDownload(bytes, "merged.pdf");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-6">
      <Dropzone
        multiple
        onFiles={addFiles}
        label="Drop PDFs here, or click to choose"
        hint="Add two or more PDFs. You can reorder them below."
      />

      {files.length > 0 && (
        <ul className="rounded-2xl border border-sand-200 bg-white divide-y divide-sand-200">
          {files.map((f, i) => (
            <li key={`${f.name}-${i}`} className="flex items-center justify-between gap-3 p-3">
              <div className="min-w-0">
                <p className="truncate font-medium text-sage-900">{f.name}</p>
                <p className="text-xs text-sage-700">{formatBytes(f.size)}</p>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <button type="button" className="btn-ghost p-2" aria-label="Move up" onClick={() => move(i, -1)}>
                  <ArrowUp className="h-4 w-4" />
                </button>
                <button type="button" className="btn-ghost p-2" aria-label="Move down" onClick={() => move(i, 1)}>
                  <ArrowDown className="h-4 w-4" />
                </button>
                <button type="button" className="btn-ghost p-2 text-red-600" aria-label="Remove" onClick={() => remove(i)}>
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {error && <p className="text-sm text-red-600" role="alert">{error}</p>}

      <div className="flex gap-3">
        <button type="button" className="btn-primary" disabled={busy || files.length < 2} onClick={handleMerge}>
          {busy && <Loader2 className="h-4 w-4 animate-spin" />}
          {busy ? "Merging…" : `Merge ${files.length || ""} PDFs`.trim()}
        </button>
        {files.length > 0 && (
          <button type="button" className="btn-ghost" onClick={() => setFiles([])} disabled={busy}>
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
