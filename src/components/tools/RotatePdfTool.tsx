"use client";

import { useState } from "react";
import { Loader2, RotateCw } from "lucide-react";
import { Dropzone } from "@/components/Dropzone";
import { formatBytes, rotatePdf, triggerDownload } from "@/lib/pdf";

const ROTATIONS = [
  { value: 90 as const, label: "90° clockwise" },
  { value: 180 as const, label: "180°" },
  { value: 270 as const, label: "270° clockwise" },
];

export function RotatePdfTool() {
  const [file, setFile] = useState<File | null>(null);
  const [rotation, setRotation] = useState<(typeof ROTATIONS)[number]["value"]>(90);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState<string | null>(null);

  async function handleRotate() {
    if (!file) return;
    setBusy(true);
    setError(null);
    setDone(null);

    try {
      const bytes = await rotatePdf(file, rotation);
      const name = file.name.replace(/\.pdf$/i, "") + `-rotated-${rotation}.pdf`;
      triggerDownload(bytes, name);
      setDone(name);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-6">
      {!file ? (
        <Dropzone
          onFiles={(fs) => {
            setError(null);
            setDone(null);
            setFile(fs[0] ?? null);
          }}
          label="Drop a PDF to rotate"
          hint="Rotate every page in the document without uploading it."
        />
      ) : (
        <div className="card">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate font-medium text-sage-900">{file.name}</p>
              <p className="text-xs text-sage-700">{formatBytes(file.size)}</p>
            </div>
            <button
              type="button"
              className="btn-ghost"
              onClick={() => {
                setFile(null);
                setDone(null);
                setError(null);
              }}
              disabled={busy}
            >
              Choose another
            </button>
          </div>
        </div>
      )}

      {file && (
        <div className="card">
          <h3 className="font-semibold text-sage-900">Choose a rotation</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {ROTATIONS.map((option) => {
              const active = rotation === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setRotation(option.value)}
                  className={[
                    "rounded-2xl border px-4 py-4 text-left transition-colors",
                    active
                      ? "border-sage-500 bg-sage-50 text-sage-900"
                      : "border-sand-200 bg-white text-sage-700 hover:border-sage-300",
                  ].join(" ")}
                  aria-pressed={active}
                >
                  <div className="flex items-center gap-2 font-medium">
                    <RotateCw className="h-4 w-4" />
                    {option.label}
                  </div>
                  <p className="mt-2 text-sm">
                    Rotate all pages {option.value === 180 ? "upside down" : `by ${option.value} degrees`}.
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {error && <p className="text-sm text-red-600" role="alert">{error}</p>}

      {done && (
        <div className="card bg-sage-50 border-sage-100">
          <p className="font-medium text-sage-900">Rotated and downloaded.</p>
          <p className="mt-1 text-sm text-sage-700">
            Your browser downloaded <code>{done}</code>. The original PDF was not changed.
          </p>
        </div>
      )}

      <div className="flex gap-3">
        <button type="button" className="btn-primary" disabled={busy || !file} onClick={handleRotate}>
          {busy && <Loader2 className="h-4 w-4 animate-spin" />}
          {busy ? "Rotating…" : "Rotate PDF"}
        </button>
      </div>
    </div>
  );
}
