import Link from "next/link";
import { SITE } from "@/lib/site";
import { TOOLS } from "@/content/tools";

export function Header() {
  return (
    <header className="border-b border-sand-200 bg-sand-50/80 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-content px-4 md:px-6 h-16 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span aria-hidden className="inline-block h-6 w-6 rounded-md bg-sage-500" />
          <span className="font-semibold text-sage-900 tracking-tight text-sm sm:text-base">{SITE.name}</span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-3 sm:gap-6 text-sm shrink-0">
          <Link href="/tools" className="text-sage-700 no-underline hover:text-sage-900 whitespace-nowrap">
            All tools
          </Link>
          {TOOLS.slice(0, 3).map((t) => (
            <Link key={t.slug} href={`/${t.slug}`} className="text-sage-700 no-underline hover:text-sage-900 hidden sm:inline">
              {t.h1}
            </Link>
          ))}
          <Link href="/tools" className="text-sage-700 no-underline hover:text-sage-900 sm:hidden whitespace-nowrap">
            More
          </Link>
        </nav>
      </div>
    </header>
  );
}
