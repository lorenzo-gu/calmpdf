import type { Metadata } from "next";
import Link from "next/link";

const TOOL_GROUPS = [
  {
    title: "Convert PDF",
    links: [
      { href: "/pdf-to-docx", label: "PDF to Word (DOCX)" },
      { href: "/docx-to-pdf", label: "Word (DOCX) to PDF" },
      { href: "/pdf-to-jpg", label: "PDF to JPG" },
      { href: "/jpg-to-pdf", label: "JPG to PDF" },
      { href: "/pdf-to-png", label: "PDF to PNG" },
      { href: "/png-to-pdf", label: "PNG to PDF" },
    ],
  },
  {
    title: "Edit PDF",
    links: [
      { href: "/edit-pdf", label: "Edit PDF" },
      { href: "/rotate-pdf", label: "Rotate PDF" },
    ],
  },
  {
    title: "Organize PDF",
    links: [
      { href: "/merge-pdf", label: "Merge PDF" },
      { href: "/split-pdf", label: "Split PDF" },
    ],
  },
  {
    title: "Optimize PDF",
    links: [{ href: "/compress-pdf", label: "Compress PDF" }],
  },
] as const;

export const metadata: Metadata = {
  title: "Free Online PDF Tools | CalmPDF",
  description:
    "Use CalmPDF's free online PDF and Word conversion tools to edit, rotate, compress, merge, split, and convert documents directly in your browser.",
  alternates: { canonical: "/tools" },
  openGraph: {
    title: "Free Online PDF Tools | CalmPDF",
    description:
      "Use CalmPDF's free online PDF and Word conversion tools to edit, rotate, compress, merge, split, and convert documents directly in your browser.",
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
        <span className="text-sage-900">Tools</span>
      </nav>

      <h1 className="mt-4 text-3xl md:text-4xl font-semibold">Free Online PDF Tools</h1>
      <p className="mt-4 text-lg text-sage-700">
        CalmPDF gives you practical browser-based tools for day-to-day document work: convert PDF to
        Word, export Word documents to PDF, merge files for sharing, split pages for extraction, and
        compress large documents for email. Every tool runs locally on your device for a private,
        fast workflow.
      </p>

      <p className="mt-4 text-sage-700">
        If you are comparing converters, start with the <Link href="/pdf-to-docx" className="underline underline-offset-2 hover:no-underline">PDF to Word</Link> and <Link href="/docx-to-pdf" className="underline underline-offset-2 hover:no-underline">Word to PDF</Link> tools. They are optimized for common text-based documents and clearly state current limitations, including no OCR for scanned PDFs and DOCX-only Word input.
      </p>

      <section className="mt-10 space-y-6" aria-label="PDF tool categories">
        {TOOL_GROUPS.map((group) => (
          <div key={group.title} className="card">
            <h2 className="text-xl font-semibold">{group.title}</h2>
            <ul className="mt-4 space-y-2">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sage-800 no-underline hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </article>
  );
}
