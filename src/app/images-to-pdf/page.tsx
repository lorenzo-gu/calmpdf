import type { Metadata } from "next";
import { PublicRouteLanding } from "@/components/PublicRouteLanding";

export const metadata: Metadata = {
  title: "Images to PDF | CalmPDF",
  description: "Combine image files into a single PDF, privately in your browser.",
  alternates: { canonical: "/images-to-pdf" },
  openGraph: { title: "Images to PDF", description: "Combine image files into a single PDF, privately in your browser.", url: "/images-to-pdf" },
};

export default function Page() {
  return <PublicRouteLanding title="Images to PDF" description="Combine image files into a single PDF, privately in your browser." />;
}
