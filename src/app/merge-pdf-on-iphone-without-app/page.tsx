import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

const title = "Merge PDF on iPhone Without App | CalmPDF";
const description =
  "Merge PDF on iPhone without app installs. Follow a Safari-first workflow to combine scans and PDFs in minutes with CalmPDF's mobile PDF merger.";

const faqs = [
  {
    q: "Can I combine PDF on iPhone without downloading an app?",
    a: "Yes. Open CalmPDF in Safari, add your files, drag to reorder, and merge. The workflow is browser-based, so you can skip App Store installs.",
  },
  {
    q: "How do I merge scans on iPhone?",
    a: "Save scans to Files first (from Notes or another scanner), then upload those PDFs in Safari and merge them in the order you need.",
  },
  {
    q: "Does this work as a Safari PDF tool?",
    a: "Yes. CalmPDF is designed to work in Safari on mobile, including touch-first page ordering and one-tap download.",
  },
  {
    q: "Is a mobile PDF merger private?",
    a: "CalmPDF is browser-based and processes files locally in your browser session, so you can avoid app sync workflows for everyday document tasks.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "merge pdf on iphone without app",
    "combine pdf iphone",
    "merge scans on iphone",
    "safari pdf tools",
    "mobile pdf merger",
  ],
  alternates: { canonical: `${SITE.url}/merge-pdf-on-iphone-without-app` },
  openGraph: {
    title,
    description,
    url: `${SITE.url}/merge-pdf-on-iphone-without-app`,
    siteName: SITE.name,
  },
};

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <h1 className="text-3xl font-semibold tracking-tight text-sage-900">Merge PDF on iPhone Without App</h1>
      <p className="mt-4 text-base leading-7 text-sage-700">
        Need to <strong>merge PDF on iPhone without app</strong> downloads? Use CalmPDF in Safari to combine files in a few taps.
        It is built for mobile workflows, especially when you are working from Files, Notes scans, and quick document uploads.
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-sage-900">Safari workflow: combine PDF on iPhone in 4 steps</h2>
        <ol className="mt-4 space-y-4 text-sage-700">
          <li><strong>1) Open Safari and go to Merge PDF.</strong> Tap <Link href="/merge-pdf" className="underline">CalmPDF Merge PDF</Link>.</li>
          <li><strong>2) Add files from the Files app.</strong> Include exported scans, forms, or downloaded PDFs.</li>
          <li><strong>3) Drag to reorder pages/files.</strong> Put cover pages and supporting docs in the right sequence.</li>
          <li><strong>4) Merge and download.</strong> Save the merged PDF back to Files, then share by Mail, Messages, or portal upload.</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-sage-900">Step-by-step screenshot placeholders (mobile)</h2>
        <div className="mt-4 grid gap-3">
          {[
            "[Screenshot 1 placeholder] Safari page with Merge PDF tool open",
            "[Screenshot 2 placeholder] iPhone Files picker selecting multiple PDFs",
            "[Screenshot 3 placeholder] Touch reordering before merge",
            "[Screenshot 4 placeholder] Final merged PDF downloaded in Files",
          ].map((item) => (
            <div key={item} className="rounded-xl border border-dashed border-sage-300 bg-sage-50 p-4 text-sm text-sage-700">{item}</div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-sage-900">Browser-based vs app-based PDF merging on iPhone</h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-sage-200">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-sage-50 text-sage-900">
              <tr>
                <th className="px-4 py-3 font-semibold">Criteria</th>
                <th className="px-4 py-3 font-semibold">CalmPDF in Safari</th>
                <th className="px-4 py-3 font-semibold">Typical app workflow</th>
              </tr>
            </thead>
            <tbody className="text-sage-700">
              <tr className="border-t border-sage-100"><td className="px-4 py-3">Setup time</td><td className="px-4 py-3">No install, open and start</td><td className="px-4 py-3">Install + permissions + onboarding</td></tr>
              <tr className="border-t border-sage-100"><td className="px-4 py-3">Storage impact</td><td className="px-4 py-3">No extra app footprint</td><td className="px-4 py-3">Additional app storage</td></tr>
              <tr className="border-t border-sage-100"><td className="px-4 py-3">Workflow fit</td><td className="px-4 py-3">Native with Safari + Files</td><td className="px-4 py-3">Often requires import/export between apps</td></tr>
              <tr className="border-t border-sage-100"><td className="px-4 py-3">Best use case</td><td className="px-4 py-3">Quick one-off document merging</td><td className="px-4 py-3">Power users who want persistent app features</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-sage-900">Related iPhone PDF workflows</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sage-700">
          <li><Link href="/how-to/combine-pdf-files" className="underline">How to combine PDF files</Link></li>
          <li><Link href="/jpg-to-pdf" className="underline">Convert scans/images to PDF before merging</Link></li>
          <li><Link href="/split-pdf" className="underline">Split merged files if you need separate packets</Link></li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-sage-900">FAQ</h2>
        <div className="mt-4 space-y-5">
          {faqs.map((faq) => (
            <article key={faq.q}>
              <h3 className="text-lg font-medium text-sage-900">{faq.q}</h3>
              <p className="mt-1 text-sage-700">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
