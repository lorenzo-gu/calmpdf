"use client";

import { useEffect, useRef } from "react";
import { trackAdEvent } from "@/lib/analytics";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

const ADSENSE_CLIENT = "ca-pub-8704043209936495";
const ADSENSE_SLOT = "3722029870";

export function VerticalResponsiveAd() {
  const pushed = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const impressionTracked = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Fail silently when AdSense is unavailable or blocked.
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.5);
        if (!visible || impressionTracked.current) return;
        impressionTracked.current = true;
        trackAdEvent("impression", { slot: ADSENSE_SLOT, component: "VerticalResponsiveAd" });
      },
      { threshold: [0.5] },
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="my-6 md:my-8 w-full overflow-hidden"
      onClickCapture={() => {
        trackAdEvent("click", { slot: ADSENSE_SLOT, component: "VerticalResponsiveAd" });
      }}
    >
      <div className="min-h-[90px] md:min-h-[120px]">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={ADSENSE_CLIENT}
          data-ad-slot={ADSENSE_SLOT}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
