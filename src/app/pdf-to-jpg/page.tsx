import type { Metadata } from "next";
import { PublicRouteLanding } from "@/components/PublicRouteLanding";

export const metadata: Metadata = {
  title: "PDF to JPG | CalmPDF",
  description: "Export PDF pages as JPG images with a simple browser workflow.",
  alternates: { canonical: "/pdf-to-jpg" },
  openGraph: { title: "PDF to JPG", description: "Export PDF pages as JPG images with a simple browser workflow.", url: "/pdf-to-jpg" },
};

export default function Page() {
  return <PublicRouteLanding title="PDF to JPG" description="Export PDF pages as JPG images with a simple browser workflow." />;
}
