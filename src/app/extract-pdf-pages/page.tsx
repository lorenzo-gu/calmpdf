import type { Metadata } from "next";
import { PublicRouteLanding } from "@/components/PublicRouteLanding";

export const metadata: Metadata = {
  title: "Extract PDF Pages | CalmPDF",
  description: "Pick specific pages from a PDF and create a new document.",
  alternates: { canonical: "/extract-pdf-pages" },
  openGraph: { title: "Extract PDF Pages", description: "Pick specific pages from a PDF and create a new document.", url: "/extract-pdf-pages" },
};

export default function Page() {
  return <PublicRouteLanding title="Extract PDF Pages" description="Pick specific pages from a PDF and create a new document." />;
}
