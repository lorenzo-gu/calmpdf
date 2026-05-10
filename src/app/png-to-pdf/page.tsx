import type { Metadata } from "next";
import { PublicRouteLanding } from "@/components/PublicRouteLanding";

export const metadata: Metadata = {
  title: "PNG to PDF | CalmPDF",
  description: "Convert PNG images into a PDF without uploading your files.",
  alternates: { canonical: "/png-to-pdf" },
  robots: { index: false, follow: true },
  openGraph: { title: "PNG to PDF", description: "Convert PNG images into a PDF without uploading your files.", url: "/png-to-pdf" },
};

export default function Page() {
  return (
    <PublicRouteLanding
      title="PNG to PDF"
      description="Convert PNG images into a PDF without uploading your files."
      availability="comingSoon"
      related={[{ href: "/images-to-pdf", label: "Images to PDF" }, { href: "/jpg-to-pdf", label: "JPG to PDF" }]}
    />
  );
}
