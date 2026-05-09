import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShieldCheck, Zap, Wifi } from "lucide-react";
import type { Tool } from "@/content/tools";
import { TOOLS } from "@/content/tools";
import { SoftwareAppJsonLd, HowToJsonLd, FaqJsonLd, BreadcrumbJsonLd } from "./JsonLd";
import { FooterAd, HeaderAd, InArticleAd } from "@/components/AdUnits";

export function ToolShell({
  tool,
  children,
}: {
  tool: Tool;
  children: React.ReactNode;
}) {
  const related = TOOLS.filter((t) => t.slug !== tool.slug);
  const relatedGuides = tool.relatedGuides ?? [];

  return (
    <>
      <SoftwareAppJsonLd tool={tool} />
      <HowToJsonLd tool={tool} />
      <FaqJsonLd tool={tool} />
      <BreadcrumbJsonLd tool={tool} />

      <Breadcrumbs
        crumbs={[
          { label: "Home", href: "/" },
          { label: "All PDF tools", href: "/tools" },
          { label: tool.h1 },
        ]}
      />

      <section className="mx-auto max-w-content px-4 md:px-6 pt-4 pb-10">
        <h1 className="text-3xl md:text-4xl font-semibold">{tool.h1}</h1>
        <p className="mt-3 text-lg text-calm-text-secondary max-w-2xl">{tool.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-2 text-xs text-calm-text-secondary">
          <span className="trust-chip">
            <ShieldCheck className="h-3.5 w-3.5" /> 100% in your browser
          </span>
          <span className="trust-chip">
            <Wifi className="h-3.5 w-3.5" /> No upload required
          </span>
          <span className="trust-chip">
            <Zap className="h-3.5 w-3.5" /> Free, no signup
          </span>
        </div>

        <HeaderAd />

        <div className="mt-8">{children}</div>

        <InArticleAd />
      </section>

      <FooterAd />

      <section className="mx-auto max-w-content px-4 md:px-6 py-10 grid gap-8 md:grid-cols-2">
        <div className="card">
          <h2 className="text-xl font-semibold">Upload & controls</h2>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-calm-text-secondary">
            {tool.uploadInstructions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold">How it works</h2>
          <ol className="mt-4 space-y-4">
            {tool.steps.map((s, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-calm-accent text-white text-xs font-semibold">
                  {i + 1}
                </span>
                <span className="text-calm-text-secondary">{s}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold">When to use this tool</h2>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-calm-text-secondary">
            {tool.useCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold">Limitations</h2>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-calm-text-secondary">
            {tool.limitations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold">Privacy</h2>
          <ul className="mt-4 space-y-3 text-calm-text-secondary">
            <li><strong className="text-calm-text-primary">Private by design.</strong> Your PDF is processed inside your browser. It is never uploaded to a server.</li>
            <li><strong className="text-calm-text-primary">Fast.</strong> No round trip to the cloud, so it works as fast as your laptop can run JavaScript.</li>
            <li><strong className="text-calm-text-primary">Free.</strong> All tools are free to use with no signup and no daily limits.</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold">Troubleshooting</h2>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-calm-text-secondary">
            {tool.troubleshooting.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {tool.faqs.length > 0 ? (
        <section className="mx-auto max-w-content px-4 md:px-6 py-10">
          <h2 className="text-2xl font-semibold mb-6">Frequently asked questions</h2>
          <div className="accordion">
            {tool.faqs.map((f, i) => (
              <details key={i} className="group accordion-item">
                <summary className="cursor-pointer list-none flex justify-between items-center font-medium text-calm-text-primary">
                  {f.q}
                  <span className="ml-4 text-calm-text-secondary group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-calm-text-secondary">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      {relatedGuides.length > 0 && (
        <section className="mx-auto max-w-content px-4 md:px-6 py-10">
          <h2 className="text-2xl font-semibold mb-6">Related guides</h2>
          <ul className="list-disc pl-6 space-y-2 text-calm-text-primary">
            {relatedGuides.map((guide) => (
              <li key={guide.href}>
                <Link href={guide.href} className="underline underline-offset-2 hover:text-calm-text-primary">
                  {guide.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mx-auto max-w-content px-4 md:px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Related PDF tools</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {related.map((t) => (
            <Link key={t.slug} href={`/${t.slug}`} className="tool-card">
              <h3 className="font-semibold text-calm-text-primary">{t.h1}</h3>
              <p className="mt-2 text-sm text-calm-text-secondary">{t.tagline}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
