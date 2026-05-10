import type { Metadata } from "next";
import { PublicRouteLanding } from "@/components/PublicRouteLanding";

export const metadata: Metadata = {
  title: "PDF to Images | CalmPDF",
  description: "Convert PDF pages into image files directly in your browser.",
  alternates: { canonical: "/pdf-to-images" },
  robots: { index: false, follow: true },
  openGraph: { title: "PDF to Images", description: "Convert PDF pages into image files directly in your browser.", url: "/pdf-to-images" },
};

export default function Page() {
  return (
    <PublicRouteLanding
      title="PDF to Images"
      description="Convert PDF pages into image files directly in your browser."
      availability="comingSoon"
      related={[{ href: "/pdf-to-jpg", label: "PDF to JPG" }, { href: "/pdf-to-png", label: "PDF to PNG" }]}
    />
  );
}
