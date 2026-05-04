import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/content/posts";
import { ArticleShell } from "@/components/ArticleShell";

const post = BLOG_POSTS.find((p) => p.slug === "convert-pdf-to-word")!;

export const metadata: Metadata = {
  title: "How to Convert PDF to Word (DOCX) | CalmPDF",
  description:
    "Step-by-step guide to convert PDF to editable Word documents, including OCR limits, layout expectations, and practical troubleshooting.",
  alternates: { canonical: `${SITE.url}/how-to/convert-pdf-to-word` },
};

export default function Page() {
  return (
    <ArticleShell post={post}>
      <h1 className="text-3xl font-semibold tracking-tight mb-4">
        How to Convert PDF to Word (DOCX)
      </h1>
      <p className="text-sage-700 mb-6">
        Use <strong>PDF to Word</strong> when you need to edit text from an
        existing PDF. CalmPDF exports a <strong>.docx</strong> file you can open
        in Microsoft Word, Google Docs, or Apple Pages.
      </p>
      <p className="text-sage-700 mb-6">
        <a href="/pdf-to-docx" className="text-sage-900 underline underline-offset-4">
          Convert PDF to Word now with CalmPDF&apos;s PDF to Word tool.
        </a>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Before you start</h2>
      <ul className="list-disc list-inside text-sage-700 space-y-2 mb-6">
        <li>
          Best results come from text-based PDFs (not scanned photos of paper).
        </li>
        <li>
          If you can highlight text in the original PDF, conversion quality is
          usually much better.
        </li>
        <li>
          If you need a perfect visual copy for sharing, keep the file as PDF.
          Convert only when editing is the real goal.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Step-by-step: convert with CalmPDF
      </h2>
      <ol className="list-decimal list-inside space-y-2 text-sage-700 mb-6">
        <li>
          Open <strong>/pdf-to-docx</strong> in your browser.
        </li>
        <li>Drag your PDF into the drop area, or click to choose a file.</li>
        <li>
          Wait for processing to finish. Larger files may take longer on mobile
          or lower-memory devices.
        </li>
        <li>
          Download the output <strong>.docx</strong> file and open it in Word or
          Google Docs.
        </li>
        <li>
          Review headings, tables, and page breaks, then make final edits in
          your editor.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Choose the right tool</h2>
      <ul className="list-disc list-inside text-sage-700 space-y-2 mb-6">
        <li>
          Need to edit paragraph text? Use <a href="/pdf-to-docx" className="text-sage-900 underline underline-offset-4">PDF to Word</a>.
        </li>
        <li>
          Need to rearrange pages only? Use <a href="/split-pdf" className="text-sage-900 underline underline-offset-4">Split PDF</a> or <a href="/merge-pdf" className="text-sage-900 underline underline-offset-4">Merge PDF</a>.
        </li>
        <li>
          Need to reduce file size for upload/email? Use <a href="/compress-pdf" className="text-sage-900 underline underline-offset-4">Compress PDF</a>.
        </li>
        <li>
          Need small text/image adjustments without changing format? Use <a href="/edit-pdf" className="text-sage-900 underline underline-offset-4">Edit PDF</a>.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Output expectations</h2>
      <p className="text-sage-700 mb-6">
        CalmPDF currently does <strong>not</strong> run OCR. Scanned or
        image-only PDFs will not become editable text. Complex layouts (nested
        tables, multi-column newsletters, advanced headers/footers, and heavily
        positioned graphics) may need manual cleanup after conversion.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Common mistakes and fixes</h2>
      <ul className="list-disc list-inside text-sage-700 space-y-2 mb-6">
        <li>
          <strong>Blank or low-quality output:</strong> check whether the PDF is
          scanned. If text is not selectable in the source, OCR is required.
        </li>
        <li>
          <strong>Formatting shifted:</strong> simplify styles after conversion;
          this is normal when moving from fixed PDF layout to editable DOCX.
        </li>
        <li>
          <strong>Conversion fails on large files:</strong> split a big PDF into
          smaller ranges first, then convert each section.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Privacy note</h2>
      <p className="text-sage-700 mb-6">
        CalmPDF processes files in your browser on your device. Your documents
        are not uploaded to CalmPDF servers.
      </p>

      <p className="text-sage-700 mb-6">
        <a href="/pdf-to-docx" className="text-sage-900 underline underline-offset-4">
          Ready to edit? Use CalmPDF&apos;s PDF to Word tool.
        </a>
      </p>
    </ArticleShell>
  );
}
