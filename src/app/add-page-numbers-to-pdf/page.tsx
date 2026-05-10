import type { Metadata } from "next";
import { PublicRouteLanding } from "@/components/PublicRouteLanding";

export const metadata: Metadata = {
  title: "Add Page Numbers to PDF | CalmPDF",
  description: "Insert page numbers into your PDF with private in-browser processing.",
  alternates: { canonical: "/add-page-numbers-to-pdf" },
  robots: { index: false, follow: true },
  openGraph: { title: "Add Page Numbers to PDF", description: "Insert page numbers into your PDF with private in-browser processing.", url: "/add-page-numbers-to-pdf" },
};

export default function Page() {
  return (
    <PublicRouteLanding
      title="Add Page Numbers to PDF"
      description="Insert page numbers into your PDF with private in-browser processing."
      availability="comingSoon"
      related={[{ href: "/edit-pdf", label: "Edit PDF" }, { href: "/reorder-pdf-pages", label: "Reorder PDF Pages" }]}
    />
  );
}
