import Link from "next/link";
import { SITE } from "@/lib/site";
import { TOOLS } from "@/content/tools";

export function Header() {
  return (
    <header className="border-b border-sand-200 bg-sand-50/80 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-content h-16 min-w-0 px-4 md:px-6 flex items-center justify-between gap-3">
        <Link href="/" className="min-w-0 flex items-center gap-2 no-underline shrink">
          <span aria-hidden className="inline-block h-6 w-6 shrink-0 rounded-md bg-sage-500" />
          <span className="truncate font-semibold text-sage-900 tracking-tight">{SITE.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden min-w-0 items-center gap-6 text-sm md:flex">
          {TOOLS.map((t) => (
            <Link key={t.slug} href={`/${t.slug}`} className="text-sage-700 no-underline hover:text-sage-900">
              {t.h1}
            </Link>
          ))}
        </nav>

        <nav aria-label="Primary mobile" className="flex shrink-0 items-center text-sm md:hidden">
          <Link href="/tools" className="text-sage-700 no-underline hover:text-sage-900">
            All tools
          </Link>
        </nav>
      </div>
    </header>
  );
}
