import Link from "next/link";
import { SITE } from "@/lib/site";

const FOOTER_TOOL_LINKS = [
  { href: "/edit-pdf", label: "Edit PDF" },
  { href: "/rotate-pdf", label: "Rotate PDF" },
  { href: "/compress-pdf", label: "Compress PDF" },
  { href: "/merge-pdf", label: "Merge PDF" },
  { href: "/split-pdf", label: "Split PDF" },
  { href: "/tools", label: "All PDF Tools" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-sand-200 bg-white">
      <div className="mx-auto grid max-w-content gap-8 px-4 py-12 text-sm md:grid-cols-4 md:px-6">
        <div>
          <div className="flex items-center gap-2">
            <span aria-hidden className="inline-block h-5 w-5 rounded-md bg-sage-500" />
            <span className="font-semibold">{SITE.name}</span>
          </div>
          <p className="mt-3 max-w-xs text-sage-700">{SITE.description}</p>
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-sage-900">PDF Tools</h3>
          <ul className="space-y-2">
            {FOOTER_TOOL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sage-700 no-underline hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-sage-900">Guides</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/how-to" className="text-sage-700 no-underline hover:underline">
                PDF How-to Guides
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-sage-900">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-sage-700 no-underline hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-sage-700 no-underline hover:underline">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-sand-200 py-4 text-center text-xs text-sage-700">
        © {year} {SITE.name}. Files never leave your browser.
      </div>
    </footer>
  );
}
