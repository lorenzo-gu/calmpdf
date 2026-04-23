import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${SITE.name} builds simple, private PDF tools that run entirely in your browser.`,
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <article className="mx-auto max-w-2xl px-4 md:px-6 py-16 prose prose-sage">
      <h1 className="text-3xl font-semibold">About {SITE.name}</h1>
      <p className="mt-4 text-sage-700">
        {SITE.name} is a small set of PDF tools that work the way they should: simply, quickly,
        and without sending your files anywhere. Every tool runs inside your browser using
        JavaScript, so your PDFs never reach our servers — because we don&apos;t have any PDF servers.
      </p>
      <p className="mt-4 text-sage-700">
        The project exists because most free PDF websites ask you to upload private documents
        to a third party, often behind an opaque privacy policy. {SITE.name} is a calmer option.
      </p>
      <p className="mt-4 text-sage-700">
        All tools are free and unlimited. The site is kept running by a single, unobtrusive
        ad per page.
      </p>
    </article>
  );
}
