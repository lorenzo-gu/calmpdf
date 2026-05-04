import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/content/posts";
import { ArticleShell } from "@/components/ArticleShell";

const post = BLOG_POSTS.find((p) => p.slug === "split-merge-reorder-rotate-which-to-use")!;

export const metadata: Metadata = {
  title: "Split vs Merge vs Reorder vs Rotate PDF | CalmPDF",
  description: "Quick decision guide for choosing split, merge, reorder, or rotate for your PDF task.",
  alternates: { canonical: `${SITE.url}/how-to/split-merge-reorder-rotate-which-to-use` },
};

export default function Page() {
  return (
    <ArticleShell post={post}>
      <h1 className="text-3xl font-semibold tracking-tight mb-4">Split vs Merge vs Reorder vs Rotate PDF: Which Tool to Use</h1>
      <ul className="list-disc list-inside text-sage-700 space-y-2 mb-6">
        <li><strong>Split</strong>: break one PDF into smaller files or extract ranges.</li>
        <li><strong>Merge</strong>: combine multiple PDFs into one document.</li>
        <li><strong>Reorder</strong>: keep all pages but change their sequence.</li>
        <li><strong>Rotate</strong>: fix page orientation without changing order.</li>
      </ul>
      <p className="text-sage-700 mb-6">For mixed cleanup jobs, the most common flow is Merge → Reorder → Rotate.</p>
    </ArticleShell>
  );
}
