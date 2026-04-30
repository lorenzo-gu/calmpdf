import type { Metadata } from "next";
import { PublicRouteLanding } from "@/components/PublicRouteLanding";

export const metadata: Metadata = {
  title: "PDF Metadata Viewer | CalmPDF",
  description: "View PDF metadata fields such as title, author, and creation date.",
  alternates: { canonical: "/pdf-metadata-viewer" },
  openGraph: { title: "PDF Metadata Viewer", description: "View PDF metadata fields such as title, author, and creation date.", url: "/pdf-metadata-viewer" },
};

export default function Page() {
  return <PublicRouteLanding title="PDF Metadata Viewer" description="View PDF metadata fields such as title, author, and creation date." />;
}
