import Link from "next/link";
import { SITE } from "@/lib/site";
import { TOOLS } from "@/content/tools";
import type { Post } from "@/content/posts";

function JsonLdScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ArticleShell({
  post,
  children,
}: {
  post: Post;
  children: React.ReactNode;
}) {
  const canonicalUrl = `${SITE.url}/how-to/${post.slug}`;

  return (
    <>
      {/* Article JSON-LD */}
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          datePublished: post.datePublished,
          dateModified: post.datePublished,
          author: {
            "@type": "Organization",
            name: SITE.name,
            url: SITE.url,
          },
          publisher: {
            "@type": "Organization",
            name: SITE.name,
            url: SITE.url,
          },
          url: canonicalUrl,
          mainEntityOfPage: canonicalUrl,
        }}
      />

      {/* Breadcrumb JSON-LD */}
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
            { "@type": "ListItem", position: 2, name: "How-to guides", item: `${SITE.url}/how-to` },
            { "@type": "ListItem", position: 3, name: post.title, item: canonicalUrl },
          ],
        }}
      />

      {/* Breadcrumb nav */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-3xl px-4 md:px-6 pt-6 text-sm text-sage-700"
      >
        <Link href="/" className="no-underline hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/how-to" className="no-underline hover:underline">How-to guides</Link>
        <span className="mx-2">/</span>
        <span className="text-sage-900">{post.title}</span>
      </nav>

      {/* Article body */}
      <article className="mx-auto max-w-3xl px-4 md:px-6 pt-6 pb-12 leading-relaxed">
        {children}
      </article>

      {/* CTA card */}
      <aside className="mx-auto max-w-3xl px-4 md:px-6 pb-12">
        <div className="rounded-2xl border border-sage-100 bg-sage-50 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-semibold text-sage-900">Try it free — no signup needed</p>
            <p className="mt-1 text-sm text-sage-700">
              Your file stays in your browser. Nothing is uploaded.
            </p>
          </div>
          <Link
            href={post.ctaHref}
            className="btn-primary no-underline whitespace-nowrap"
          >
            {post.ctaLabel}
          </Link>
        </div>
      </aside>

      {/* Related tools grid */}
      <section className="mx-auto max-w-3xl px-4 md:px-6 pb-16">
        <h2 className="text-xl font-semibold mb-4">Other free PDF tools</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {TOOLS.map((t) => (
            <Link
              key={t.slug}
              href={`/${t.slug}`}
              className="card no-underline hover:border-sage-300 transition-colors"
            >
              <h3 className="font-semibold text-sage-900">{t.h1}</h3>
              <p className="mt-2 text-sm text-sage-700">{t.tagline}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
