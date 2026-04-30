import type { Metadata } from "next";
import { PublicRouteLanding } from "@/components/PublicRouteLanding";

export const metadata: Metadata = {
  title: "Protect PDF | CalmPDF",
  description: "Add password protection to a PDF document in your browser.",
  alternates: { canonical: "/protect-pdf" },
  openGraph: { title: "Protect PDF", description: "Add password protection to a PDF document in your browser.", url: "/protect-pdf" },
};

export default function Page() {
  return <PublicRouteLanding title="Protect PDF" description="Add password protection to a PDF document in your browser." />;
}
