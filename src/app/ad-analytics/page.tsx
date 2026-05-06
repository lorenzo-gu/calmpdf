"use client";

import { useEffect, useMemo, useState } from "react";

type TrackedEvent = {
  type: "impression" | "click";
  ad_slot: string;
  page_path: string;
  component?: string;
  ts: string;
};

const STORAGE_KEY = "calmpdf-ad-events";

function readEvents(): TrackedEvent[] {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as TrackedEvent[];
  } catch {
    return [];
  }
}

export default function AdAnalyticsPage() {
  const [events, setEvents] = useState<TrackedEvent[]>([]);

  useEffect(() => {
    setEvents(readEvents());

    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<Omit<TrackedEvent, "ts">>;
      const nextEvent: TrackedEvent = { ...customEvent.detail, ts: new Date().toISOString() };
      setEvents((prev) => {
        const next = [...prev, nextEvent].slice(-1000);
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        return next;
      });
    };

    window.addEventListener("calmpdf:ad-event", handler);
    return () => window.removeEventListener("calmpdf:ad-event", handler);
  }, []);

  const summary = useMemo(() => {
    const impressions = events.filter((event) => event.type === "impression").length;
    const clicks = events.filter((event) => event.type === "click").length;
    const ctr = impressions > 0 ? ((clicks / impressions) * 100).toFixed(2) : "0.00";
    return { impressions, clicks, ctr };
  }, [events]);

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12 md:px-6">
      <h1 className="text-3xl font-semibold text-sage-900">Ad analytics</h1>
      <p className="mt-2 text-sm text-sage-700">
        Local QA dashboard for ad impression/click tracking events and CTR verification.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-sage-200 bg-white p-4">
          <p className="text-xs uppercase tracking-wide text-sage-700">Impressions</p>
          <p className="mt-2 text-3xl font-semibold text-sage-900">{summary.impressions}</p>
        </article>
        <article className="rounded-xl border border-sage-200 bg-white p-4">
          <p className="text-xs uppercase tracking-wide text-sage-700">Clicks</p>
          <p className="mt-2 text-3xl font-semibold text-sage-900">{summary.clicks}</p>
        </article>
        <article className="rounded-xl border border-sage-200 bg-white p-4">
          <p className="text-xs uppercase tracking-wide text-sage-700">CTR</p>
          <p className="mt-2 text-3xl font-semibold text-sage-900">{summary.ctr}%</p>
        </article>
      </div>

      <div className="mt-8 rounded-xl border border-sage-200 bg-white p-4">
        <h2 className="text-lg font-semibold text-sage-900">Recent events</h2>
        <ul className="mt-4 space-y-2 text-sm text-sage-800">
          {events.length === 0 ? (
            <li>No ad events collected yet.</li>
          ) : (
            [...events].reverse().slice(0, 50).map((event, idx) => (
              <li key={`${event.ts}-${idx}`} className="rounded-md bg-sage-50 p-2">
                <strong>{event.type}</strong> · slot {event.ad_slot} · {event.page_path} · {new Date(event.ts).toLocaleString()}
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
}
