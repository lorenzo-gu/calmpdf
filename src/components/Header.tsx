"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE } from "@/lib/site";
import { TOOLS } from "@/content/tools";

export function Header() {
  const [isMobileToolsOpen, setIsMobileToolsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-sand-200 bg-sand-50/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 no-underline" onClick={() => setIsMobileToolsOpen(false)}>
          <span aria-hidden className="inline-block h-6 w-6 rounded-md bg-sage-500" />
          <span className="font-semibold tracking-tight text-sage-900">{SITE.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 text-sm md:flex">
          {TOOLS.map((t) => (
            <Link key={t.slug} href={`/${t.slug}`} className="text-sage-700 no-underline hover:text-sage-900">
              {t.h1}
            </Link>
          ))}
        </nav>

        <div className="relative md:hidden">
          <button
            type="button"
            aria-expanded={isMobileToolsOpen}
            aria-controls="mobile-tools-menu"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-sand-300 bg-white px-4 text-sm font-medium text-sage-900"
            onClick={() => setIsMobileToolsOpen((open) => !open)}
          >
            Tools
          </button>

          {isMobileToolsOpen ? (
            <nav
              id="mobile-tools-menu"
              aria-label="Mobile tools"
              className="absolute right-0 top-[calc(100%+0.5rem)] w-[min(85vw,20rem)] rounded-lg border border-sand-200 bg-white p-2 shadow-lg"
            >
              <ul className="m-0 list-none p-0">
                {TOOLS.map((t) => (
                  <li key={t.slug}>
                    <Link
                      href={`/${t.slug}`}
                      className="flex min-h-11 items-center rounded-md px-3 text-sm text-sage-800 no-underline hover:bg-sand-100"
                      onClick={() => setIsMobileToolsOpen(false)}
                    >
                      {t.h1}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
