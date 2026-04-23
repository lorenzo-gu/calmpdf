import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${SITE.name} handles your files: we don't. Everything runs in your browser.`,
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <article className="mx-auto max-w-2xl px-4 md:px-6 py-16">
      <h1 className="text-3xl font-semibold">Privacy</h1>
      <p className="mt-4 text-sage-700">
        <strong>Your files never leave your browser.</strong> Every {SITE.name} tool runs as
        JavaScript on your device. We do not see, store, or transmit the contents of your PDFs.
      </p>
      <h2 className="mt-8 text-xl font-semibold">What we do collect</h2>
      <p className="mt-2 text-sage-700">
        We use privacy-respecting analytics to count anonymous page views so we know which
        tools to improve. We do not set advertising cookies that identify you personally.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Ads</h2>
      <p className="mt-2 text-sage-700">
        The site is supported by display ads. Ads may use cookies governed by the advertising
        network&apos;s policy. You can opt out of personalized ads in your browser or via the
        ad provider&apos;s controls.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Contact</h2>
      <p className="mt-2 text-sage-700">
        Questions? Email <a href="mailto:hello@calmpdf.com">hello@calmpdf.com</a>.
      </p>
    </article>
  );
}
