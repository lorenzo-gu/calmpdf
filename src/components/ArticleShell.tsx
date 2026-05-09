import Link from "next/link";
import { SITE } from "@/lib/site";
import { TOOLS } from "@/content/tools";
import type { Post } from "@/content/posts";
import { FooterAd, HeaderAd, InArticleAd } from "@/components/AdUnits";

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
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.datePublished,
          dateModified: post.dateModified ?? post.datePublished,
          inLanguage: "en-US",
          isAccessibleForFree: true,
          articleSection: "PDF How-to Guides",
          about: ["PDF", "Document management", "How-to"],
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
          ...(post.image ? { image: post.image } : {}),
        }}
      />


      {post.faqs && post.faqs.length > 0 ? (
        <JsonLdScript
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }}
        />
      ) : null}

      {/* Breadcrumb JSON-LD */}
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
            { "@type": "ListItem", position: 2, name: "PDF How-to Guides", item: `${SITE.url}/how-to` },
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
        <Link href="/how-to" className="no-underline hover:underline">PDF How-to Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-sage-900">{post.title}</span>
      </nav>

      <section className="mx-auto max-w-3xl px-4 md:px-6">
        <HeaderAd />
      </section>

      {/* Article body */}
      <article className="mx-auto max-w-3xl px-4 md:px-6 pt-6 pb-12 leading-relaxed">
        {children}

        {/* Keep in-article placement moderate to avoid aggressive ad density. */}
        <InArticleAd />
      </article>

      <section className="mx-auto max-w-3xl px-4 md:px-6">
        <InArticleAd />
      </section>

      {/* Footer ad slot for how-to pages after primary content. */}
      <section className="mx-auto max-w-3xl px-4 md:px-6">
        <FooterAd />
      </section>

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

      {post.relatedLinks && post.relatedLinks.length > 0 && (
        <section className="mx-auto max-w-3xl px-4 md:px-6 pb-12">
          <h2 className="text-xl font-semibold mb-4">Related guides and workflows</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {post.relatedLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="card block no-underline hover:border-sage-300 transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

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
