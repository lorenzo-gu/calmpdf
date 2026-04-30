import type { Metadata } from "next";
import { PublicRouteLanding } from "@/components/PublicRouteLanding";

export const metadata: Metadata = {
  title: "JPG to PDF | CalmPDF",
  description: "Turn JPG or JPEG images into a PDF document in seconds.",
  alternates: { canonical: "/jpg-to-pdf" },
  openGraph: { title: "JPG to PDF", description: "Turn JPG or JPEG images into a PDF document in seconds.", url: "/jpg-to-pdf" },
};

export default function Page() {
  return <PublicRouteLanding title="JPG to PDF" description="Turn JPG or JPEG images into a PDF document in seconds." />;
}
