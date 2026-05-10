"use client";

import { useState } from "react";
import { Dropzone } from "@/components/Dropzone";
import { compressPdfLossless, formatBytes, triggerDownload } from "@/lib/pdf";

type Result = { originalSize: number; compressedSize: number; filename: string };

export function CompressPdfTool() {
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleCompress() {
    if (!file) return;
    setBusy(true);
    setError(null);
    setResult(null);
    try {
      const bytes = await compressPdfLossless(file);
      const name = file.name.replace(/\.pdf$/i, "") + "-compressed.pdf";
      triggerDownload(bytes, name);
      setResult({ originalSize: file.size, compressedSize: bytes.byteLength, filename: name });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-6">
      <Dropzone
        onFiles={(fs) => setFile(fs[0] ?? null)}
        label={busy ? "Compressing your PDF" : "Drop your PDF here"}
        state={busy ? "processing" : error ? "error" : result ? "success" : file ? "file-selected" : "empty"}
        file={file}
        readinessText="Compression is ready. We process everything locally in your browser."
        errorText={error}
        successText={result ? "Compression complete. Your file was downloaded locally." : undefined}
        onClearFile={busy ? undefined : () => { setFile(null); setResult(null); setError(null); }}
      />

      {result && (
        <div className="card bg-sage-50 border-sage-100">
          <p className="font-medium text-sage-900">Done.</p>
          <p className="text-sm text-sage-700 mt-1">
            {formatBytes(result.originalSize)} → {formatBytes(result.compressedSize)}
            {result.compressedSize < result.originalSize && (
              <> (saved {Math.round((1 - result.compressedSize / result.originalSize) * 100)}%)</>
            )}
          </p>
          <p className="text-xs text-sage-700 mt-2">
            Your browser downloaded <code>{result.filename}</code>. Nothing was uploaded.
          </p>
        </div>
      )}

      <div className="flex gap-3">
        <button type="button" className="btn-primary" disabled={busy || !file} onClick={handleCompress}>
          {busy ? "Compressing…" : "Compress PDF"}
        </button>
      </div>

      <p className="text-xs text-sage-700">
        Tip: this release uses lossless compression only. Image-heavy scans will shrink more once
        we ship the &quot;rasterize&quot; option in the next update.
      </p>
    </div>
  );
}
