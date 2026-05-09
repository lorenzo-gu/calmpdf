"use client";

import Link from "next/link";
import { SITE } from "@/lib/site";

type ToolGroup = {
  label: string;
  links: { href: string; label: string }[];
};

const TOOL_GROUPS: ToolGroup[] = [
  {
    label: "Optimize",
    links: [
      { href: "/compress-pdf", label: "Compress PDF" },
      { href: "/compress-pdf-to-1mb", label: "Compress to 1MB" },
      { href: "/compress-pdf-for-email", label: "Compress for Email" },
    ],
  },
  {
    label: "Organize",
    links: [
      { href: "/merge-pdf", label: "Merge PDF" },
      { href: "/split-pdf", label: "Split PDF" },
      { href: "/reorder-pdf-pages", label: "Reorder PDF Pages" },
      { href: "/extract-pdf-pages", label: "Extract PDF Pages" },
      { href: "/remove-pdf-pages", label: "Delete PDF Pages" },
    ],
  },
  {
    label: "Edit",
    links: [
      { href: "/edit-pdf", label: "Edit PDF" },
      { href: "/edit-pdf", label: "Sign PDF" },
      { href: "/unlock-pdf", label: "Unlock PDF" },
    ],
  },
  {
    label: "Convert",
    links: [
      { href: "/pdf-to-word", label: "PDF to Word" },
      { href: "/word-to-pdf", label: "Word to PDF" },
      { href: "/pdf-to-jpg", label: "PDF to JPG" },
      { href: "/jpg-to-pdf", label: "JPG to PDF" },
    ],
  },
  {
    label: "Page tools",
    links: [
      { href: "/rotate-pdf", label: "Rotate PDF" },
      { href: "/add-page-numbers-to-pdf", label: "Add Page Numbers" },
      { href: "/pdf-metadata-viewer", label: "View Metadata" },
    ],
  },
];

export function Header() {
  return (
    <>
      <header className="border-b border-sand-200 bg-sand-50/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto max-w-content px-4 md:px-6 h-16 flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <span aria-hidden className="inline-block h-6 w-6 rounded-md bg-sage-500" />
            <span className="font-semibold text-sage-900 tracking-tight text-sm sm:text-base">{SITE.name}</span>
          </Link>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-5 text-sm">
            <Link href="/" className="text-sage-700 no-underline hover:text-sage-900">
              CalmPDF
            </Link>
            <details className="relative group">
              <summary className="list-none cursor-pointer text-sage-700 hover:text-sage-900">Tools</summary>
              <div className="absolute right-0 mt-3 w-[42rem] rounded-xl border border-sand-200 bg-white p-5 shadow-xl">
                <div className="grid grid-cols-3 gap-6">
                  {TOOL_GROUPS.map((group) => (
                    <div key={group.label}>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-sage-900">{group.label}</p>
                      <ul className="space-y-2">
                        {group.links.map((tool) => (
                          <li key={tool.href + tool.label}>
                            <Link href={tool.href} className="text-sm text-sage-700 no-underline hover:text-sage-900">
                              {tool.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </details>
            <Link href="/how-to" className="text-sage-700 no-underline hover:text-sage-900">
              Guides
            </Link>
            <Link href="/privacy" className="text-sage-700 no-underline hover:text-sage-900">
              Privacy
            </Link>
            <Link
              href="/tools"
              className="rounded-full bg-sage-600 px-4 py-2 font-medium text-white no-underline hover:bg-sage-700"
            >
              Choose tool
            </Link>
          </nav>

          <details className="md:hidden relative">
            <summary className="list-none text-sm font-medium text-sage-700">Menu</summary>
            <div className="absolute right-0 mt-3 w-[18rem] rounded-xl border border-sand-200 bg-white p-4 shadow-xl">
              <div className="space-y-3">
                <Link href="/" className="block text-sage-800 no-underline">CalmPDF</Link>
                <Link href="/how-to" className="block text-sage-800 no-underline">Guides</Link>
                <Link href="/privacy" className="block text-sage-800 no-underline">Privacy</Link>
                {TOOL_GROUPS.map((group) => (
                  <details key={group.label} className="rounded-md border border-sand-100 px-2 py-1">
                    <summary className="list-none cursor-pointer py-1 text-sm font-medium text-sage-900">{group.label}</summary>
                    <ul className="space-y-1 pb-1">
                      {group.links.map((tool) => (
                        <li key={tool.href + tool.label}>
                          <Link href={tool.href} className="block py-1 text-sm text-sage-700 no-underline">
                            {tool.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            </div>
          </details>
        </div>
      </header>
      <div className="fixed bottom-0 inset-x-0 z-40 border-t border-sand-200 bg-white/95 p-3 md:hidden">
        <Link
          href="/tools"
          className="block rounded-full bg-sage-600 px-4 py-3 text-center text-sm font-medium text-white no-underline"
        >
          Choose a PDF tool
        </Link>
      </div>
    </>
  );
}
