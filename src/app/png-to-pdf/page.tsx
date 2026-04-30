import type { Metadata } from "next";
import { PublicRouteLanding } from "@/components/PublicRouteLanding";

export const metadata: Metadata = {
  title: "PNG to PDF | CalmPDF",
  description: "Convert PNG images into a PDF without uploading your files.",
  alternates: { canonical: "/png-to-pdf" },
  openGraph: { title: "PNG to PDF", description: "Convert PNG images into a PDF without uploading your files.", url: "/png-to-pdf" },
};

export default function Page() {
  return <PublicRouteLanding title="PNG to PDF" description="Convert PNG images into a PDF without uploading your files." />;
}
