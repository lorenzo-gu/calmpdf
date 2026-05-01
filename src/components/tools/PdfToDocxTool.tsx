"use client";

import { useState } from "react";
import { FileText, Loader2 } from "lucide-react";
import { Dropzone } from "@/components/Dropzone";
import { pdfToDocx } from "@/lib/conversion";
import { formatBytes, triggerBlobDownload } from "@/lib/pdf";

const PDF_EXT = /\.pdf$/i;

export function PdfToDocxTool() {
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{
    filename: string;
    originalSize: number;
    outputSize: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleFiles(files: File[]) {
    setError(null);
    setResult(null);
    const next = files[0];
    if (!next) return;
    const looksLikePdf = PDF_EXT.test(next.name) || next.type === "application/pdf";
    if (!looksLikePdf) {
      setError("Please choose a PDF file.");
      return;
    }
    setFile(next);
  }

  async function handleConvert() {
    if (!file) return;
    setBusy(true);
    setError(null);
    setResult(null);

    try {
      const blob = await pdfToDocx(file);
      const filename = file.name.replace(PDF_EXT, "") + ".docx";
      triggerBlobDownload(blob, filename);
      setResult({
        filename,
        originalSize: file.size,
        outputSize: blob.size,
      });
    } catch (e) {
      const message =
        e instanceof Error && e.message ? e.message : "Something went wrong.";
      setError(message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-6">
      {!file ? (
        <Dropzone
          accept="application/pdf,.pdf"
          onFiles={handleFiles}
          label="Drop a PDF to convert"
          hint="Conversion happens in your browser. Your file is never uploaded."
        />
      ) : (
        <div className="card">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0 flex items-center gap-3">
              <FileText className="h-5 w-5 shrink-0 text-sage-700" aria-hidden />
              <div className="min-w-0">
                <p className="truncate font-medium text-sage-900">{file.name}</p>
                <p className="text-xs text-sage-700">{formatBytes(file.size)}</p>
              </div>
            </div>
            <button
              type="button"
              className="btn-ghost"
              onClick={() => {
                setFile(null);
                setResult(null);
                setError(null);
              }}
              disabled={busy}
            >
              Choose another
            </button>
          </div>
        </div>
      )}

      <p className="text-sm text-sage-700">
        Tip: this first version works best for simple, text-based PDFs. Scanned PDFs and complex layouts are not supported yet.
      </p>

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      {result && (
        <div className="card bg-sage-50 border-sage-100">
          <p className="font-medium text-sage-900">Converted and downloaded.</p>
          <p className="mt-1 text-sm text-sage-700">
            Done. Your browser downloaded <code>{result.filename}</code>. Nothing was uploaded.
          </p>
          <p className="mt-2 text-xs text-sage-700">
            Original: {formatBytes(result.originalSize)} · DOCX: {formatBytes(result.outputSize)}
          </p>
        </div>
      )}

      <div className="flex gap-3">
        <button
          type="button"
          className="btn-primary"
          disabled={busy || !file}
          onClick={handleConvert}
        >
          {busy && <Loader2 className="h-4 w-4 animate-spin" />}
          {busy ? "Converting…" : "Convert to DOCX"}
        </button>
      </div>
    </div>
  );
}
