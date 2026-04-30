import type { Metadata } from "next";
import { PublicRouteLanding } from "@/components/PublicRouteLanding";

export const metadata: Metadata = {
  title: "Terms | CalmPDF",
  description: "Read CalmPDF terms for using the website and PDF tools.",
  alternates: { canonical: "/terms" },
  openGraph: { title: "Terms", description: "Read CalmPDF terms for using the website and PDF tools.", url: "/terms" },
};

export default function Page() {
  return <PublicRouteLanding title="Terms" description="Read CalmPDF terms for using the website and PDF tools." />;
}
