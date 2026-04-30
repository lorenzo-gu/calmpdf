import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Compress PDF to 2MB | CalmPDF",
  description:
    "Need a PDF under 2MB? Learn where 2MB upload limits show up, what affects file size, and how to compress a PDF privately in your browser.",
  keywords: [
    "compress pdf to 2mb",
    "reduce pdf to 2mb",
    "pdf under 2mb",
    "pdf size 2mb",
    "compress pdf below 2mb",
  ],
  alternates: { canonical: `${SITE.url}/compress-pdf-to-2mb` },
  openGraph: {
    title: "Compress PDF to 2MB",
    description:
      "Need a PDF under 2MB? Here's how to get there — free and private in your browser.",
    url: `${SITE.url}/compress-pdf-to-2mb`,
    siteName: SITE.name,
  },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to compress a PDF to 2MB",
  description:
    "Step-by-step guide to reducing a PDF below 2MB using a free browser-based tool.",
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
      name: "Choose a compression preset",
      text: "Pick the Balanced preset to start — it usually clears 2MB while preserving readability. Switch to Smaller file if you need more reduction.",
    },
    {
      "@type": "HowToStep",
      name: "Compress and check size",
      text: "Click Compress, then verify the output is below 2MB. Re-export at lower image quality if more reduction is needed.",
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
      name: "2MB",
      item: `${SITE.url}/compress-pdf-to-2mb`,
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
        <span className="text-sage-900">2MB</span>
      </nav>

      <h1 className="text-3xl font-semibold tracking-tight mb-4">
        Compress PDF to 2MB
      </h1>
      <p className="text-sage-700 mb-6">
        A 2MB upload cap is one of the most common limits on the web — job
        application portals, school submission systems, and many contact and
        intake forms all settle on it. Here's why 2MB shows up so often, what
        affects whether your file fits, and how to get there in your browser
        without uploading anything to a server.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Where does the 2MB limit come from?
      </h2>
      <p className="text-sage-700 mb-4">
        2MB tends to appear in places that need to accept a usable document
        without straining storage or bandwidth:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sage-700 mb-6">
        <li>
          Job application sites for resumes and cover letters (Workday, Taleo,
          and many company-hosted ATSes)
        </li>
        <li>University and grad school application portals</li>
        <li>
          Government and tax filing forms in several countries, including some
          IRS and HMRC submissions
        </li>
        <li>Insurance claim portals and customer support forms</li>
        <li>WordPress and CMS uploaders with default media size limits</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Is 2MB realistic for your PDF?
      </h2>
      <p className="text-sage-700 mb-4">
        For most documents, yes — comfortably. A typical resume, contract, or
        text-heavy report compresses well under 2MB without any visible change
        to the content. The cases where 2MB gets tight are predictable:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sage-700 mb-6">
        <li>
          <strong>Scanned documents.</strong> Multi-page scans at 300 DPI can
          start at 10MB or more. Compression helps, but you may need to drop to
          150 DPI or fewer pages.
        </li>
        <li>
          <strong>Image-heavy portfolios.</strong> Design samples, photos, and
          screenshots make up most of the file size. Lowering image quality is
          the lever that matters.
        </li>
        <li>
          <strong>PDFs exported with embedded fonts and graphics.</strong>{" "}
          Re-exporting from the source app with a smaller-file preset often
          beats compressing the bloated output.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        How to compress a PDF to 2MB with CalmPDF
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
          Try <strong>Balanced</strong> first — it clears 2MB for most files
          while keeping text and images crisp.
        </li>
        <li>
          If the result is still over 2MB, switch to <strong>Smaller file</strong>{" "}
          and compress again.
        </li>
        <li>
          Download the compressed PDF and confirm the new size before
          submitting.
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
        If 2MB still isn't enough
      </h2>
      <p className="text-sage-700 mb-4">
        When standard compression leaves you over the limit, work through these
        in order — they tend to deliver the biggest reductions for the least
        quality loss:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sage-700 mb-6">
        <li>
          <strong>Re-export the source.</strong> If your PDF came from Word,
          Pages, or Google Docs, re-save with &quot;Smallest file size&quot; or
          &quot;Web optimized&quot; before compressing. This often beats any
          downstream tool.
        </li>
        <li>
          <strong>Re-scan at lower DPI.</strong> Phone scanner apps default to
          300 DPI; 150–200 DPI is plenty for plain documents and roughly halves
          the file size.
        </li>
        <li>
          <strong>Drop pages you don't need.</strong> Submit only what's
          required — use{" "}
          <Link href="/split-pdf" className="underline">
            CalmPDF Split
          </Link>{" "}
          to extract specific pages.
        </li>
        <li>
          <strong>Convert images to text.</strong> A real text PDF is a fraction
          of the size of the same content stored as page images.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Related size targets</h2>
      <ul className="list-disc list-inside space-y-2 text-sage-700 mb-6">
        <li>
          <Link href="/compress-pdf-to-1mb" className="underline">
            Compress PDF to 1MB
          </Link>{" "}
          — when the form's cap is tighter.
        </li>
        <li>
          <Link href="/compress-pdf-to-500kb" className="underline">
            Compress PDF to 500KB
          </Link>{" "}
          — for image-heavy documents that still need to stay small.
        </li>
        <li>
          <Link href="/compress-pdf-to-200kb" className="underline">
            Compress PDF to 200KB
          </Link>{" "}
          — banking, KYC, and exam application limits.
        </li>
        <li>
          <Link href="/compress-pdf-for-email" className="underline">
            Compress PDF for email
          </Link>{" "}
          — Gmail, Outlook, and other attachment caps.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Frequently asked questions
      </h2>

      <h3 className="text-lg font-medium mt-5 mb-2">
        Why is 2MB such a common upload limit?
      </h3>
      <p className="text-sage-700 mb-4">
        It's a sweet spot. 2MB is large enough for a multi-page resume or a
        moderately scanned document while staying small enough that a server
        accepting thousands of submissions a day doesn't run into storage or
        processing pressure. Many CMS platforms and form builders use 2MB as
        their default cap.
      </p>

      <h3 className="text-lg font-medium mt-5 mb-2">
        Will compressing to 2MB hurt the quality of my resume?
      </h3>
      <p className="text-sage-700 mb-4">
        For a normal text-based resume, no — text-only compression is lossless
        and the visible result is identical. If your resume has a photo or a
        graphic-heavy header, the Balanced preset preserves those well. Reach
        for Smaller file only if you need the extra reduction.
      </p>

      <h3 className="text-lg font-medium mt-5 mb-2">Is CalmPDF really free?</h3>
      <p className="text-sage-700 mb-4">
        Yes. CalmPDF is free with no daily limits and no account needed.
        Compression runs entirely in your browser, so your PDFs never reach a
        server.
      </p>

      <h3 className="text-lg font-medium mt-5 mb-2">
        Can I compress a PDF to 2MB on my phone?
      </h3>
      <p className="text-sage-700 mb-4">
        Yes. CalmPDF works in mobile Safari, Chrome, and Firefox. Most documents
        a few megabytes in size compress quickly even on modest hardware, and
        nothing is uploaded — the file stays on your device.
      </p>
    </main>
  );
}
