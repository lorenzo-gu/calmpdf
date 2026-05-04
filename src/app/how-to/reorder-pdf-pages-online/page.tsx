import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/content/posts";
import { ArticleShell } from "@/components/ArticleShell";

const post = BLOG_POSTS.find((p) => p.slug === "reorder-pdf-pages-online")!;

export const metadata: Metadata = {
  title: "How to Reorder PDF Pages Online | CalmPDF",
  description: "Step-by-step guide to reorder PDF pages online in your browser.",
  alternates: { canonical: `${SITE.url}/how-to/reorder-pdf-pages-online` },
};

export default function Page() {
  return (
    <ArticleShell post={post}>
      <h1 className="text-3xl font-semibold tracking-tight mb-4">How to Reorder PDF Pages Online</h1>
      <p className="text-sage-700 mb-6">If your pages are in the wrong sequence, reordering is the fastest fix. Drag pages into place and export a clean final PDF.</p>
      <ol className="list-decimal list-inside text-sage-700 space-y-2 mb-6">
        <li>Open the <a href="/reorder-pdf" className="text-sage-900 underline underline-offset-4">Reorder PDF tool</a>.</li>
        <li>Drop your file and wait for page thumbnails.</li>
        <li>Drag pages into the correct order.</li>
        <li>Export and download the reordered PDF.</li>
      </ol>
    </ArticleShell>
  );
}
