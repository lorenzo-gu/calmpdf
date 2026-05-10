import type { Metadata } from "next";
import { PublicRouteLanding } from "@/components/PublicRouteLanding";

export const metadata: Metadata = {
  title: "Unlock PDF | CalmPDF",
  description: "Remove PDF password protection when you have the correct password.",
  alternates: { canonical: "/unlock-pdf" },
  robots: { index: false, follow: true },
  openGraph: { title: "Unlock PDF", description: "Remove PDF password protection when you have the correct password.", url: "/unlock-pdf" },
};

export default function Page() {
  return (
    <PublicRouteLanding
      title="Unlock PDF"
      description="Remove PDF password protection when you have the correct password."
      availability="comingSoon"
      related={[{ href: "/protect-pdf", label: "Protect PDF" }, { href: "/edit-pdf", label: "Edit PDF" }]}
    />
  );
}
