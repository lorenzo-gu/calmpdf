import type { Metadata } from "next";
import { PublicRouteLanding } from "@/components/PublicRouteLanding";

export const metadata: Metadata = {
  title: "PDF to Images | CalmPDF",
  description: "Convert PDF pages into image files directly in your browser.",
  alternates: { canonical: "/pdf-to-images" },
  openGraph: { title: "PDF to Images", description: "Convert PDF pages into image files directly in your browser.", url: "/pdf-to-images" },
};

export default function Page() {
  return <PublicRouteLanding title="PDF to Images" description="Convert PDF pages into image files directly in your browser." />;
}
