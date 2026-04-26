import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Compress PDF to 500KB | CalmPDF",
  description:
    "Need a PDF under 500KB? Learn which documents compress easily to this target, what to do when they don't, and how to compress in your browser for free.",
  keywords: ["compress pdf to 500kb", "reduce pdf to 500kb", "pdf under 500kb"],
  alternates: { canonical: `${SITE.url}/compress-pdf-to-500kb` },
  openGraph: {
    title: "Compress PDF to 500KB",
    description: "Need a PDF under 500KB? Here's how to get there — free and private in your browser.",
    url: `${SITE.url}/compress-pdf-to-500kb`,
    siteName: SITE.name,
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 md:px-6 py-12">
      <nav aria-label="Breadcrumb" className="text-sm text-sage-700 mb-6">
        <Link href="/" className="no-underline hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/compress-pdf" className="no-underline hover:underline">Compress PDF</Link>
        <span className="mx-2">/</span>
        <span className="text-sage-900">500KB</span>
      </nav>

      <h1 className="text-3xl font-semibold tracking-tight mb-4">
        Compress PDF to 500KB
      </h1>
      <p className="text-sage-700 mb-6">
        A 500KB limit is common for email attachments, online portals, and document upload
        systems. It's a reasonable target — most everyday PDFs can reach it without visible
        quality loss. Here's how to get there.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">When is a 500KB limit common?</h2>
      <ul className="list-disc list-inside space-y-2 text-sage-700 mb-6">
        <li>Employee onboarding portals requiring scanned ID documents</li>
        <li>Insurance claim submission forms</li>
        <li>School and university application systems</li>
        <li>Healthcare patient portal document uploads</li>
        <li>Bank or financial institution document submission portals</li>
        <li>Real estate transaction platforms</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">What PDFs compress easily to under 500KB?</h2>
      <p className="text-sage-700 mb-4">
        The following document types typically compress well below 500KB:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sage-700 mb-4">
        <li><strong>Text documents</strong> (contracts, letters, reports, resumes) — usually under 200KB already.</li>
        <li><strong>Short scanned documents</strong> (1–3 pages) — typically compress to 100–400KB.</li>
        <li><strong>Forms with minimal graphics</strong> — usually under 300KB after compression.</li>
        <li><strong>Presentation PDFs</strong> from PowerPoint with moderate graphics — often 200–500KB compressed.</li>
      </ul>
      <p className="text-sage-700 mb-6">
        Documents that may resist reaching 500KB include multi-page scans of photo IDs,
        high-resolution architectural drawings, and brochures with full-bleed photography.
        For these, maximum compression will get you close — and often under — but with some
        visible image softening.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">How to compress a PDF to 500KB with CalmPDF</h2>
      <ol className="list-decimal list-inside space-y-3 text-sage-700 mb-8">
        <li>Go to <strong>calmpdf.com/compress-pdf</strong> — no account needed.</li>
        <li>Drop your PDF into the upload area. It processes locally — nothing leaves your device.</li>
        <li>Start with the <strong>Balanced</strong> compression level.</li>
        <li>Click <strong>Compress</strong> and check the output file size.</li>
        <li>If still over 500KB, go back and choose <strong>Smaller file</strong> for heavier compression.</li>
        <li>Download and verify the output looks acceptable.</li>
      </ol>

      <div className="rounded-2xl border border-sage-100 bg-sage-50 p-6 my-8">
        <p className="font-semibold text-sage-900 mb-2">Try it free — no signup, no upload</p>
        <p className="text-sm text-sage-700 mb-4">
          CalmPDF compresses in your browser. Your files stay on your device.
        </p>
        <Link href="/compress-pdf" className="btn-primary no-underline">
          Compress PDF free
        </Link>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Tips for stubborn large PDFs</h2>
      <ul className="list-disc list-inside space-y-2 text-sage-700 mb-6">
        <li><strong>Split first, then compress</strong> — if you only need a few pages from a long document, use CalmPDF's split tool to extract those pages, then compress the smaller file.</li>
        <li><strong>Re-export from source</strong> — if you have the original Word or PowerPoint file, export it fresh with "Optimize for web/screen" settings before compressing.</li>
        <li><strong>Flatten transparencies</strong> — PDFs with transparency effects are larger; exporting with flattened transparency from the source app reduces size.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Frequently asked questions</h2>

      <h3 className="text-lg font-medium mt-5 mb-2">How much can I compress a 5MB PDF?</h3>
      <p className="text-sage-700 mb-4">
        A 5MB PDF that's primarily scanned images can often compress to 500KB–1.5MB depending
        on content. A 5MB PDF from a graphics-heavy presentation may compress to 800KB–2MB.
        The result depends heavily on the resolution and type of imagery.
      </p>

      <h3 className="text-lg font-medium mt-5 mb-2">Will 500KB compression blur my document?</h3>
      <p className="text-sage-700 mb-4">
        At balanced compression settings, most documents look fine at normal reading sizes.
        Try the output at 100% zoom — if images look acceptable for your use case, you're done.
        Text is always sharp regardless of image compression level.
      </p>

      <h3 className="text-lg font-medium mt-5 mb-2">Does CalmPDF have a file size limit?</h3>
      <p className="text-sage-700 mb-4">
        CalmPDF has no enforced size limit. The practical limit is your device's available
        memory — most modern laptops handle files up to 200MB without issue.
      </p>
    </main>
  );
}
