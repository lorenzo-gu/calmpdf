import type { Metadata } from "next";
import { PublicRouteLanding } from "@/components/PublicRouteLanding";

export const metadata: Metadata = {
  title: "PDF to PNG | CalmPDF",
  description: "Convert PDF pages into PNG images while keeping files on your device.",
  alternates: { canonical: "/pdf-to-png" },
  openGraph: { title: "PDF to PNG", description: "Convert PDF pages into PNG images while keeping files on your device.", url: "/pdf-to-png" },
};

export default function Page() {
  return <PublicRouteLanding title="PDF to PNG" description="Convert PDF pages into PNG images while keeping files on your device." />;
}
