import Link from "next/link";
import type { ProgrammaticPage } from "@/content/programmatic-pages";

export function ProgrammaticLandingPage({ page }: { page: ProgrammaticPage }) {
  return (
    <main className="mx-auto max-w-3xl px-4 md:px-6 py-12">
      <nav aria-label="Breadcrumb" className="text-sm text-sage-700 mb-6">
        <Link href="/" className="no-underline hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/compress-pdf" className="no-underline hover:underline">Compress PDF</Link>
        <span className="mx-2">/</span>
        <span className="text-sage-900">{page.h1}</span>
      </nav>

      <h1 className="text-3xl font-semibold tracking-tight mb-4">{page.h1}</h1>
      <p className="text-sage-700 mb-4">{page.introCopy}</p>
      <p className="text-sage-700 mb-4"><strong>Best for:</strong> {page.targetIntent}</p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Common use cases</h2>
      <ul className="list-disc list-inside space-y-2 text-sage-700 mb-6">
        {page.useCases.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">How to get the best result</h2>
      <ol className="list-decimal list-inside space-y-2 text-sage-700 mb-6">
        {page.practicalSteps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>

      <p className="text-sage-700 mb-6"><strong>Important:</strong> {page.limitationNote}</p>

      <div className="rounded-2xl border border-sage-100 bg-sage-50 p-6 my-8">
        <p className="font-semibold text-sage-900 mb-2">Ready to compress?</p>
        <p className="text-sm text-sage-700 mb-4">CalmPDF runs in your browser so your files stay on your device.</p>
        <Link href={page.ctaHref} className="btn-primary no-underline">{page.ctaLabel}</Link>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Frequently asked questions</h2>
      {page.faqs.map((faq) => (
        <section key={faq.q} className="mb-5">
          <h3 className="text-lg font-medium mb-2">{faq.q}</h3>
          <p className="text-sage-700">{faq.a}</p>
        </section>
      ))}

      <h2 className="text-2xl font-semibold mt-8 mb-3">Related resources</h2>
      <ul className="list-disc list-inside space-y-2 text-sage-700">
        {page.relatedLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="underline">{link.label}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
