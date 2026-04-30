import type { Metadata } from "next";
import { PublicRouteLanding } from "@/components/PublicRouteLanding";

export const metadata: Metadata = {
  title: "Contact | CalmPDF",
  description: "Contact CalmPDF for support, questions, or feedback.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact", description: "Contact CalmPDF for support, questions, or feedback.", url: "/contact" },
};

export default function Page() {
  return <PublicRouteLanding title="Contact" description="Contact CalmPDF for support, questions, or feedback." />;
}
