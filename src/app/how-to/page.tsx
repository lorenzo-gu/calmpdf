import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { PUBLISHED_BLOG_POSTS, type Post } from "@/content/posts";

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

type Cluster = {
  title: string;
  posts: Post[];
};

const TOPIC_CLUSTERS: Cluster[] = [
  {
    title: "Compress PDF",
    posts: PUBLISHED_BLOG_POSTS.filter((p) => p.slug.includes("compress") || p.slug.includes("reduce")),
  },
  {
    title: "Merge PDF",
    posts: PUBLISHED_BLOG_POSTS.filter((p) => p.slug.includes("merge") || p.slug.includes("combine")),
  },
  {
    title: "Split PDF",
    posts: PUBLISHED_BLOG_POSTS.filter((p) => p.slug.includes("split")),
  },
  {
    title: "Rotate PDF",
    posts: PUBLISHED_BLOG_POSTS.filter((p) => p.slug.includes("rotate")),
  },
  { title: "Convert PDF", posts: PUBLISHED_BLOG_POSTS.filter((p) => p.slug.includes("word") || p.slug.includes("docx") || p.slug.includes("convert-pdf")) },
  { title: "Images/PDF", posts: [] },
  { title: "Page Management", posts: [] },
];

export default function HowToIndexPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 md:px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">PDF how-to guides</h1>
      <p className="mt-3 text-lg text-sage-700">
        Practical guides for common PDF tasks. Every tool runs in your browser —
        no uploads, no account required.
      </p>

      <div className="mt-10 space-y-8">
        {TOPIC_CLUSTERS.map((cluster) => (
          <section key={cluster.title}>
            <h2 className="text-xl font-semibold text-sage-900">{cluster.title}</h2>
            {cluster.posts.length > 0 ? (
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {cluster.posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/how-to/${post.slug}`}
                    className="card no-underline hover:border-sage-300 transition-colors"
                  >
                    <h3 className="font-semibold text-sage-900">{post.title}</h3>
                    <p className="mt-2 text-sm text-sage-700">{post.description}</p>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="mt-3 text-sm text-sage-700">
                New guides coming soon for this topic cluster.
              </p>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
