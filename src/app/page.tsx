import Link from "next/link";
import { ShieldCheck, Zap, Wifi, FileText } from "lucide-react";
import { TOOLS } from "@/content/tools";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-content px-4 md:px-6 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          PDF tools. <span className="text-sage-500">No drama.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-sage-700 max-w-2xl mx-auto">
          Compress, merge, and split PDF files in your browser.
          Your files never leave your device — no upload, no signup, no limits.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {TOOLS.map((t) => (
            <Link key={t.slug} href={`/${t.slug}`} className="btn-primary">
              {t.h1}
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm text-sage-700">
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4" /> 100% private</span>
          <span className="inline-flex items-center gap-1.5"><Wifi className="h-4 w-4" /> No upload</span>
          <span className="inline-flex items-center gap-1.5"><Zap className="h-4 w-4" /> Free forever</span>
        </div>
      </section>

      <section className="mx-auto max-w-content px-4 md:px-6 py-12" id="tools">
        <h2 className="text-2xl md:text-3xl font-semibold">Every tool you need</h2>
        <p className="mt-2 text-sage-700 max-w-2xl">
          A small, focused set of PDF tools that just work. More coming soon.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {TOOLS.map((t) => (
            <Link key={t.slug} href={`/${t.slug}`} className="card no-underline hover:border-sage-300 transition-colors">
              <FileText className="h-5 w-5 text-sage-500" />
              <h3 className="mt-3 font-semibold text-sage-900">{t.h1}</h3>
              <p className="mt-1 text-sm text-sage-700">{t.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-content px-4 md:px-6 py-16">
        <div className="card">
          <h2 className="text-xl font-semibold">Why {SITE.name}?</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3 text-sm text-sage-700">
            <div>
              <ShieldCheck className="h-5 w-5 text-sage-500" />
              <h3 className="mt-2 font-semibold text-sage-900">Your files stay yours</h3>
              <p className="mt-1">Every tool runs in your browser. Your PDF is never uploaded to our servers — we can&apos;t see it, and neither can anyone else.</p>
            </div>
            <div>
              <Zap className="h-5 w-5 text-sage-500" />
              <h3 className="mt-2 font-semibold text-sage-900">Fast, no queue</h3>
              <p className="mt-1">No round trips to a server. Processing happens right on your laptop, so it&apos;s usually done before the page finishes scrolling.</p>
            </div>
            <div>
              <Wifi className="h-5 w-5 text-sage-500" />
              <h3 className="mt-2 font-semibold text-sage-900">Works offline</h3>
              <p className="mt-1">After the page loads once, everything keeps working — even without an internet connection.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
