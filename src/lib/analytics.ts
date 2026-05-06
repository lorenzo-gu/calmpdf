export type AdEventType = "impression" | "click";

type AdEventPayload = {
  slot: string;
  pagePath?: string;
  component?: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackAdEvent(type: AdEventType, payload: AdEventPayload) {
  if (typeof window === "undefined") return;

  const eventName = type === "impression" ? "ad_impression" : "ad_click";
  const eventPayload = {
    ad_slot: payload.slot,
    page_path: payload.pagePath ?? window.location.pathname,
    component: payload.component,
  };

  const storageEvent = { ...eventPayload, type, ts: new Date().toISOString() };
  const key = "calmpdf-ad-events";
  try {
    const existing = window.localStorage.getItem(key);
    const parsed = existing ? (JSON.parse(existing) as unknown[]) : [];
    window.localStorage.setItem(key, JSON.stringify([...parsed, storageEvent].slice(-1000)));
  } catch {
    // Ignore storage failures (private mode / blocked storage).
  }

  window.gtag?.("event", eventName, eventPayload);
  window.dispatchEvent(new CustomEvent("calmpdf:ad-event", { detail: { type, ...eventPayload } }));
}
