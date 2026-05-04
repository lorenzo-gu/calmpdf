import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/content/posts";
import { ArticleShell } from "@/components/ArticleShell";

const post = BLOG_POSTS.find((p) => p.slug === "convert-word-to-pdf")!;

export const metadata: Metadata = {
  title: "How to Convert Word to PDF (DOCX) | CalmPDF",
  description:
    "Convert Word documents to PDF with practical steps, quality expectations, troubleshooting tips, and tool-selection guidance.",
  alternates: { canonical: `${SITE.url}/how-to/convert-word-to-pdf` },
};

export default function Page() {
  return (
    <ArticleShell post={post}>
      <h1 className="text-3xl font-semibold tracking-tight mb-4">
        How to Convert Word to PDF (DOCX)
      </h1>
      <p className="text-sage-700 mb-6">
        Use <strong>Word to PDF</strong> when you need a shareable file with a
        fixed page layout for applications, approvals, printing, or external
        delivery.
      </p>
      <p className="text-sage-700 mb-6">
        <a href="/docx-to-pdf" className="text-sage-900 underline underline-offset-4">
          Convert Word to PDF now with CalmPDF&apos;s Word to PDF tool.
        </a>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Before you start</h2>
      <ul className="list-disc list-inside text-sage-700 space-y-2 mb-6">
        <li>CalmPDF currently accepts modern <strong>.docx</strong> files.</li>
        <li>
          For fewer layout surprises, accept tracked changes and remove hidden
          comments before converting.
        </li>
        <li>
          If the document uses uncommon fonts, verify output on the target
          device before sending to clients.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Step-by-step: convert with CalmPDF
      </h2>
      <ol className="list-decimal list-inside space-y-2 text-sage-700 mb-6">
        <li>
          Open <strong>/docx-to-pdf</strong> in your browser.
        </li>
        <li>Upload your DOCX document.</li>
        <li>Run conversion and wait for processing to complete.</li>
        <li>Download the new PDF and preview every page.</li>
        <li>
          If needed, run a final pass with <a href="/compress-pdf" className="text-sage-900 underline underline-offset-4">Compress PDF</a> before sharing.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Choose the right tool</h2>
      <ul className="list-disc list-inside text-sage-700 space-y-2 mb-6">
        <li>Need editable text from a PDF? Use <a href="/pdf-to-docx" className="text-sage-900 underline underline-offset-4">PDF to Word</a>.</li>
        <li>Need to combine several PDFs? Use <a href="/merge-pdf" className="text-sage-900 underline underline-offset-4">Merge PDF</a>.</li>
        <li>Need to remove pages from a final packet? Use <a href="/split-pdf" className="text-sage-900 underline underline-offset-4">Split PDF</a>.</li>
        <li>Need orientation fixes? Use <a href="/rotate-pdf" className="text-sage-900 underline underline-offset-4">Rotate PDF</a>.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Output expectations and limitations</h2>
      <p className="text-sage-700 mb-6">
        Standard headings, paragraphs, and lists usually convert cleanly.
        Complex features such as floating objects, advanced section breaks,
        tracked changes, and legacy .doc-era styling may render differently.
        Always review print-critical legal or design-heavy pages before final
        delivery.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Common mistakes and fixes</h2>
      <ul className="list-disc list-inside text-sage-700 space-y-2 mb-6">
        <li>
          <strong>Layout drift:</strong> simplify custom styles and re-export.
        </li>
        <li>
          <strong>Unexpected pagination:</strong> check page size and margins in
          your source DOCX before retrying.
        </li>
        <li>
          <strong>Conversion fails:</strong> split very long documents into
          sections, convert in parts, then merge PDFs.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Privacy note</h2>
      <p className="text-sage-700 mb-6">
        Conversion runs in your browser session. CalmPDF does not upload your
        DOCX content to remote servers.
      </p>

      <p className="text-sage-700 mb-6">
        <a href="/docx-to-pdf" className="text-sage-900 underline underline-offset-4">
          Ready to export? Use CalmPDF&apos;s Word to PDF tool.
        </a>
      </p>
    </ArticleShell>
  );
}
