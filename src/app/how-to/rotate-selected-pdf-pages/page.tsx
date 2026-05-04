import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/content/posts";
import { ArticleShell } from "@/components/ArticleShell";

const post = BLOG_POSTS.find((p) => p.slug === "rotate-selected-pdf-pages")!;

export const metadata: Metadata = {
  title: "How to Rotate Only Selected PDF Pages | CalmPDF",
  description: "Rotate one or several selected PDF pages while keeping all other pages unchanged.",
  alternates: { canonical: `${SITE.url}/how-to/rotate-selected-pdf-pages` },
};

export default function Page() {
  return (
    <ArticleShell post={post}>
      <h1 className="text-3xl font-semibold tracking-tight mb-4">How to Rotate Only Selected PDF Pages</h1>
      <p className="text-sage-700 mb-6">Use selective rotation when only some pages are sideways, such as scanned attachments inside portrait documents.</p>
      <ol className="list-decimal list-inside text-sage-700 space-y-2 mb-6">
        <li>Open <a href="/rotate-pdf" className="text-sage-900 underline underline-offset-4">Rotate PDF</a>.</li>
        <li>Select only the page thumbnails that need rotation.</li>
        <li>Rotate clockwise or counterclockwise.</li>
        <li>Export the corrected file.</li>
      </ol>
    </ArticleShell>
  );
}
