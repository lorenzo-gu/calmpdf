"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Loader2, Move, Plus, Signature, Type } from "lucide-react";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { Dropzone } from "@/components/Dropzone";
import { formatBytes, readFileAsArrayBuffer, triggerDownload } from "@/lib/pdf";

type PdfPageMeta = { width: number; height: number };

type OverlayBase = {
  id: string;
  pageIndex: number;
  xPct: number;
  yPct: number;
  wPct: number;
  hPct: number;
};

type ImageOverlay = OverlayBase & {
  kind: "image";
  file: File;
  previewUrl: string;
};

type TextOverlay = OverlayBase & {
  kind: "text";
  text: string;
  size: number;
  font: "helvetica" | "times" | "courier";
  color: string;
};

type SignatureOverlay = OverlayBase & {
  kind: "signature" | "initials";
  text: string;
  size: number;
  font: "times" | "helvetica" | "courier";
  color: string;
};

type Overlay = ImageOverlay | TextOverlay | SignatureOverlay;
type TextLikeOverlay = TextOverlay | SignatureOverlay;
type ResizeHandle = "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw";

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

function toRgb(hex: string) {
  const clean = hex.replace("#", "");
  const value = clean.length === 3
    ? clean.split("").map((c) => c + c).join("")
    : clean;
  const num = Number.parseInt(value, 16);
  const r = ((num >> 16) & 255) / 255;
  const g = ((num >> 8) & 255) / 255;
  const b = (num & 255) / 255;
  return rgb(r, g, b);
}

export function EditPdfTool() {
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState<string | null>(null);
  const [pages, setPages] = useState<PdfPageMeta[]>([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [overlays, setOverlays] = useState<Overlay[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [textDraft, setTextDraft] = useState("");
  const [nameDraft, setNameDraft] = useState("Jane Doe");
  const [initialsDraft, setInitialsDraft] = useState("JD");
  const [editingId, setEditingId] = useState<string | null>(null);

  const [pagePreviewUrl, setPagePreviewUrl] = useState<string | null>(null);

  const stageRef = useRef<HTMLDivElement | null>(null);
  const activeTextRef = useRef<HTMLTextAreaElement | null>(null);
  const imageUrlMapRef = useRef<Record<string, string>>({});

  const selectedOverlay = useMemo(
    () => overlays.find((overlay) => overlay.id === selectedId) ?? null,
    [overlays, selectedId],
  );

  const currentPage = pages[currentPageIndex];
  const stageRatio = currentPage ? currentPage.height / currentPage.width : 1.3;

  async function loadPdfMeta(nextFile: File) {
    const src = await PDFDocument.load(await readFileAsArrayBuffer(nextFile), { ignoreEncryption: true });
    const nextPages = src.getPages().map((page) => {
      const { width, height } = page.getSize();
      return { width, height };
    });
    setPages(nextPages);
    setCurrentPageIndex(0);
  }

  function addOverlay(overlay: Overlay) {
    setOverlays((prev) => [...prev, overlay]);
    setSelectedId(overlay.id);
  }

  function addTextOverlay() {
    const nextId = crypto.randomUUID();
    addOverlay({
      id: nextId,
      kind: "text",
      pageIndex: currentPageIndex,
      xPct: 0.1,
      yPct: 0.15,
      wPct: 0.45,
      hPct: 0.1,
      size: 24,
      font: "helvetica",
      color: "#1f2a2f",
      text: textDraft,
    });
    setEditingId(nextId);
  }

  function addSignatureOverlay(kind: "signature" | "initials") {
    const text = kind === "signature" ? nameDraft : initialsDraft;
    addOverlay({
      id: crypto.randomUUID(),
      kind,
      pageIndex: currentPageIndex,
      xPct: 0.1,
      yPct: 0.75,
      wPct: kind === "signature" ? 0.46 : 0.24,
      hPct: kind === "signature" ? 0.13 : 0.1,
      text,
      size: kind === "signature" ? 42 : 32,
      font: "times",
      color: "#1f2a2f",
    });
  }

  function addImageOverlay(imageFile: File) {
    const previewUrl = URL.createObjectURL(imageFile);
    addOverlay({
      id: crypto.randomUUID(),
      kind: "image",
      pageIndex: currentPageIndex,
      xPct: 0.1,
      yPct: 0.2,
      wPct: 0.28,
      hPct: 0.24,
      file: imageFile,
      previewUrl,
    });
  }

  function updateOverlay(id: string, patch: Partial<Overlay>) {
    setOverlays((prev) => prev.map((overlay) => (overlay.id === id ? { ...overlay, ...patch } as Overlay : overlay)));
  }

  function removeSelected() {
    if (!selectedId) return;
    setOverlays((prev) => prev.filter((overlay) => overlay.id !== selectedId));
    setSelectedId(null);
  }

  function beginDrag(overlay: Overlay, event: React.PointerEvent<HTMLDivElement>) {
    if (!stageRef.current) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    const stageRect = stageRef.current.getBoundingClientRect();
    const startX = event.clientX;
    const startY = event.clientY;
    const startLeft = overlay.xPct * stageRect.width;
    const startTop = overlay.yPct * stageRect.height;

    const onMove = (moveEvent: PointerEvent) => {
      const nextLeft = startLeft + (moveEvent.clientX - startX);
      const nextTop = startTop + (moveEvent.clientY - startY);
      const maxX = stageRect.width * (1 - overlay.wPct);
      const maxY = stageRect.height * (1 - overlay.hPct);
      updateOverlay(overlay.id, {
        xPct: clamp(nextLeft / stageRect.width, 0, maxX / stageRect.width),
        yPct: clamp(nextTop / stageRect.height, 0, maxY / stageRect.height),
      });
    };

    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  }

  function beginResize(overlay: Overlay, event: React.PointerEvent<HTMLSpanElement>, handle: ResizeHandle) {
    if (!stageRef.current) return;
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.setPointerCapture(event.pointerId);
    const stageRect = stageRef.current.getBoundingClientRect();
    const startX = event.clientX;
    const startY = event.clientY;
    const startL = overlay.xPct * stageRect.width;
    const startT = overlay.yPct * stageRect.height;
    const startW = overlay.wPct * stageRect.width;
    const startH = overlay.hPct * stageRect.height;
    const minW = 36;
    const minH = 24;

    const onMove = (moveEvent: PointerEvent) => {
      const dx = moveEvent.clientX - startX;
      const dy = moveEvent.clientY - startY;
      let nextLeft = startL;
      let nextTop = startT;
      let nextWidth = startW;
      let nextHeight = startH;

      if (handle.includes("e")) nextWidth = clamp(startW + dx, minW, stageRect.width - startL);
      if (handle.includes("s")) nextHeight = clamp(startH + dy, minH, stageRect.height - startT);

      if (handle.includes("w")) {
        nextLeft = clamp(startL + dx, 0, startL + startW - minW);
        nextWidth = startW - (nextLeft - startL);
      }

      if (handle.includes("n")) {
        nextTop = clamp(startT + dy, 0, startT + startH - minH);
        nextHeight = startH - (nextTop - startT);
      }

      updateOverlay(overlay.id, {
        xPct: nextLeft / stageRect.width,
        yPct: nextTop / stageRect.height,
        wPct: nextWidth / stageRect.width,
        hPct: nextHeight / stageRect.height,
      });
    };

    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  }

  useEffect(() => {
    if (editingId && activeTextRef.current) activeTextRef.current.focus();
  }, [editingId]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!selectedId) return;
      const target = event.target as HTMLElement | null;
      const typingInField = target
        && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);
      if (typingInField) return;
      if (event.key === "Delete") {
        event.preventDefault();
        setOverlays((prev) => prev.filter((overlay) => overlay.id !== selectedId));
        setSelectedId(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedId]);

  useEffect(() => {
    const nextMap: Record<string, string> = {};
    overlays.forEach((overlay) => {
      if (overlay.kind === "image") nextMap[overlay.id] = overlay.previewUrl;
    });
    Object.entries(imageUrlMapRef.current).forEach(([id, url]) => {
      if (!nextMap[id]) URL.revokeObjectURL(url);
    });
    imageUrlMapRef.current = nextMap;
  }, [overlays]);

  useEffect(() => () => {
    Object.values(imageUrlMapRef.current).forEach((url) => URL.revokeObjectURL(url));
  }, []);


  useEffect(() => {
    let canceled = false;
    let activeUrl: string | null = null;

    async function buildPagePreview() {
      if (!file || !pages[currentPageIndex]) {
        setPagePreviewUrl((previous) => {
          if (previous) URL.revokeObjectURL(previous);
          return null;
        });
        return;
      }

      try {
        const sourceBytes = await readFileAsArrayBuffer(file);
        const sourceDoc = await PDFDocument.load(sourceBytes, { ignoreEncryption: true });
        const previewDoc = await PDFDocument.create();
        const [previewPage] = await previewDoc.copyPages(sourceDoc, [currentPageIndex]);
        previewDoc.addPage(previewPage);
        const previewBytes = await previewDoc.save({ useObjectStreams: true, addDefaultPage: false });

        if (canceled) return;

        const previewBuffer = new Uint8Array(previewBytes.byteLength);
        previewBuffer.set(previewBytes);
        activeUrl = URL.createObjectURL(new Blob([previewBuffer], { type: "application/pdf" }));
        setPagePreviewUrl((previous) => {
          if (previous) URL.revokeObjectURL(previous);
          return activeUrl;
        });
      } catch {
        if (!canceled) {
          setPagePreviewUrl((previous) => {
            if (previous) URL.revokeObjectURL(previous);
            return null;
          });
        }
      }
    }

    buildPagePreview();

    return () => {
      canceled = true;
      if (activeUrl) URL.revokeObjectURL(activeUrl);
    };
  }, [file, pages, currentPageIndex]);

  async function handleExport() {
    if (!file) return;
    setBusy(true);
    setError(null);
    setDone(null);

    try {
      const doc = await PDFDocument.load(await readFileAsArrayBuffer(file), { ignoreEncryption: true });
      const helvetica = await doc.embedFont(StandardFonts.Helvetica);
      const times = await doc.embedFont(StandardFonts.TimesRomanItalic);
      const courier = await doc.embedFont(StandardFonts.Courier);

      for (const overlay of overlays) {
        const page = doc.getPage(overlay.pageIndex);
        if (!page) continue;
        const { width, height } = page.getSize();
        const x = overlay.xPct * width;
        const y = height - (overlay.yPct + overlay.hPct) * height;
        const overlayWidth = overlay.wPct * width;
        const overlayHeight = overlay.hPct * height;

        if (overlay.kind === "image") {
          const bytes = await readFileAsArrayBuffer(overlay.file);
          const isPng = overlay.file.type.includes("png") || /\.png$/i.test(overlay.file.name);
          const image = isPng
            ? await doc.embedPng(bytes)
            : await doc.embedJpg(bytes);
          page.drawImage(image, { x, y, width: overlayWidth, height: overlayHeight });
          continue;
        }

        if (overlay.kind === "text") {
          page.drawText(overlay.text, {
            x,
            y: y + Math.max(0, overlayHeight - overlay.size),
            size: overlay.size,
            font: overlay.font === "times" ? times : overlay.font === "courier" ? courier : helvetica,
            color: toRgb(overlay.color),
            maxWidth: overlayWidth,
            lineHeight: overlay.size * 1.2,
          });
          continue;
        }

        page.drawText(overlay.text || (overlay.kind === "signature" ? "Signature" : "JD"), {
          x,
          y: y + Math.max(0, overlayHeight - overlay.size),
          size: overlay.size,
          font: overlay.font === "courier" ? courier : overlay.font === "helvetica" ? helvetica : times,
          color: toRgb(overlay.color),
          maxWidth: overlayWidth,
          lineHeight: overlay.size * 1.1,
        });
      }

      const edited = await doc.save({ useObjectStreams: true, addDefaultPage: false });
      const name = file.name.replace(/\.pdf$/i, "") + "-edited.pdf";
      triggerDownload(edited, name);
      setDone(name);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unable to edit PDF.");
    } finally {
      setBusy(false);
    }
  }

  const pageOverlays = overlays.filter((overlay) => overlay.pageIndex === currentPageIndex);

  return (
    <div className="space-y-6">
      {!file ? (
        <Dropzone
          onFiles={async (nextFiles) => {
            const next = nextFiles[0];
            if (!next) return;
            try {
              setError(null);
              setDone(null);
              setOverlays((prev) => {
                prev.forEach((overlay) => {
                  if (overlay.kind === "image") URL.revokeObjectURL(overlay.previewUrl);
                });
                return [];
              });
              setSelectedId(null);
              setPagePreviewUrl((previous) => {
                if (previous) URL.revokeObjectURL(previous);
                return null;
              });
              setFile(next);
              await loadPdfMeta(next);
            } catch (e) {
              setFile(null);
              setPagePreviewUrl((previous) => {
                if (previous) URL.revokeObjectURL(previous);
                return null;
              });
              setError(e instanceof Error ? e.message : "Could not open PDF.");
            }
          }}
          label="Drop a PDF to start editing"
          hint="Add images, text, signatures, and initials — then move them where you need."
        />
      ) : (
        <div className="card space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="truncate font-medium text-sage-900">{file.name}</p>
              <p className="text-xs text-sage-700">{formatBytes(file.size)} • {pages.length} pages</p>
            </div>
            <button
              type="button"
              className="btn-ghost"
              onClick={() => {
                setFile(null);
                setPages([]);
                setOverlays((prev) => {
                  prev.forEach((overlay) => {
                    if (overlay.kind === "image") URL.revokeObjectURL(overlay.previewUrl);
                  });
                  return [];
                });
                setSelectedId(null);
                setPagePreviewUrl((previous) => {
                  if (previous) URL.revokeObjectURL(previous);
                  return null;
                });
              }}
              disabled={busy}
            >
              Choose another
            </button>
          </div>

          <div className="flex flex-wrap items-end gap-3">
            <label className="text-sm text-sage-700">
              Page
              <select
                className="ml-2 rounded-xl border border-sand-300 bg-white px-3 py-2 text-sm"
                value={currentPageIndex}
                onChange={(event) => setCurrentPageIndex(Number(event.target.value))}
              >
                {pages.map((_, i) => (
                  <option key={i} value={i}>Page {i + 1}</option>
                ))}
              </select>
            </label>

            <label className="text-sm text-sage-700">
              Add image
              <input
                className="ml-2 block text-xs"
                type="file"
                accept="image/png,image/jpeg"
                onChange={(event) => {
                  const image = event.target.files?.[0];
                  if (!image) return;
                  addImageOverlay(image);
                  event.currentTarget.value = "";
                }}
              />
            </label>

            <label className="text-sm text-sage-700">
              Text
                <input
                  className="ml-2 rounded-xl border border-sand-300 bg-white px-3 py-2 text-sm"
                  placeholder="Add your text"
                  value={textDraft}
                  onChange={(event) => setTextDraft(event.target.value)}
                />
            </label>

            <button type="button" className="btn-ghost" onClick={addTextOverlay}>
              <Plus className="h-4 w-4" />
              Add text box
            </button>
          </div>

          <div className="flex flex-wrap items-end gap-3">
            <label className="text-sm text-sage-700">
              Signature name
              <input
                className="ml-2 rounded-xl border border-sand-300 bg-white px-3 py-2 text-sm"
                value={nameDraft}
                onChange={(event) => setNameDraft(event.target.value)}
              />
            </label>
            <button type="button" className="btn-ghost" onClick={() => addSignatureOverlay("signature")}>
              <Signature className="h-4 w-4" />
              Add signature
            </button>

            <label className="text-sm text-sage-700">
              Initials
              <input
                className="ml-2 w-20 rounded-xl border border-sand-300 bg-white px-3 py-2 text-sm"
                maxLength={4}
                value={initialsDraft}
                onChange={(event) => setInitialsDraft(event.target.value.toUpperCase())}
              />
            </label>
            <button type="button" className="btn-ghost" onClick={() => addSignatureOverlay("initials")}>
              <Type className="h-4 w-4" />
              Add initials
            </button>
          </div>
        </div>
      )}

      {file && (
        <div className="card">
          <div className="mb-3 text-sm text-sage-700 flex items-center gap-2">
            <Move className="h-4 w-4" />
            Drag items to position. Click and drag the bottom-right handle to resize. Press Delete to remove.
          </div>
          <div
            ref={stageRef}
            className="relative mx-auto w-full max-w-[720px] overflow-hidden rounded-xl border border-sand-300 bg-[linear-gradient(0deg,rgba(237,231,223,.35),rgba(237,231,223,.35)),white]"
            style={{ aspectRatio: `${1 / stageRatio}` }}
          >
            {pagePreviewUrl && (
              <iframe
                title={`Preview of ${file.name} page ${currentPageIndex + 1}`}
                src={pagePreviewUrl + "#toolbar=0&navpanes=0&scrollbar=0"}
                className="pointer-events-none absolute inset-0 h-full w-full border-0"
              />
            )}
            {pageOverlays.length === 0 && (
              <div className="absolute inset-0 grid place-items-center bg-white/20 text-sm text-sage-600">
                Add a text box, image, signature, or initials to this page.
              </div>
            )}

            {pageOverlays.map((overlay) => {
              const active = overlay.id === selectedId;
              return (
                <div
                  key={overlay.id}
                  onClick={() => setSelectedId(overlay.id)}
                  onPointerDown={(event) => beginDrag(overlay, event)}
                  className={[
                    "absolute rounded-lg text-left transition-colors overflow-hidden",
                    active ? "border-2 border-sage-700 bg-sage-50/20" : "border border-transparent hover:border-sage-500/60",
                  ].join(" ")}
                  style={{
                    left: `${overlay.xPct * 100}%`,
                    top: `${overlay.yPct * 100}%`,
                    width: `${overlay.wPct * 100}%`,
                    height: `${overlay.hPct * 100}%`,
                    padding: overlay.kind === "image" ? "0" : "8px",
                  }}
                >
                  {overlay.kind === "image" ? (
                    <img src={overlay.previewUrl} alt={overlay.file.name} className="h-full w-full object-contain bg-white" />
                  ) : (
                    <textarea
                      ref={active && editingId === overlay.id ? activeTextRef : null}
                      className="h-full w-full resize-none border-0 bg-transparent p-0 text-sage-900 outline-none"
                      style={{
                        fontSize: `${overlay.size}px`,
                        fontFamily: overlay.font === "times"
                          ? "Times New Roman, Times, serif"
                          : overlay.font === "courier"
                            ? "Courier New, monospace"
                            : overlay.kind === "signature"
                              ? "cursive"
                              : "Arial, sans-serif",
                        fontStyle: overlay.kind === "signature" ? "italic" : "normal",
                        lineHeight: 1.1,
                        color: overlay.color,
                        overflow: "hidden",
                      }}
                      value={overlay.text}
                      onFocus={() => {
                        setSelectedId(overlay.id);
                        setEditingId(overlay.id);
                      }}
                      onBlur={() => {
                        if (editingId === overlay.id) setEditingId(null);
                      }}
                      onPointerDown={(event) => event.stopPropagation()}
                      onChange={(event) => updateOverlay(overlay.id, { text: event.target.value })}
                    />
                  )}
                  {active && (
                    <>
                      <span className="absolute -top-1 left-1/2 h-2 w-8 -translate-x-1/2 cursor-n-resize rounded bg-sage-300/90" onPointerDown={(event) => beginResize(overlay, event, "n")} />
                      <span className="absolute -bottom-1 left-1/2 h-2 w-8 -translate-x-1/2 cursor-s-resize rounded bg-sage-300/90" onPointerDown={(event) => beginResize(overlay, event, "s")} />
                      <span className="absolute top-1/2 -left-1 h-8 w-2 -translate-y-1/2 cursor-w-resize rounded bg-sage-300/90" onPointerDown={(event) => beginResize(overlay, event, "w")} />
                      <span className="absolute top-1/2 -right-1 h-8 w-2 -translate-y-1/2 cursor-e-resize rounded bg-sage-300/90" onPointerDown={(event) => beginResize(overlay, event, "e")} />
                      <span className="absolute -top-1 -left-1 h-3 w-3 cursor-nw-resize rounded bg-white border border-sage-500" onPointerDown={(event) => beginResize(overlay, event, "nw")} />
                      <span className="absolute -top-1 -right-1 h-3 w-3 cursor-ne-resize rounded bg-white border border-sage-500" onPointerDown={(event) => beginResize(overlay, event, "ne")} />
                      <span className="absolute -bottom-1 -left-1 h-3 w-3 cursor-sw-resize rounded bg-white border border-sage-500" onPointerDown={(event) => beginResize(overlay, event, "sw")} />
                      <span className="absolute -bottom-1 -right-1 h-3 w-3 cursor-se-resize rounded bg-white border border-sage-500" onPointerDown={(event) => beginResize(overlay, event, "se")} />
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {selectedOverlay && (
            <div className="mt-4 rounded-xl border border-sand-200 bg-sand-50 p-4 space-y-3">
              <p className="font-medium text-sage-900">Selected: {selectedOverlay.kind}</p>
              {selectedOverlay.kind !== "image" && (
                <label className="block text-sm text-sage-700">
                  Text
                  <input
                    className="mt-1 w-full rounded-xl border border-sand-300 bg-white px-3 py-2"
                    value={selectedOverlay.text}
                    onChange={(event) => updateOverlay(selectedOverlay.id, { text: event.target.value })}
                  />
                </label>
              )}
              {selectedOverlay.kind !== "image" && (
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="text-sm text-sage-700">
                    Font size
                    <input
                      className="mt-1 w-full rounded-xl border border-sand-300 bg-white px-3 py-2"
                      min={8}
                      max={96}
                      type="number"
                      value={selectedOverlay.size}
                      onChange={(event) => updateOverlay(selectedOverlay.id, { size: Number(event.target.value) || 24 })}
                    />
                  </label>
                  <label className="text-sm text-sage-700">
                    Font
                    <select
                      className="mt-1 w-full rounded-xl border border-sand-300 bg-white px-3 py-2"
                      value={selectedOverlay.font}
                      onChange={(event) => updateOverlay(selectedOverlay.id, { font: event.target.value as TextOverlay["font"] })}
                    >
                      <option value="helvetica">Helvetica</option>
                      <option value="times">Times</option>
                      <option value="courier">Courier</option>
                    </select>
                  </label>
                </div>
              )}
              {selectedOverlay.kind !== "image" && (
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="text-sm text-sage-700">
                    Text color
                    <input
                      className="mt-1 block h-10 w-20 rounded-xl border border-sand-300 bg-white p-1"
                      type="color"
                      value={selectedOverlay.color}
                      onChange={(event) => updateOverlay(selectedOverlay.id, { color: event.target.value } as Partial<TextLikeOverlay>)}
                    />
                  </label>
                </div>
              )}
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="text-sm text-sage-700">
                  Width (% of page)
                  <input
                    className="mt-1 w-full"
                    type="range"
                    min={5}
                    max={95}
                    value={Math.round(selectedOverlay.wPct * 100)}
                    onChange={(event) => updateOverlay(selectedOverlay.id, { wPct: Number(event.target.value) / 100 })}
                  />
                </label>
                <label className="text-sm text-sage-700">
                  Height (% of page)
                  <input
                    className="mt-1 w-full"
                    type="range"
                    min={4}
                    max={95}
                    value={Math.round(selectedOverlay.hPct * 100)}
                    onChange={(event) => updateOverlay(selectedOverlay.id, { hPct: Number(event.target.value) / 100 })}
                  />
                </label>
              </div>
              <button type="button" className="btn-ghost text-red-600" onClick={removeSelected}>
                Remove selected item
              </button>
            </div>
          )}
        </div>
      )}

      {error && <p className="text-sm text-red-600" role="alert">{error}</p>}

      {done && (
        <div className="card bg-sage-50 border-sage-100">
          <p className="font-medium text-sage-900">Edited PDF downloaded.</p>
          <p className="mt-1 text-sm text-sage-700">
            Your browser downloaded <code>{done}</code>. Your original PDF stayed untouched.
          </p>
        </div>
      )}

      <div className="flex gap-3">
        <button type="button" className="btn-primary" disabled={busy || !file} onClick={handleExport}>
          {busy && <Loader2 className="h-4 w-4 animate-spin" />}
          {busy ? "Applying edits…" : "Download edited PDF"}
        </button>
      </div>
    </div>
  );
}
