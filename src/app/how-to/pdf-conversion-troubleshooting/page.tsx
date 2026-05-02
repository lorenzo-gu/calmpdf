import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/content/posts";
import { ArticleShell } from "@/components/ArticleShell";

const post = BLOG_POSTS.find((p) => p.slug === "pdf-conversion-troubleshooting")!;

export const metadata: Metadata = {
  title: "PDF Conversion Troubleshooting | CalmPDF",
  description: "Troubleshoot PDF to Word and Word to PDF conversions, including scans, missing formatting, and browser memory limits.",
  alternates: { canonical: `${SITE.url}/how-to/pdf-conversion-troubleshooting` },
};

export default function Page() {
  return (
    <ArticleShell post={post}>
      <h1 className="text-3xl font-semibold tracking-tight mb-4">PDF Conversion Troubleshooting</h1>
      <h2 className="text-2xl font-semibold mt-8 mb-3">If PDF to Word returns poor output</h2>
      <p className="text-sage-700 mb-6">Check whether the source is scanned. CalmPDF&apos;s current PDF to Word tool does not run OCR, so image-only pages cannot become editable text.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">If Word to PDF changes layout</h2>
      <p className="text-sage-700 mb-6">Complex DOCX styling (custom fonts, floating objects, tracked changes) can shift in browser-based rendering. Simplify styles, accept tracked changes, and retry.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">If conversion fails completely</h2>
      <p className="text-sage-700 mb-6">Retry with a smaller file, especially on mobile. Conversion runs in browser memory, so large documents can fail on low-memory devices.</p>
    </ArticleShell>
  );
}
