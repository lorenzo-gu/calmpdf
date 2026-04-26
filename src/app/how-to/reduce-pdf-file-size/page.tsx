import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/content/posts";
import { ArticleShell } from "@/components/ArticleShell";

const post = BLOG_POSTS.find((p) => p.slug === "reduce-pdf-file-size")!;

export const metadata: Metadata = {
  title: "How to Reduce PDF File Size | CalmPDF",
  description:
    "Learn why PDFs get large and the best methods to reduce file size — including a free, private browser-based tool that needs no upload.",
  keywords: ["reduce pdf file size", "decrease pdf size", "make pdf smaller"],
  alternates: { canonical: `${SITE.url}/how-to/reduce-pdf-file-size` },
  openGraph: {
    title: "How to Reduce PDF File Size",
    description: "Why PDFs get large, and the most effective ways to shrink them without losing quality.",
    url: `${SITE.url}/how-to/reduce-pdf-file-size`,
    siteName: SITE.name,
  },
};

export default function Page() {
  return (
    <ArticleShell post={post}>
      <h1 className="text-3xl font-semibold tracking-tight mb-4">
        How to Reduce PDF File Size
      </h1>
      <p className="text-sage-700 mb-6">
        Large PDFs slow down email, get rejected by upload portals, and eat storage space.
        The good news: most PDFs can be reduced significantly — often 50–80% — without
        meaningful quality loss. The method depends on what's making your PDF large.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Why PDFs get large</h2>
      <p className="text-sage-700 mb-4">
        A PDF's file size is dominated by its images. Every photo, scan, screenshot, or
        illustration embedded in a PDF is stored at full resolution by default. A single
        full-resolution photo can be 3–5 MB; a 20-page document with a photo on each page
        balloons to 60–100 MB before any optimization.
      </p>
      <p className="text-sage-700 mb-4">
        Other contributors to file size include:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sage-700 mb-6">
        <li><strong>Embedded fonts</strong> — PDFs embed full font files for consistent rendering. Subsetting (keeping only the characters used) reduces this significantly.</li>
        <li><strong>Unused objects</strong> — editing software often leaves behind deleted elements, empty layers, and revision history in the PDF structure.</li>
        <li><strong>Metadata and thumbnails</strong> — creator software sometimes embeds preview images, color profiles, and extensive metadata.</li>
        <li><strong>Unoptimized structure</strong> — PDFs not "linearized" for web delivery can be structured inefficiently.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Methods to reduce PDF file size</h2>

      <h3 className="text-xl font-medium mt-6 mb-2">1. Compress images inside the PDF</h3>
      <p className="text-sage-700 mb-4">
        This is the most effective method for most documents. Tools resample embedded images
        from their original resolution (often 300 DPI or higher) to a lower resolution
        suitable for screen viewing (72–150 DPI). The visual difference is minimal at normal
        reading distances, but the file size reduction is substantial.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">2. Remove unused objects and metadata</h3>
      <p className="text-sage-700 mb-4">
        PDF optimization tools can strip out unused fonts, embedded thumbnails, revision
        history, and other bloat without affecting visible content. This is "lossless"
        compression — nothing you can see changes.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">3. Re-export from the source application</h3>
      <p className="text-sage-700 mb-4">
        If you have the original Word, PowerPoint, or InDesign file, re-exporting with
        "Smallest file size" or "Web" settings produces a leaner PDF than compressing an
        already-exported one. Source apps have more context about what can be safely
        optimized.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">4. Use a dedicated PDF compression tool</h3>
      <p className="text-sage-700 mb-6">
        When you only have the PDF (not the source file), a dedicated compressor is your best
        option. CalmPDF runs this in your browser — your file stays on your device while the
        compression happens locally.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">How to reduce PDF file size with CalmPDF</h2>
      <ol className="list-decimal list-inside space-y-2 text-sage-700 mb-6">
        <li>Go to <strong>calmpdf.com/compress-pdf</strong>.</li>
        <li>Drop your PDF into the upload area — it loads in your browser without uploading.</li>
        <li>Choose a compression level:
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
            <li><strong>High quality</strong> — conservative compression, minimal visual change.</li>
            <li><strong>Balanced</strong> — good reduction with acceptable quality for most use cases.</li>
            <li><strong>Smaller file</strong> — maximum compression, some image softening.</li>
          </ul>
        </li>
        <li>Click <strong>Compress</strong> and download the result.</li>
        <li>Check the output — open it at 100% zoom and verify images and text look acceptable.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-3">How much can you reduce a PDF?</h2>
      <p className="text-sage-700 mb-4">
        It depends heavily on the content. Here's what to expect:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sage-700 mb-6">
        <li><strong>Scanned documents and photos:</strong> 50–80% reduction is typical.</li>
        <li><strong>Mixed documents</strong> (text + images from Word/PowerPoint): 20–50%.</li>
        <li><strong>Text-only PDFs:</strong> 5–15% — they're already small and compress less.</li>
        <li><strong>Already-compressed PDFs:</strong> minimal savings — you can't compress compressed data significantly.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Common questions</h2>

      <h3 className="text-lg font-medium mt-5 mb-2">What's the maximum PDF size for email?</h3>
      <p className="text-sage-700 mb-4">
        Gmail and Outlook both support attachments up to 25 MB. Many corporate email systems
        have lower limits (10 MB is common). If your PDF exceeds the limit, aim to compress
        it below 10 MB to be safe for most recipients.
      </p>

      <h3 className="text-lg font-medium mt-5 mb-2">Does reducing file size affect the text?</h3>
      <p className="text-sage-700 mb-4">
        No. Text in PDFs is vector-based and unaffected by image compression. Characters
        remain perfectly sharp at any compression level.
      </p>

      <h3 className="text-lg font-medium mt-5 mb-2">Can I reduce a PDF below a specific size?</h3>
      <p className="text-sage-700 mb-4">
        Most tools, including CalmPDF, compress as much as possible at the chosen quality level
        but don't target a specific output size. If you need the file below a specific threshold
        (like 2 MB for a government portal), try the highest compression setting and check the
        result. If it's still too large, the PDF may have a lot of high-resolution imagery.
      </p>
    </ArticleShell>
  );
}
