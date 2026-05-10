"use client";

import { useCallback, useState } from "react";
import { CheckCircle2, FileText, Loader2, UploadCloud, XCircle } from "lucide-react";
import { cn } from "@/lib/cn";
import { formatBytes } from "@/lib/pdf";

type DropzoneState = "empty" | "drag-hover" | "file-selected" | "processing" | "success" | "error";

type Props = {
  multiple?: boolean;
  accept?: string;
  onFiles: (files: File[]) => void;
  label?: string;
  hint?: string;
  state?: DropzoneState;
  file?: File | null;
  readinessText?: string;
  errorText?: string | null;
  successText?: string;
  onClearFile?: () => void;
  ctaText?: string;
};

export function Dropzone({
  multiple = false,
  accept = "application/pdf",
  onFiles,
  label = "Drop your PDF here",
  hint = "PDF only · Processed in your browser · No upload",
  state = "empty",
  file,
  readinessText,
  errorText,
  successText,
  onClearFile,
  ctaText = "or choose a file",
}: Props) {
  const [hover, setHover] = useState(false);
  const effectiveState = hover ? "drag-hover" : state;

  const handleFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList) return;
      const files = Array.from(fileList).filter((f) =>
        accept.includes("pdf") ? f.type === "application/pdf" || f.name.toLowerCase().endsWith(".pdf") : true,
      );
      if (files.length) onFiles(files);
    },
    [accept, onFiles],
  );

  return (
    <div className="space-y-3">
      <label
        className={cn(
          "dropzone cursor-pointer rounded-3xl border-2 border-dashed px-8 py-16",
          effectiveState === "drag-hover" && "border-sage-500 bg-sage-100",
          effectiveState === "processing" && "cursor-wait border-sage-400 bg-sage-50",
          effectiveState === "success" && "border-emerald-300 bg-emerald-50",
          effectiveState === "error" && "border-red-300 bg-red-50",
        )}
        onDragOver={(e) => {
          e.preventDefault();
          setHover(true);
        }}
        onDragLeave={() => setHover(false)}
        onDrop={(e) => {
          e.preventDefault();
          setHover(false);
          if (state !== "processing") handleFiles(e.dataTransfer.files);
        }}
      >
        <input
          type="file"
          className="sr-only"
          multiple={multiple}
          accept={accept}
          onChange={(e) => handleFiles(e.target.files)}
          disabled={state === "processing"}
        />
        {effectiveState === "processing" ? <Loader2 className="h-10 w-10 animate-spin text-sage-500" aria-hidden /> : <UploadCloud className="h-10 w-10 text-sage-500" aria-hidden />}
        <p className="mt-4 text-xl font-semibold text-sage-900">{label}</p>
        <p className="mt-2 text-base font-medium text-sage-700">{ctaText}</p>
        <p className="mt-2 text-sm text-sage-700">{hint}</p>
      </label>

      {file && (
        <div className="card p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-sage-900">
                <FileText className="h-4 w-4" aria-hidden />
                <p className="truncate font-medium">{file.name}</p>
              </div>
              <p className="mt-1 text-xs text-sage-700">{formatBytes(file.size)}</p>
              <p className="mt-2 text-sm text-sage-700">{readinessText ?? "Ready when you are."}</p>
            </div>
            {onClearFile && (
              <button type="button" className="btn-ghost" onClick={onClearFile}>
                Remove
              </button>
            )}
          </div>
        </div>
      )}

      {successText && <p className="flex items-center gap-2 text-sm text-emerald-700"><CheckCircle2 className="h-4 w-4" aria-hidden />{successText}</p>}
      {errorText && <p role="alert" className="flex items-center gap-2 text-sm text-red-700"><XCircle className="h-4 w-4" aria-hidden />{errorText}</p>}
    </div>
  );
}
