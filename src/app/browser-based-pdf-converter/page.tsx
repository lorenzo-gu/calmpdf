import type { Metadata } from "next";
import Script from "next/script";
import { ComparisonLandingPage } from "@/components/ComparisonLandingPage";
import { COMPARISON_PAGE_BY_SLUG } from "@/content/comparison-pages";
import { SITE } from "@/lib/site";

const page = COMPARISON_PAGE_BY_SLUG["browser-based-pdf-converter"];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: page.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export const metadata: Metadata = {
  title: page.title,
  description: page.metaDescription,
  alternates: { canonical: `${SITE.url}/browser-based-pdf-converter` },
  openGraph: {
    title: page.h1,
    description: page.metaDescription,
    url: `${SITE.url}/browser-based-pdf-converter`,
    siteName: SITE.name,
  },
};

export default function Page() {
  return (
    <>
      <Script
        id="faq-jsonld-browser-based-pdf-converter"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ComparisonLandingPage page={page} />
    </>
  );
}
