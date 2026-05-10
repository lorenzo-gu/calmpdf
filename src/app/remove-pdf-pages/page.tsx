import type { Metadata } from "next";
import { PublicRouteLanding } from "@/components/PublicRouteLanding";

export const metadata: Metadata = {
  title: "Remove PDF Pages | CalmPDF",
  description: "Delete selected pages from a PDF and download the updated copy.",
  alternates: { canonical: "/remove-pdf-pages" },
  robots: { index: false, follow: true },
  openGraph: { title: "Remove PDF Pages", description: "Delete selected pages from a PDF and download the updated copy.", url: "/remove-pdf-pages" },
};

export default function Page() {
  return (
    <PublicRouteLanding
      title="Remove PDF Pages"
      description="Delete selected pages from a PDF and download the updated copy."
      availability="comingSoon"
      related={[{ href: "/extract-pdf-pages", label: "Extract PDF Pages" }, { href: "/reorder-pdf-pages", label: "Reorder PDF Pages" }]}
    />
  );
}
