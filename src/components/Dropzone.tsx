"use client";

import { useCallback, useState } from "react";
import { UploadCloud } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  multiple?: boolean;
  accept?: string;
  onFiles: (files: File[]) => void;
  label?: string;
  hint?: string;
};

export function Dropzone({
  multiple = false,
  accept = "application/pdf",
  onFiles,
  label = "Drop a PDF here, or click to choose",
  hint = "Your file never leaves your browser.",
}: Props) {
  const [hover, setHover] = useState(false);

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
    <label
      className={cn(
        "dropzone cursor-pointer",
        hover && "bg-sage-100 border-sage-500",
      )}
      onDragOver={(e) => {
        e.preventDefault();
        setHover(true);
      }}
      onDragLeave={() => setHover(false)}
      onDrop={(e) => {
        e.preventDefault();
        setHover(false);
        handleFiles(e.dataTransfer.files);
      }}
    >
      <input
        type="file"
        className="sr-only"
        multiple={multiple}
        accept={accept}
        onChange={(e) => handleFiles(e.target.files)}
      />
      <UploadCloud className="h-10 w-10 text-sage-500" aria-hidden />
      <p className="mt-3 font-medium text-sage-900">{label}</p>
      <p className="mt-1 text-sm text-sage-700">{hint}</p>
    </label>
  );
}
