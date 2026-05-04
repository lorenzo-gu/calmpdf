import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/content/posts";
import { ArticleShell } from "@/components/ArticleShell";

const post = BLOG_POSTS.find((p) => p.slug === "edit-pdf-in-browser")!;

export const metadata: Metadata = {
  title: "How to Edit a PDF in Your Browser | CalmPDF",
  description: "Learn practical browser-based PDF editing for forms, annotations, and quick fixes.",
  alternates: { canonical: `${SITE.url}/how-to/edit-pdf-in-browser` },
};

export default function Page() {
  return (
    <ArticleShell post={post}>
      <h1 className="text-3xl font-semibold tracking-tight mb-4">How to Edit a PDF in Your Browser</h1>
      <p className="text-sage-700 mb-6">Browser editing is great for small updates: add text, comments, highlights, and signatures without installing anything.</p>
      <p className="text-sage-700 mb-6">Need full page updates too? Pair editing with <a href="/reorder-pdf" className="text-sage-900 underline underline-offset-4">Reorder PDF</a> and <a href="/rotate-pdf" className="text-sage-900 underline underline-offset-4">Rotate PDF</a> when page sequence or orientation is also wrong.</p>
    </ArticleShell>
  );
}
