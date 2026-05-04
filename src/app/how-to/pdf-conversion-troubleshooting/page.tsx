import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/content/posts";
import { ArticleShell } from "@/components/ArticleShell";

const post = BLOG_POSTS.find((p) => p.slug === "pdf-conversion-troubleshooting")!;

export const metadata: Metadata = {
  title: "PDF Conversion Troubleshooting | CalmPDF",
  description:
    "Troubleshoot PDF to Word and Word to PDF issues including scanned files, broken formatting, and browser memory limits.",
  alternates: { canonical: `${SITE.url}/how-to/pdf-conversion-troubleshooting` },
};

export default function Page() {
  return (
    <ArticleShell post={post}>
      <h1 className="text-3xl font-semibold tracking-tight mb-4">
        PDF Conversion Troubleshooting
      </h1>
      <p className="text-sage-700 mb-6">
        If conversion output looks wrong or fails completely, use this checklist
        to diagnose the source file, tool choice, and device limits.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Start with the right path</h2>
      <ul className="list-disc list-inside text-sage-700 space-y-2 mb-6">
        <li>
          Need editable text from PDF? Use <a href="/pdf-to-docx" className="text-sage-900 underline underline-offset-4">PDF to Word</a>.
        </li>
        <li>
          Need a fixed file from DOCX? Use <a href="/docx-to-pdf" className="text-sage-900 underline underline-offset-4">Word to PDF</a>.
        </li>
        <li>
          Need page organization only? Use <a href="/merge-pdf" className="text-sage-900 underline underline-offset-4">Merge PDF</a>, <a href="/split-pdf" className="text-sage-900 underline underline-offset-4">Split PDF</a>, or <a href="/rotate-pdf" className="text-sage-900 underline underline-offset-4">Rotate PDF</a> instead of format conversion.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        If PDF to Word returns poor output
      </h2>
      <ul className="list-disc list-inside text-sage-700 space-y-2 mb-6">
        <li>
          Check whether the source is scanned or image-only. If text is not
          selectable, OCR is needed.
        </li>
        <li>
          CalmPDF&apos;s current PDF to Word tool does not run OCR, so scanned
          pages cannot become editable text yet.
        </li>
        <li>
          For long files, split into smaller page ranges and convert sections
          separately.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">If Word to PDF changes layout</h2>
      <ul className="list-disc list-inside text-sage-700 space-y-2 mb-6">
        <li>
          Accept tracked changes and remove comments before conversion.
        </li>
        <li>
          Replace unsupported fonts or export with simpler styling.
        </li>
        <li>
          Recheck section breaks, page size, and margins in DOCX source.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">If conversion fails completely</h2>
      <ul className="list-disc list-inside text-sage-700 space-y-2 mb-6">
        <li>Refresh the page and try again with one file at a time.</li>
        <li>
          Retry on desktop if mobile memory is limited; conversion runs locally
          in browser memory.
        </li>
        <li>
          Test with a short sample to confirm baseline compatibility before
          converting a full report.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Privacy note</h2>
      <p className="text-sage-700 mb-6">
        CalmPDF conversion tools process files in-browser on your device. Your
        documents are not uploaded to CalmPDF servers.
      </p>

      <p className="text-sage-700 mb-6">
        <a href="/pdf-to-docx" className="text-sage-900 underline underline-offset-4">
          Try CalmPDF PDF to Word
        </a>{" "}
        or{" "}
        <a href="/docx-to-pdf" className="text-sage-900 underline underline-offset-4">
          CalmPDF Word to PDF
        </a>
        .
      </p>
    </ArticleShell>
  );
}
