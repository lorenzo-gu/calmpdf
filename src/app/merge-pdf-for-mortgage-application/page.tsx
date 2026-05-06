import type { Metadata } from "next";
import { ProgrammaticLandingPage } from "@/components/ProgrammaticLandingPage";
import { PROGRAMMATIC_PAGE_BY_SLUG } from "@/content/programmatic-pages";
import { SITE } from "@/lib/site";

const page = PROGRAMMATIC_PAGE_BY_SLUG["merge-pdf-for-mortgage-application"];

export const metadata: Metadata = {
  title: page.title,
  description: page.metaDescription,
  alternates: { canonical: `${SITE.url}/merge-pdf-for-mortgage-application` },
  openGraph: {
    title: page.h1,
    description: page.metaDescription,
    url: `${SITE.url}/merge-pdf-for-mortgage-application`,
    siteName: SITE.name,
  },
};

export default function Page() {
  return <ProgrammaticLandingPage page={page} />;
}
