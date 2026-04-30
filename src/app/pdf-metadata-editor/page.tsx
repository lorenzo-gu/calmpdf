import type { Metadata } from "next";
import { PublicRouteLanding } from "@/components/PublicRouteLanding";

export const metadata: Metadata = {
  title: "PDF Metadata Editor | CalmPDF",
  description: "Edit PDF metadata fields directly in your browser.",
  alternates: { canonical: "/pdf-metadata-editor" },
  openGraph: { title: "PDF Metadata Editor", description: "Edit PDF metadata fields directly in your browser.", url: "/pdf-metadata-editor" },
};

export default function Page() {
  return <PublicRouteLanding title="PDF Metadata Editor" description="Edit PDF metadata fields directly in your browser." />;
}
