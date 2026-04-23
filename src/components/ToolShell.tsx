import Link from "next/link";
import { ShieldCheck, Zap, Wifi } from "lucide-react";
import type { Tool } from "@/content/tools";
import { TOOLS } from "@/content/tools";
import { SoftwareAppJsonLd, HowToJsonLd, FaqJsonLd, BreadcrumbJsonLd } from "./JsonLd";

export function ToolShell({
  tool,
  children,
}: {
  tool: Tool;
  children: React.ReactNode;
}) {
  const related = TOOLS.filter((t) => t.slug !== tool.slug);

  return (
    <>
      <SoftwareAppJsonLd tool={tool} />
      <HowToJsonLd tool={tool} />
      <FaqJsonLd tool={tool} />
      <BreadcrumbJsonLd tool={tool} />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-content px-4 md:px-6 pt-6 text-sm text-sage-700">
        <Link href="/" className="no-underline hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-sage-900">{tool.h1}</span>
      </nav>

      <section className="mx-auto max-w-content px-4 md:px-6 pt-4 pb-10">
        <h1 className="text-3xl md:text-4xl font-semibold">{tool.h1}</h1>
        <p className="mt-3 text-lg text-sage-700 max-w-2xl">{tool.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-2 text-xs text-sage-700">
          <span className="inline-flex items-center gap-1 rounded-full bg-sage-50 border border-sage-100 px-3 py-1">
            <ShieldCheck className="h-3.5 w-3.5" /> 100% in your browser
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-sage-50 border border-sage-100 px-3 py-1">
            <Wifi className="h-3.5 w-3.5" /> No upload required
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-sage-50 border border-sage-100 px-3 py-1">
            <Zap className="h-3.5 w-3.5" /> Free, no signup
          </span>
        </div>

        <div className="mt-8">{children}</div>
      </section>

      <section className="mx-auto max-w-content px-4 md:px-6 py-10 grid gap-8 md:grid-cols-2">
        <div className="card">
          <h2 className="text-xl font-semibold">How it works</h2>
          <ol className="mt-4 space-y-4">
            {tool.steps.map((s, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-700 text-white text-xs font-semibold">
                  {i + 1}
                </span>
                <span className="text-sage-700">{s}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold">Why CalmPDF</h2>
          <ul className="mt-4 space-y-3 text-sage-700">
            <li><strong className="text-sage-900">Private by design.</strong> Your PDF is processed inside your browser. It is never uploaded to a server.</li>
            <li><strong className="text-sage-900">Fast.</strong> No round trip to the cloud, so it works as fast as your laptop can run JavaScript.</li>
            <li><strong className="text-sage-900">Free.</strong> All tools are free to use with no signup and no daily limits.</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-content px-4 md:px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Frequently asked questions</h2>
        <div className="divide-y divide-sand-200 rounded-2xl border border-sand-200 bg-white">
          {tool.faqs.map((f, i) => (
            <details key={i} className="group p-5 open:bg-sand-50/50">
              <summary className="cursor-pointer list-none flex justify-between items-center font-medium text-sage-900">
                {f.q}
                <span className="ml-4 text-sage-500 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-sage-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-content px-4 md:px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Related PDF tools</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {related.map((t) => (
            <Link key={t.slug} href={`/${t.slug}`} className="card no-underline hover:border-sage-300 transition-colors">
              <h3 className="font-semibold text-sage-900">{t.h1}</h3>
              <p className="mt-2 text-sm text-sage-700">{t.tagline}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
