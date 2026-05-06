import type { Metadata } from "next";
import { ComparisonLandingPage } from "@/components/ComparisonLandingPage";
import { COMPARISON_PAGE_BY_SLUG } from "@/content/comparison-pages";
import { SITE } from "@/lib/site";

const page = COMPARISON_PAGE_BY_SLUG["free-pdf-merger-without-signup"];

export const metadata: Metadata = {
  title: page.title,
  description: page.metaDescription,
  alternates: { canonical: `${SITE.url}/free-pdf-merger-without-signup` },
  openGraph: {
    title: page.h1,
    description: page.metaDescription,
    url: `${SITE.url}/free-pdf-merger-without-signup`,
    siteName: SITE.name,
  },
};

export default function Page() {
  return <ComparisonLandingPage page={page} />;
}
