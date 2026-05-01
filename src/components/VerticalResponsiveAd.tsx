"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

const ADSENSE_CLIENT = "ca-pub-8704043209936495";
const ADSENSE_SLOT = "3722029870";

export function VerticalResponsiveAd() {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Fail silently when AdSense is unavailable or blocked.
    }
  }, []);

  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <div className="my-8 w-full overflow-hidden">
      <div className="min-h-[280px]">
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
