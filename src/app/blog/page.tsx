import type { Metadata } from "next";
import { PublicRouteLanding } from "@/components/PublicRouteLanding";

export const metadata: Metadata = {
  title: "Blog | CalmPDF",
  description: "Read CalmPDF guides and updates for practical PDF workflows.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "Blog", description: "Read CalmPDF guides and updates for practical PDF workflows.", url: "/blog" },
};

export default function Page() {
  return <PublicRouteLanding title="Blog" description="Read CalmPDF guides and updates for practical PDF workflows." />;
}
