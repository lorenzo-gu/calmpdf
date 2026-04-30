import type { Metadata } from "next";
import { PublicRouteLanding } from "@/components/PublicRouteLanding";

export const metadata: Metadata = {
  title: "Reorder PDF Pages | CalmPDF",
  description: "Change page order in a PDF using a fast in-browser workflow.",
  alternates: { canonical: "/reorder-pdf-pages" },
  openGraph: { title: "Reorder PDF Pages", description: "Change page order in a PDF using a fast in-browser workflow.", url: "/reorder-pdf-pages" },
};

export default function Page() {
  return <PublicRouteLanding title="Reorder PDF Pages" description="Change page order in a PDF using a fast in-browser workflow." />;
}
