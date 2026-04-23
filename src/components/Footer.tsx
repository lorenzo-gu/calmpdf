import Link from "next/link";
import { SITE } from "@/lib/site";
import { TOOLS } from "@/content/tools";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-sand-200 bg-white mt-16">
      <div className="mx-auto max-w-content px-4 md:px-6 py-12 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <span aria-hidden className="inline-block h-5 w-5 rounded-md bg-sage-500" />
            <span className="font-semibold">{SITE.name}</span>
          </div>
          <p className="mt-3 text-sage-700 max-w-xs">{SITE.description}</p>
        </div>
        <div>
          <h3 className="font-semibold text-sage-900 mb-3">PDF tools</h3>
          <ul className="space-y-2">
            {TOOLS.map((t) => (
              <li key={t.slug}>
                <Link href={`/${t.slug}`} className="text-sage-700 no-underline hover:underline">
                  {t.h1}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-sage-900 mb-3">About</h3>
          <ul className="space-y-2">
            <li><Link href="/privacy" className="text-sage-700 no-underline hover:underline">Privacy</Link></li>
            <li><Link href="/about" className="text-sage-700 no-underline hover:underline">About</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-sand-200 py-4 text-center text-xs text-sage-700">
        © {year} {SITE.name}. Files never leave your browser.
      </div>
    </footer>
  );
}
