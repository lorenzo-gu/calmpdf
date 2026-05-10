import type { Metadata } from "next";
import { PublicRouteLanding } from "@/components/PublicRouteLanding";

export const metadata: Metadata = {
  title: "JPG to PDF | CalmPDF",
  description: "Turn JPG or JPEG images into a PDF document in seconds.",
  alternates: { canonical: "/jpg-to-pdf" },
  robots: { index: false, follow: true },
  openGraph: { title: "JPG to PDF", description: "Turn JPG or JPEG images into a PDF document in seconds.", url: "/jpg-to-pdf" },
};

export default function Page() {
  return (
    <PublicRouteLanding
      title="JPG to PDF"
      description="Turn JPG or JPEG images into a PDF document in seconds."
      availability="comingSoon"
      related={[{ href: "/images-to-pdf", label: "Images to PDF" }, { href: "/png-to-pdf", label: "PNG to PDF" }]}
    />
  );
}
