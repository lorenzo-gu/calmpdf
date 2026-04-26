import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/content/posts";

export const metadata: Metadata = {
  title: "PDF How-to Guides | CalmPDF",
  description:
    "Step-by-step guides on compressing, merging, splitting, and managing PDF files — all without uploading your documents anywhere.",
  alternates: { canonical: `${SITE.url}/how-to` },
  openGraph: {
    title: "PDF How-to Guides | CalmPDF",
    description:
      "Step-by-step guides on compressing, merging, splitting, and managing PDF files.",
    url: `${SITE.url}/how-to`,
    siteName: SITE.name,
  },
};

export default function HowToIndexPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 md:px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">PDF how-to guides</h1>
      <p className="mt-3 text-lg text-sage-700">
        Practical guides for common PDF tasks. Every tool runs in your browser —
        no uploads, no account required.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/how-to/${post.slug}`}
            className="card no-underline hover:border-sage-300 transition-colors"
          >
            <h2 className="font-semibold text-sage-900">{post.title}</h2>
            <p className="mt-2 text-sm text-sage-700">{post.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
