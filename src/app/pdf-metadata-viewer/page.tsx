import type { Metadata } from "next";
import { PublicRouteLanding } from "@/components/PublicRouteLanding";

export const metadata: Metadata = {
  title: "PDF Metadata Viewer | CalmPDF",
  description: "View PDF metadata fields such as title, author, and creation date.",
  alternates: { canonical: "/pdf-metadata-viewer" },
  robots: { index: false, follow: true },
  openGraph: { title: "PDF Metadata Viewer", description: "View PDF metadata fields such as title, author, and creation date.", url: "/pdf-metadata-viewer" },
};

export default function Page() {
  return (
    <PublicRouteLanding
      title="PDF Metadata Viewer"
      description="View PDF metadata fields such as title, author, and creation date."
      availability="comingSoon"
      related={[{ href: "/pdf-metadata-editor", label: "PDF Metadata Editor" }, { href: "/edit-pdf", label: "Edit PDF" }]}
    />
  );
}
