import type { Metadata } from "next";
import Link from "next/link";
import { TOOL_NAMES } from "@/content/naming";

type ToolLink = { href: string; label: string };

type ToolGroup = {
  title: string;
  active: ToolLink[];
  comingSoon?: ToolLink[];
};

const TOOL_GROUPS: ToolGroup[] = [
  {
    title: "Convert PDF",
    active: [
      { href: "/pdf-to-word", label: TOOL_NAMES.pdfToWord },
      { href: "/docx-to-pdf", label: TOOL_NAMES.wordToPdf },
    ],
    comingSoon: [
      { href: "/pdf-to-jpg", label: "PDF to JPG" },
      { href: "/jpg-to-pdf", label: "JPG to PDF" },
      { href: "/pdf-to-png", label: "PDF to PNG" },
      { href: "/png-to-pdf", label: "PNG to PDF" },
    ],
  },
  {
    title: "Edit PDF",
    active: [
      { href: "/edit-pdf", label: "Edit PDF" },
      { href: "/rotate-pdf", label: "Rotate PDF" },
          ],
    comingSoon: [
      { href: "/add-page-numbers-to-pdf", label: "Add Page Numbers" },
      { href: "/remove-pdf-pages", label: "Remove PDF Pages" },
      { href: "/extract-pdf-pages", label: "Extract PDF Pages" },
      { href: "/pdf-metadata-editor", label: "PDF Metadata Editor" },
      { href: "/pdf-metadata-viewer", label: "PDF Metadata Viewer" },
    ],
  },
  {
    title: "Organize PDF",
    active: [
      { href: "/merge-pdf", label: "Merge PDF" },
      { href: "/split-pdf", label: "Split PDF" },
      { href: "/reorder-pdf-pages", label: "Reorder PDF Pages" },
    ],
    comingSoon: [
      { href: "/protect-pdf", label: "Protect PDF" },
      { href: "/unlock-pdf", label: "Unlock PDF" },
    ],
  },
  {
    title: "Optimize PDF",
    active: [{ href: "/compress-pdf", label: "Compress PDF" }],
  },
];

export const metadata: Metadata = {
  title: "Free Online PDF Tools | CalmPDF",
  description:
    "Use CalmPDF's free online PDF tools to edit, rotate, compress, merge, split, and convert PDFs directly in your browser.",
  alternates: { canonical: "/tools" },
  openGraph: {
    title: "Free Online PDF Tools | CalmPDF",
    description:
      "Use CalmPDF's free online PDF tools to edit, rotate, compress, merge, split, and convert PDFs directly in your browser.",
    url: "/tools",
  },
};

export default function ToolsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 md:px-6 py-16">
      <nav aria-label="Breadcrumb" className="text-sm text-sage-700">
        <Link href="/" className="no-underline hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-sage-900">All PDF tools</span>
      </nav>

      <h1 className="mt-4 text-3xl md:text-4xl font-semibold">Free Online PDF Tools</h1>
      <p className="mt-4 text-lg text-sage-700">
        CalmPDF gives you practical browser-based tools for day-to-day document work: convert PDF to
        Word, export Word documents to PDF, merge files for sharing, split pages for extraction, and
        compress large documents for email. Every tool runs locally on your device for a private,
        fast workflow.
      </p>

      <section className="mt-10 space-y-6" aria-label="PDF tool categories">
        {TOOL_GROUPS.map((group) => (
          <div key={group.title} className="card space-y-4">
            <h2 className="text-xl font-semibold">{group.title}</h2>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-sage-700">Available now</h3>
              <ul className="mt-3 space-y-2">
                {group.active.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sage-800 no-underline hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {group.comingSoon && group.comingSoon.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-sage-500">Coming soon</h3>
                <ul className="mt-3 space-y-2">
                  {group.comingSoon.map((link) => (
                    <li key={link.href} className="text-sage-500">
                      <span aria-label={`${link.label} coming soon`}>{link.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </section>
    </article>
  );
}
