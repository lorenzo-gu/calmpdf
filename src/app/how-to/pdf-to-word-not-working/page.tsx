import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/content/posts";
import { ArticleShell } from "@/components/ArticleShell";

const post = BLOG_POSTS.find((p) => p.slug === "pdf-to-word-not-working")!;

export const metadata: Metadata = {
  title: "PDF to Word Not Working? | CalmPDF Troubleshooting",
  description:
    "Fix common PDF to Word problems such as scanned PDFs, blank DOCX output, formatting loss, and conversion failures.",
  keywords: [
    "pdf to word not working",
    "pdf to docx failed",
    "convert pdf to editable word document",
  ],
  alternates: { canonical: `${SITE.url}/how-to/pdf-to-word-not-working` },
};

export default function Page() {
  return (
    <ArticleShell post={post}>
      <h1 className="text-3xl font-semibold tracking-tight mb-4">
        PDF to Word Not Working? Fixes That Usually Help
      </h1>
      <p className="text-sage-700 mb-6">
        If your conversion failed, produced a blank DOCX, or scrambled layout,
        use this practical checklist before retrying.
      </p>
      <p className="text-sage-700 mb-6">
        <a href="/pdf-to-docx" className="text-sage-900 underline underline-offset-4">
          Retry now with CalmPDF&apos;s PDF to Word tool.
        </a>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Before you start</h2>
      <ul className="list-disc list-inside text-sage-700 space-y-2 mb-6">
        <li>Use text-based PDFs whenever possible.</li>
        <li>Close extra tabs to free memory on low-spec devices.</li>
        <li>
          Expect some layout differences: PDF is fixed layout, DOCX is editable
          and reflowable.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">1) Check if your PDF is scanned</h2>
      <p className="text-sage-700 mb-6">
        Try selecting text in the PDF. If you cannot select text, the file is
        likely image-only and needs OCR. CalmPDF&apos;s current PDF to Word tool
        does not support OCR yet.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2) Confirm output expectations</h2>
      <p className="text-sage-700 mb-6">
        Tables, columns, headers, footers, forms, and positioned images can
        shift during conversion. This is a common format limitation across PDF
        to DOCX workflows.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">3) Test with smaller sections</h2>
      <p className="text-sage-700 mb-6">
        Very large or design-heavy PDFs may fail on devices with limited memory.
        Convert a short page range first to validate quality and compatibility.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">4) Make sure you need conversion</h2>
      <ul className="list-disc list-inside text-sage-700 space-y-2 mb-6">
        <li>Need only page cleanup? Use <a href="/edit-pdf" className="text-sage-900 underline underline-offset-4">Edit PDF</a>.</li>
        <li>Need smaller file size? Use <a href="/compress-pdf" className="text-sage-900 underline underline-offset-4">Compress PDF</a>.</li>
        <li>Need page splitting/reordering? Use <a href="/split-pdf" className="text-sage-900 underline underline-offset-4">Split PDF</a> and <a href="/merge-pdf" className="text-sage-900 underline underline-offset-4">Merge PDF</a>.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Privacy note</h2>
      <p className="text-sage-700 mb-6">
        CalmPDF processes files in your browser. Your documents are not uploaded
        to CalmPDF servers.
      </p>

      <p className="text-sage-700 mb-6">
        Still stuck? Try <a href="/how-to/pdf-conversion-troubleshooting" className="text-sage-900 underline underline-offset-4">PDF Conversion Troubleshooting</a> or convert with <a href="/pdf-to-docx" className="text-sage-900 underline underline-offset-4">PDF to Word</a> again.
      </p>
    </ArticleShell>
  );
}
