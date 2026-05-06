"use client";

import { useEffect, useRef } from "react";
import { trackAdEvent } from "@/lib/analytics";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdSlotProps = {
  /** AdSense ad unit slot ID (data-ad-slot). */
  slot: string;
  /** Display format. "auto" lets AdSense pick; "fluid" is for in-article. */
  format?: "auto" | "fluid";
  /** Whether the slot should fill its container width. */
  fullWidthResponsive?: boolean;
  /** Optional layout key for in-article / matched content units. */
  layout?: string;
  /** Extra classes for the wrapper. */
  className?: string;
  /** Optional small label above the unit (helps disclose ads). */
  label?: string;
};

/**
 * AdSlot — a single Google AdSense ad unit.
 *
 * Renders nothing unless both env vars are set:
 *   - NEXT_PUBLIC_ADSENSE_CLIENT  (e.g. ca-pub-1234567890123456)
 *   - the `slot` prop (the per-unit data-ad-slot)
 *
 * Keeping the render gated means dev/preview stays clean, and the page is
 * unchanged for users until ads are properly configured and approved.
 */
export function AdSlot({
  slot,
  format = "auto",
  fullWidthResponsive = true,
  layout,
  className = "",
  label = "Advertisement",
}: AdSlotProps) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const pushed = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const impressionTracked = useRef(false);

  useEffect(() => {
    if (!client || !slot) return;
    if (pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense not yet loaded or blocked — fail silently.
    }
  }, [client, slot]);

  useEffect(() => {
    if (!client || !slot || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.5);
        if (!visible || impressionTracked.current) return;
        impressionTracked.current = true;
        trackAdEvent("impression", { slot, component: "AdSlot" });
      },
      { threshold: [0.5] },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [client, slot]);

  if (!client || !slot) return null;

  return (
    <div
      ref={containerRef}
      className={`my-8 mx-auto max-w-3xl px-4 md:px-6 ${className}`.trim()}
      aria-label={label}
      onClickCapture={() => {
        trackAdEvent("click", { slot, component: "AdSlot" });
      }}
    >
      <p className="mb-1 text-[10px] uppercase tracking-wide text-sage-700/70">
        {label}
      </p>
      <ins
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-ad-layout={layout}
        data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
      />
    </div>
  );
}
