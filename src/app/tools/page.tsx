import type { Metadata } from "next";
import { PublicRouteLanding } from "@/components/PublicRouteLanding";

export const metadata: Metadata = {
  title: "PDF Tools | CalmPDF",
  description: "Browse all CalmPDF tools in one place. Every route is live, indexable, and designed for private in-browser workflows.",
  alternates: { canonical: "/tools" },
  openGraph: { title: "PDF Tools", description: "Browse all CalmPDF tools in one place. Every route is live, indexable, and designed for private in-browser workflows.", url: "/tools" },
};

export default function Page() {
  return <PublicRouteLanding title="PDF Tools" description="Browse all CalmPDF tools in one place. Every route is live, indexable, and designed for private in-browser workflows." />;
}
