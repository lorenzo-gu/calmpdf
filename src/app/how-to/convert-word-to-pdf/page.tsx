import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/content/posts";
import { ArticleShell } from "@/components/ArticleShell";

const post = BLOG_POSTS.find((p) => p.slug === "convert-word-to-pdf")!;

export const metadata: Metadata = {
  title: "How to Convert Word to PDF (DOCX) | CalmPDF",
  description: "Convert Word documents to PDF for sharing and printing, with practical notes on layout fidelity and supported formats.",
  alternates: { canonical: `${SITE.url}/how-to/convert-word-to-pdf` },
};

export default function Page() {
  return (
    <ArticleShell post={post}>
      <h1 className="text-3xl font-semibold tracking-tight mb-4">How to Convert Word to PDF (DOCX)</h1>
      <p className="text-sage-700 mb-6">Word to PDF is ideal when you need a fixed layout file for applications, approvals, and external sharing.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">What works best</h2>
      <p className="text-sage-700 mb-6">Standard DOCX files with headings, paragraphs, and lists usually convert well. CalmPDF currently supports DOCX input only.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Known limitations</h2>
      <p className="text-sage-700 mb-6">Older .doc files, tracked changes, comments, and some advanced Word objects may not render exactly. For print-critical legal layouts, compare output against Word&apos;s native export.</p>
      <p className="text-sage-700 mb-6"><a href="/docx-to-pdf" className="text-sage-900 underline underline-offset-4">Try CalmPDF Word to PDF converter.</a></p>
    </ArticleShell>
  );
}
