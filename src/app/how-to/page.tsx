import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { PUBLISHED_BLOG_POSTS, type Post } from "@/content/posts";
import { EditorialCard } from "@/components/cards";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PDF How-to Guides | CalmPDF",
  description:
    "Practical PDF how-to guides for compressing, merging, splitting, converting, and editing files with private browser-based workflows.",
  alternates: { canonical: `${SITE.url}/how-to` },
  openGraph: {
    title: "PDF How-to Guides | CalmPDF",
    description:
      "Practical PDF how-to guides for common workflows with private browser-based steps.",
    url: `${SITE.url}/how-to`,
    siteName: SITE.name,
  },
};

type GuideCategory = {
  title: string;
  description: string;
  posts: Post[];
};

const FEATURED_SLUGS = [
  "compress-pdf-without-losing-quality",
  "combine-pdf-files",
  "split-pdf-into-multiple-files",
  "convert-pdf-to-word",
  "reorder-pdf-pages-online",
  "add-text-to-pdf",
];

const FEATURED_GUIDES = FEATURED_SLUGS
  .map((slug) => PUBLISHED_BLOG_POSTS.find((post) => post.slug === slug))
  .filter((post): post is Post => Boolean(post));

const CATEGORIES: GuideCategory[] = [
  {
    title: "Compress",
    description: "Shrink file size while preserving readability.",
    posts: PUBLISHED_BLOG_POSTS.filter((p) => p.slug.includes("compress") || p.slug.includes("reduce")),
  },
  {
    title: "Merge",
    description: "Join multiple PDFs into one clean document.",
    posts: PUBLISHED_BLOG_POSTS.filter((p) => p.slug.includes("merge") || p.slug.includes("combine")),
  },
  {
    title: "Split",
    description: "Break large PDFs into focused files.",
    posts: PUBLISHED_BLOG_POSTS.filter((p) => p.slug.includes("split") && !p.slug.includes("split-merge-reorder-rotate-which-to-use")),
  },
  {
    title: "Convert",
    description: "Move between PDF and editable formats.",
    posts: PUBLISHED_BLOG_POSTS.filter((p) => p.slug.includes("word") || p.slug.includes("docx") || p.slug.includes("convert-pdf")),
  },
  {
    title: "Edit",
    description: "Update content and annotations in-browser.",
    posts: PUBLISHED_BLOG_POSTS.filter((p) => p.slug.includes("add-text") || p.slug.includes("edit")),
  },
  {
    title: "Page management",
    description: "Rotate, reorder, and reorganize pages.",
    posts: PUBLISHED_BLOG_POSTS.filter((p) => p.slug.includes("reorder") || p.slug.includes("rotate") || p.slug.includes("extract") || p.slug.includes("split-merge-reorder-rotate-which-to-use")),
  },
  {
    title: "Images/PDF",
    description: "Workflows for PDF and image conversions.",
    posts: PUBLISHED_BLOG_POSTS.filter((p) => p.slug.includes("jpg") || p.slug.includes("image")),
  },
].map((category) => ({
  ...category,
  posts: category.posts.sort((a, b) => a.title.localeCompare(b.title)),
}));

const NON_EMPTY_CATEGORIES = CATEGORIES.filter((category) => category.posts.length > 0);

export default function HowToIndexPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
      <section className="rounded-2xl border border-sage-200 bg-gradient-to-br from-white to-sage-50 p-6 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sage-600">Guide center</p>
        <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-sage-900">PDF how-to guides</h1>
        <p className="mt-4 max-w-3xl text-base md:text-lg text-sage-700">
          Practical guides for common PDF tasks, with private browser-based workflows where possible.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-sm">
          {NON_EMPTY_CATEGORIES.map((category) => (
            <a key={category.title} href={`#${category.title.toLowerCase().replace(/\s+/g, "-")}`} className="rounded-full border border-sage-300 bg-white px-3 py-1.5 text-sage-800 no-underline hover:border-sage-400 transition-colors">
              {category.title}
            </a>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-sage-900">Featured guides</h2>
            <p className="mt-2 text-sage-700">Start with the most useful step-by-step workflows.</p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_GUIDES.map((post) => (
            <Link key={post.slug} href={`/how-to/${post.slug}`} className="card no-underline hover:border-sage-300 transition-colors h-full">
              <p className="text-xs font-semibold uppercase tracking-wide text-sage-600">Featured</p>
              <h3 className="mt-2 font-semibold text-sage-900">{post.title}</h3>
              <p className="mt-2 text-sm text-sage-700">{post.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl md:text-3xl font-semibold text-sage-900">Browse by task</h2>
        <p className="mt-2 text-sage-700">Choose a category to find the right guide quickly.</p>

      <div className="mt-10 space-y-8">
        {NON_EMPTY_CATEGORIES.map((cluster) => (
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
      </section>
    </main>
  );
}
