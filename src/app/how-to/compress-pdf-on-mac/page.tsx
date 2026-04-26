import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/content/posts";
import { ArticleShell } from "@/components/ArticleShell";

const post = BLOG_POSTS.find((p) => p.slug === "compress-pdf-on-mac")!;

export const metadata: Metadata = {
  title: "How to Compress a PDF on Mac | CalmPDF",
  description:
    "Step-by-step guide to compressing a PDF on Mac using Preview, Export, or a free browser-based tool — no software to install.",
  keywords: ["compress pdf on mac", "reduce pdf size mac", "mac pdf compression"],
  alternates: { canonical: `${SITE.url}/how-to/compress-pdf-on-mac` },
  openGraph: {
    title: "How to Compress a PDF on Mac",
    description: "Three ways to compress a PDF on Mac — from Preview to a private browser-based option.",
    url: `${SITE.url}/how-to/compress-pdf-on-mac`,
    siteName: SITE.name,
  },
};

export default function Page() {
  return (
    <ArticleShell post={post}>
      <h1 className="text-3xl font-semibold tracking-tight mb-4">
        How to Compress a PDF on Mac
      </h1>
      <p className="text-sage-700 mb-6">
        Mac has two built-in ways to shrink a PDF: Preview's Quartz filter and the
        Export as PDF option. For most people, a free browser tool like CalmPDF is
        faster and more predictable — no Quartz filter required, and your file never
        leaves your device.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Method 1: Compress using Preview</h2>
      <p className="text-sage-700 mb-4">
        Preview is built into every Mac and can reduce PDF size using Apple's Quartz
        compression filter. The result is often quite aggressive — good for file size,
        but it can noticeably soften images.
      </p>
      <ol className="list-decimal list-inside space-y-2 text-sage-700 mb-4">
        <li>Open the PDF in Preview (double-click it in Finder).</li>
        <li>Go to <strong>File → Export as PDF</strong>.</li>
        <li>Click the <strong>Quartz Filter</strong> dropdown and choose <strong>Reduce File Size</strong>.</li>
        <li>Save the file with a new name.</li>
      </ol>
      <p className="text-sage-700 mb-6">
        This can cut file size by 50–80%, but the Quartz filter was designed for print
        workflows, not the web. Images may lose sharpness, and occasionally text
        rendering changes. For documents you share professionally, preview the result
        before sending.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Method 2: Export from Preview (lighter touch)</h2>
      <p className="text-sage-700 mb-4">
        If Reduce File Size is too aggressive, try a plain export without the Quartz filter:
      </p>
      <ol className="list-decimal list-inside space-y-2 text-sage-700 mb-6">
        <li>Open the PDF in Preview.</li>
        <li>Go to <strong>File → Export as PDF</strong>.</li>
        <li>Leave the Quartz Filter set to <strong>None</strong>.</li>
        <li>Save. Preview re-encodes the PDF, which sometimes removes metadata bloat
        and shrinks the file slightly without quality loss.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Method 3: Use CalmPDF (browser-based, private)</h2>
      <p className="text-sage-700 mb-4">
        CalmPDF runs entirely in your browser. You don't install anything, and your PDF
        is never uploaded to a server — useful if the document contains sensitive information.
      </p>
      <ol className="list-decimal list-inside space-y-2 text-sage-700 mb-6">
        <li>Open <strong>calmpdf.com/compress-pdf</strong> in any browser.</li>
        <li>Drop your PDF into the upload area.</li>
        <li>Choose a compression level — <em>High quality</em> keeps images crisp;
        <em>Smaller file</em> reduces size more aggressively.</li>
        <li>Click <strong>Compress</strong> and download the result.</li>
      </ol>
      <p className="text-sage-700 mb-6">
        CalmPDF works on any Mac (Intel or Apple Silicon) without installing software or
        creating an account. It works on Safari, Chrome, Firefox, and Edge.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Which method should you use?</h2>
      <p className="text-sage-700 mb-2">
        <strong>Use Preview's Quartz filter</strong> if you want a fully offline solution and
        don't mind some image quality loss — it's fast and built into macOS.
      </p>
      <p className="text-sage-700 mb-2">
        <strong>Use plain Export</strong> if you have a text-heavy PDF that's larger than
        it should be due to metadata or structure overhead.
      </p>
      <p className="text-sage-700 mb-6">
        <strong>Use CalmPDF</strong> if you need predictable results, want to compare
        compression levels side by side, or are working with confidential documents that
        shouldn't be uploaded to cloud services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Why are PDFs large in the first place?</h2>
      <p className="text-sage-700 mb-6">
        Most large PDFs are image-heavy — think scanned documents, presentation exports,
        or forms with embedded photos. Each image is stored at full resolution by default.
        Compression resamples those images at a lower resolution, which dramatically reduces
        file size with minimal impact on on-screen readability. Text-only PDFs are usually
        already small and compress less.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Frequently asked questions</h2>

      <h3 className="text-lg font-medium mt-5 mb-2">Does compressing a PDF reduce quality?</h3>
      <p className="text-sage-700 mb-4">
        It depends on the method. The Quartz filter in Preview is lossy and can soften images.
        CalmPDF's high-quality preset is designed to preserve readability while still reducing
        size. Text in PDFs is vector-based and is never affected by image compression.
      </p>

      <h3 className="text-lg font-medium mt-5 mb-2">Is there a size limit for PDF compression on Mac?</h3>
      <p className="text-sage-700 mb-4">
        Preview has no enforced size limit, but very large PDFs (500 MB+) can be slow.
        CalmPDF's limit is determined by your browser's memory — most laptops handle up
        to 200 MB comfortably.
      </p>

      <h3 className="text-lg font-medium mt-5 mb-2">Can I compress a PDF on a Mac without the Quartz filter?</h3>
      <p className="text-sage-700 mb-4">
        Yes. Use the plain Export method (no Quartz filter selected), or use CalmPDF which
        applies its own compression algorithm without the Quartz filter's side effects.
      </p>
    </ArticleShell>
  );
}
