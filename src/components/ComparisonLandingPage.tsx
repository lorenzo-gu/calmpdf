import Link from "next/link";
import type { ComparisonPage } from "@/content/comparison-pages";

export function ComparisonLandingPage({ page }: { page: ComparisonPage }) {
  return (
    <main className="mx-auto max-w-4xl px-4 md:px-6 py-12">
      <nav aria-label="Breadcrumb" className="text-sm text-sage-700 mb-6">
        <Link href="/" className="no-underline hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-sage-900">{page.h1}</span>
      </nav>
      <h1 className="text-3xl font-semibold tracking-tight mb-4">{page.h1}</h1>
      <p className="text-sage-700 mb-4">{page.intro}</p>
      <p className="text-sage-700 mb-8"><strong>Bottom line:</strong> {page.summary}</p>

      <h2 className="text-2xl font-semibold mb-3">Feature comparison</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b border-sage-200 py-2">Criteria</th>
              <th className="border-b border-sage-200 py-2">CalmPDF</th>
              <th className="border-b border-sage-200 py-2">Typical alternatives</th>
            </tr>
          </thead>
          <tbody>
            {page.comparisonRows.map((row) => (
              <tr key={row.criterion}>
                <td className="border-b border-sage-100 py-2 pr-4">{row.criterion}</td>
                <td className="border-b border-sage-100 py-2 pr-4">{row.calmpdf}</td>
                <td className="border-b border-sage-100 py-2">{row.others}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-3">Start with CalmPDF tools</h2>
      <ul className="list-disc list-inside space-y-2 text-sage-700 mb-8">
        {page.toolLinks.map((tool) => (
          <li key={tool.href}><Link href={tool.href} className="underline">{tool.label}</Link></li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-3">FAQ</h2>
      {page.faqs.map((faq) => (
        <section key={faq.q} className="mb-5">
          <h3 className="text-lg font-medium mb-2">{faq.q}</h3>
          <p className="text-sage-700">{faq.a}</p>
        </section>
      ))}
    </main>
  );
}
