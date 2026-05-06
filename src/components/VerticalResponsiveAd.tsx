"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

const ADSENSE_SLOT = "3722029870";

export function VerticalResponsiveAd() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const pushed = useRef(false);

  useEffect(() => {
    if (!client) return;
    if (pushed.current) return;
    pushed.current = true;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Fail silently when AdSense is unavailable or blocked.
    }
  }, [client]);

  if (!client || process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <div className="my-6 md:my-8 w-full overflow-hidden">
      <div className="min-h-[90px] md:min-h-[120px]">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={client}
          data-ad-slot={ADSENSE_SLOT}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
