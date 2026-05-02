import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Compress PDF to 200KB | CalmPDF",
  description:
    "Need a PDF under 200KB? Learn when 200KB limits apply, what affects final file size, and how to compress a PDF privately in your browser.",
  keywords: [
    "compress pdf to 200kb",
    "reduce pdf to 200kb",
    "pdf under 200kb",
    "pdf size 200kb",
  ],
  alternates: { canonical: `${SITE.url}/compress-pdf-to-200kb` },
  openGraph: {
    title: "Compress PDF to 200KB",
    description:
      "Need a PDF under 200KB? Here's how to get there — free and private in your browser.",
    url: `${SITE.url}/compress-pdf-to-200kb`,
    siteName: SITE.name,
  },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to compress a PDF to 200KB",
  description:
    "Step-by-step guide to reducing a PDF below 200KB using a free browser-based tool.",
  totalTime: "PT2M",
  step: [
    {
      "@type": "HowToStep",
      name: "Open CalmPDF Compress",
      text: "Visit calmpdf.com/compress-pdf in any modern browser. No signup or download is required.",
    },
    {
      "@type": "HowToStep",
      name: "Drop your PDF in",
      text: "Drag your PDF onto the upload area. The file is processed locally and never leaves your device.",
    },
    {
      "@type": "HowToStep",
      name: "Choose smaller file",
      text: "Run the current lossless compressor, then verify whether you reached 200KB.",
    },
    {
      "@type": "HowToStep",
      name: "Compress and check size",
      text: "Click Compress, then verify the output file is below 200KB. Re-export with smaller images if more reduction is needed.",
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Compress PDF",
      item: `${SITE.url}/compress-pdf`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "200KB",
      item: `${SITE.url}/compress-pdf-to-200kb`,
    },
  ],
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 md:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-sage-700 mb-6">
        <Link href="/" className="no-underline hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/compress-pdf" className="no-underline hover:underline">
          Compress PDF
        </Link>
        <span className="mx-2">/</span>
        <span className="text-sage-900">200KB</span>
      </nav>

      <h1 className="text-3xl font-semibold tracking-tight mb-4">
        Compress PDF to 200KB
      </h1>
      <p className="text-sage-700 mb-6">
        A 200KB ceiling is a common requirement on banking portals, government
        forms, and onboarding systems that need to keep uploads lean. Here's
        what affects whether you can hit that target — and a step-by-step way
        to get there in your browser, with nothing uploaded to a server.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        When is a 200KB limit enforced?
      </h2>
      <p className="text-sage-700 mb-4">200KB caps show up regularly in:</p>
      <ul className="list-disc list-inside space-y-2 text-sage-700 mb-6">
        <li>
          Banking and KYC portals where customers upload ID and address proofs
        </li>
        <li>
          Indian government forms (UPSC, SSC, IBPS, and most state-level exams)
        </li>
        <li>Scholarship and grant applications</li>
        <li>HR onboarding portals that limit each individual attachment</li>
        <li>Healthcare provider intake and patient forms</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Is 200KB realistic for your PDF?
      </h2>
      <p className="text-sage-700 mb-4">
        That depends on what's inside the file. Text-heavy documents — resumes,
        cover letters, contracts — usually compress under 200KB without any
        visible change. Single-page scans of an ID card or a signed form
        typically land between 100KB and 400KB after compression, so 200KB is
        achievable with only modest quality loss.
      </p>
      <p className="text-sage-700 mb-6">
        Multi-page scanned documents or PDFs with embedded photos are harder.
        A four-page scanned PDF starting at 5MB often won't drop below 300–500KB
        without lowering image quality to a level where text becomes soft. In
        those cases, the trick is reducing pages or re-scanning at a lower DPI
        rather than fighting the compressor.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        How to compress a PDF to 200KB with CalmPDF
      </h2>
      <ol className="list-decimal list-inside space-y-3 text-sage-700 mb-8">
        <li>
          Open <strong>calmpdf.com/compress-pdf</strong> in any browser — no
          signup, no install.
        </li>
        <li>
          Drop your PDF into the upload area. It loads locally; nothing is sent
          to a server.
        </li>
        <li>
          Use <strong>Compress</strong> and review the output size.
        </li>
        <li>
          Click <strong>Compress</strong> and download the result.
        </li>
        <li>
          If the file is still over 200KB, re-export from the source app at a
          lower image quality, then compress again.
        </li>
      </ol>

      <div className="rounded-2xl border border-sage-100 bg-sage-50 p-6 my-8">
        <p className="font-semibold text-sage-900 mb-2">
          Try it now — free and private
        </p>
        <p className="text-sm text-sage-700 mb-4">
          Your PDF stays in your browser. Nothing is uploaded to a server.
        </p>
        <Link href="/compress-pdf" className="btn-primary no-underline">
          Compress PDF free
        </Link>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        If 200KB still isn't enough
      </h2>
      <p className="text-sage-700 mb-4">
        When standard compression leaves you above the limit, try these in
        order:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sage-700 mb-6">
        <li>
          <strong>Re-scan at 150 DPI</strong> — many phone scanner apps default
          to 300 DPI, which doubles file size with no benefit for plain
          documents.
        </li>
        <li>
          <strong>Re-export the source</strong> — if the PDF came from Word or
          Pages, re-save with &quot;Smallest file size&quot; or &quot;Web
          optimized&quot; before compressing.
        </li>
        <li>
          <strong>Drop pages you don't need</strong> — submit only the required
          pages with{" "}
          <Link href="/split-pdf" className="underline">
            CalmPDF Split
          </Link>
          .
        </li>
        <li>
          <strong>Convert scanned text to real text</strong> — a true text PDF
          is dramatically smaller than the same content stored as page images.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Related size targets</h2>
      <ul className="list-disc list-inside space-y-2 text-sage-700 mb-6">
        <li>
          <Link href="/compress-pdf-to-100kb" className="underline">
            Compress PDF to 100KB
          </Link>{" "}
          — for stricter government and admissions limits.
        </li>
        <li>
          <Link href="/compress-pdf-to-500kb" className="underline">
            Compress PDF to 500KB
          </Link>{" "}
          — a common cap for image-heavy documents.
        </li>
        <li>
          <Link href="/compress-pdf-to-1mb" className="underline">
            Compress PDF to 1MB
          </Link>{" "}
          — for portfolios and longer reports.
        </li>
        <li>
          <Link href="/compress-pdf-for-email" className="underline">
            Compress PDF for email
          </Link>{" "}
          — Gmail and Outlook attachment limits.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Frequently asked questions
      </h2>

      <h3 className="text-lg font-medium mt-5 mb-2">
        Why do so many forms ask for PDFs under 200KB?
      </h3>
      <p className="text-sage-700 mb-4">
        It's a balance between accepting a usable image and keeping storage and
        bandwidth costs down across millions of submissions. 200KB lets a
        single-page scanned ID stay readable while keeping each upload small
        enough to process quickly.
      </p>

      <h3 className="text-lg font-medium mt-5 mb-2">
        Will compression damage my signature or seal?
      </h3>
      <p className="text-sage-700 mb-4">
        With lossless compression, signatures and seals stay readable. At
        maximum compression, fine lines may soften slightly. If readability is
        critical, compress, then open the file and zoom in to confirm before
        submitting.
      </p>

      <h3 className="text-lg font-medium mt-5 mb-2">Is CalmPDF really free?</h3>
      <p className="text-sage-700 mb-4">
        Yes. CalmPDF is free with no daily limits and no account needed.
        Compression runs entirely in your browser, so your PDFs never reach a
        server.
      </p>

      <h3 className="text-lg font-medium mt-5 mb-2">
        Can I use this on my phone?
      </h3>
      <p className="text-sage-700 mb-4">
        Yes. CalmPDF works in mobile Safari, Chrome, and Firefox. Most
        single-page documents under a few megabytes compress quickly even on
        modest hardware.
      </p>
    
      <section className="rounded-2xl border border-sage-100 p-6 mt-10">
        <h2 className="text-xl font-semibold mb-3">Related compression guides</h2>
        <ul className="list-disc list-inside space-y-2 text-sage-700">
          <li><Link href="/compress-pdf" className="underline">Compress PDF tool</Link></li>
          <li><Link href="/how-to/reduce-pdf-file-size" className="underline">How to Reduce PDF File Size</Link></li>
          <li><Link href="/how-to/compress-pdf-without-losing-quality" className="underline">How to Compress a PDF Without Losing Quality</Link></li>
          <li><Link href="/compress-pdf-for-email" className="underline">Compress PDF for Email</Link></li>
        </ul>
      </section>
</main>
  );
}
