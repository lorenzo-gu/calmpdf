import type { Metadata } from "next";
import { PublicRouteLanding } from "@/components/PublicRouteLanding";

export const metadata: Metadata = {
  title: "PDF to PNG | CalmPDF",
  description: "Convert PDF pages into PNG images while keeping files on your device.",
  alternates: { canonical: "/pdf-to-png" },
  robots: { index: false, follow: true },
  openGraph: { title: "PDF to PNG", description: "Convert PDF pages into PNG images while keeping files on your device.", url: "/pdf-to-png" },
};

export default function Page() {
  return (
    <PublicRouteLanding
      title="PDF to PNG"
      description="Convert PDF pages into PNG images while keeping files on your device."
      availability="comingSoon"
      related={[{ href: "/pdf-to-jpg", label: "PDF to JPG" }, { href: "/how-to", label: "How-to Guides" }]}
      comingSoonDescription="We’re building a private, browser-only PDF to PNG converter. In the meantime, try PDF to JPG or check the guide below."
    />
  );
}
