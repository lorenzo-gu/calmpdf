import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { PUBLISHED_BLOG_POSTS, type Post } from "@/content/posts";
import { EditorialCard } from "@/components/cards";

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
    posts: PUBLISHED_BLOG_POSTS.filter((p) => p.slug.includes("split") && !p.slug.includes("split-merge-reorder-rotate-which-to-use")),
  },
  {
    title: "Rotate PDF",
    posts: PUBLISHED_BLOG_POSTS.filter((p) => p.slug.includes("rotate")),
  },
  { title: "Convert PDF", posts: PUBLISHED_BLOG_POSTS.filter((p) => p.slug.includes("word") || p.slug.includes("docx") || p.slug.includes("convert-pdf")) },
  { title: "Images/PDF", posts: [] },
  { title: "Page Management", posts: PUBLISHED_BLOG_POSTS.filter((p) => p.slug.includes("reorder") || p.slug.includes("rotate-selected") || p.slug.includes("split-merge-reorder-rotate-which-to-use")) },
];

export default function HowToIndexPage() {
  const workflowLinks = [
    { href: "/pdf-tools-without-upload", label: "PDF tools without upload" },
    { href: "/private-pdf-editor-online", label: "Private PDF editor online" },
    { href: "/compress-pdf-for-email", label: "Compress PDF for email" },
    { href: "/merge-pdf-on-iphone-without-app", label: "Merge PDF on iPhone without app" },
    { href: "/browser-based-pdf-converter", label: "Browser-based PDF converter" },
  ];

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
                  <EditorialCard
                    key={post.slug}
                    href={`/how-to/${post.slug}`}
                    title={post.title}
                    description={post.description}
                    category={cluster.title}
                    readTime="5 min"
                  />
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

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-sage-900">Popular PDF workflows</h2>
        <p className="mt-2 text-sm text-sage-700">
          Looking for a quick path to common outcomes? Start with these workflow landing pages.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {workflowLinks.map((link) => (
            <EditorialCard
              key={link.href}
              href={link.href}
              title={link.label}
              description="A concise workflow for completing this outcome with browser-based PDF tools."
              category="Workflow"
              readTime="4 min"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
