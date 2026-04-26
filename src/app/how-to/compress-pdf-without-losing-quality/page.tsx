import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/content/posts";
import { ArticleShell } from "@/components/ArticleShell";

const post = BLOG_POSTS.find((p) => p.slug === "compress-pdf-without-losing-quality")!;

export const metadata: Metadata = {
  title: "How to Compress a PDF Without Losing Quality | CalmPDF",
  description:
    "Learn the difference between lossy and lossless PDF compression, and how to shrink your PDF while keeping text and images crisp.",
  keywords: ["compress pdf without losing quality", "lossless pdf compression", "reduce pdf size keep quality"],
  alternates: { canonical: `${SITE.url}/how-to/compress-pdf-without-losing-quality` },
  openGraph: {
    title: "How to Compress a PDF Without Losing Quality",
    description: "Lossy vs lossless PDF compression — and how to keep quality while reducing file size.",
    url: `${SITE.url}/how-to/compress-pdf-without-losing-quality`,
    siteName: SITE.name,
  },
};

export default function Page() {
  return (
    <ArticleShell post={post}>
      <h1 className="text-3xl font-semibold tracking-tight mb-4">
        How to Compress a PDF Without Losing Quality
      </h1>
      <p className="text-sage-700 mb-6">
        Whether you can compress a PDF without losing quality depends on what's in the file.
        Text and vector graphics compress losslessly — they look identical at any file size.
        Images are trickier: most compression tools reduce image resolution, which does
        affect sharpness. The key is choosing the right compression level for your content.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Lossy vs lossless compression</h2>
      <p className="text-sage-700 mb-4">
        <strong>Lossless compression</strong> reorganizes a PDF's internal structure — removing
        duplicate data, unused objects, and embedded metadata — without touching image pixels.
        The file gets smaller, and the content is pixel-for-pixel identical. The trade-off is
        that savings are modest: typically 5–20% for a typical mixed document.
      </p>
      <p className="text-sage-700 mb-6">
        <strong>Lossy compression</strong> resamples images at a lower resolution. A 300 DPI
        scanned photo might be resampled to 150 DPI, halving the pixels that need to be stored.
        On screen, this looks fine for most documents — the human eye is forgiving at normal
        reading distances. But zoom in or print at full size, and softening becomes visible.
        Lossy compression is where the big savings live: 40–80% file size reduction is common.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">What "quality" actually means for PDFs</h2>
      <p className="text-sage-700 mb-4">
        A PDF is made of layers. Text is stored as vector instructions (font + position), so it
        scales perfectly and takes up very little space. Charts and diagrams created in software
        like Word or PowerPoint are also often vector-based. Only raster images — photos, scanned
        pages, screenshots — are affected by lossy compression.
      </p>
      <p className="text-sage-700 mb-6">
        This means: if your PDF is a text report with no photos, you can compress it aggressively
        with no perceptible quality loss. If it's a scanned document or photo-heavy brochure, some
        image softening is inevitable at high compression levels.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">How to compress a PDF with minimal quality loss</h2>

      <h3 className="text-xl font-medium mt-6 mb-2">Step 1: Identify what's in your PDF</h3>
      <p className="text-sage-700 mb-4">
        Open the PDF and scroll through it. Is it mostly text? Mostly photos? A mix? Text-heavy
        documents compress well without quality loss. Photo-heavy documents will lose some sharpness
        regardless of the tool you use — the question is how much.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">Step 2: Choose the right compression level</h3>
      <p className="text-sage-700 mb-4">
        Most PDF compression tools offer a quality slider or preset. Start with the highest quality
        setting and work down until you find the smallest file that still looks acceptable. For
        documents you'll only share digitally, 150 DPI images are usually fine. For anything
        you'll print professionally, stay at 200 DPI or higher.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">Step 3: Compare before and after</h3>
      <p className="text-sage-700 mb-6">
        Download the compressed file and open it at 100% zoom. Check any images or charts that
        matter. If they look acceptable, you're done. If not, go back and choose a higher quality
        setting. CalmPDF lets you try different compression levels with instant side-by-side
        comparison.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Using CalmPDF to compress without losing quality</h2>
      <p className="text-sage-700 mb-4">
        CalmPDF runs the compression inside your browser. Your file is never uploaded to a server,
        which matters for sensitive documents.
      </p>
      <ol className="list-decimal list-inside space-y-2 text-sage-700 mb-6">
        <li>Go to <strong>calmpdf.com/compress-pdf</strong>.</li>
        <li>Drop your PDF into the upload area.</li>
        <li>Choose <strong>High quality</strong> to prioritize image sharpness, or <strong>Smaller file</strong> for maximum compression.</li>
        <li>Click Compress and download. Open the result and inspect it.</li>
        <li>If the quality is acceptable, done. If not, go back and choose a lighter setting.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Why text always stays sharp</h2>
      <p className="text-sage-700 mb-6">
        Text in a PDF is rendered as vector instructions — the font file describes the shape of
        each character mathematically, and the PDF stores the character code and position. No
        pixel data is involved, so compression has no effect on text clarity. Even the most
        aggressive compression settings won't blur text. What changes is the size and quality of
        embedded raster images.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Common questions</h2>

      <h3 className="text-lg font-medium mt-5 mb-2">Can I compress a scanned PDF without losing quality?</h3>
      <p className="text-sage-700 mb-4">
        Scanned PDFs are entirely images — each page is a photo of a piece of paper. Some quality
        loss is unavoidable if you want significant file size reduction. Choose a high-quality
        preset and check the output. For archiving, keep the original; send the compressed version.
      </p>

      <h3 className="text-lg font-medium mt-5 mb-2">Does compression affect PDF bookmarks or links?</h3>
      <p className="text-sage-700 mb-4">
        No. PDF bookmarks, hyperlinks, form fields, and document structure are separate from image
        data and are preserved during compression.
      </p>

      <h3 className="text-lg font-medium mt-5 mb-2">What compression ratio is safe for quality-sensitive documents?</h3>
      <p className="text-sage-700 mb-4">
        A 20–40% file size reduction is usually safe with no visible quality change. Reductions of
        50–70% are achievable with minimal impact for on-screen viewing. Beyond 70%, you'll usually
        see softening in photos. For legal, medical, or archival documents, stay conservative.
      </p>
    </ArticleShell>
  );
}
