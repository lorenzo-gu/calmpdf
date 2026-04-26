import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Compress PDF to 1MB – Free Online Tool | CalmPDF",
  description:
    "Need to compress a PDF to under 1MB? CalmPDF reduces file size in seconds, right in your browser. No upload limits, no sign-up required.",
  alternates: { canonical: `${SITE.url}/compress-pdf-to-1mb` },
  openGraph: {
    title: "Compress PDF to 1MB – Free Online Tool | CalmPDF",
    description:
      "Reduce your PDF to under 1MB instantly. Free, private, browser-based compression.",
    url: `${SITE.url}/compress-pdf-to-1mb`,
    siteName: SITE.name,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Compress a PDF to 1MB",
  description:
    "Step-by-step guide to reducing a PDF file to under 1 megabyte using CalmPDF.",
  step: [
    {
      "@type": "HowToStep",
      name: "Open CalmPDF Compress",
      text: "Go to CalmPDF and open the Compress PDF tool.",
    },
    {
      "@type": "HowToStep",
      name: "Upload your PDF",
      text: "Drag and drop your PDF file or click to browse and select it.",
    },
    {
      "@type": "HowToStep",
      name: "Choose a compression level",
      text: "Select Balanced for most files. Switch to Smaller file if your PDF is still above 1MB after the first pass.",
    },
    {
      "@type": "HowToStep",
      name: "Download the result",
      text: "Click Download to save the compressed PDF. Check the file size and repeat if needed.",
    },
  ],
};

export default function CompressPdfTo1MbPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: SITE.url,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Compress PDF",
                item: `${SITE.url}/compress-pdf`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Compress to 1MB",
                item: `${SITE.url}/compress-pdf-to-1mb`,
              },
            ],
          }),
        }}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-3xl px-4 md:px-6 pt-6 pb-2 text-sm text-sage-700"
      >
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/compress-pdf" className="hover:underline">
          Compress PDF
        </Link>{" "}
        / <span className="text-sage-900 font-medium">Compress to 1MB</span>
      </nav>

      {/* Hero */}
      <header className="mx-auto max-w-3xl px-4 md:px-6 pt-4 pb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-sage-900 mb-3">
          Compress PDF to 1MB
        </h1>
        <p className="text-lg text-sage-700 leading-relaxed">
          A 1&nbsp;MB ceiling is one of the most common upload restrictions
          you'll encounter — job application portals, insurance claim forms,
          university admissions, and government services all impose it. This
          guide explains what influences PDF file size and shows you the fastest
          way to hit the target.
        </p>
      </header>

      <main className="mx-auto max-w-3xl px-4 md:px-6 pb-12 leading-relaxed text-sage-900 space-y-10">
        {/* When 1MB is the limit */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            When does the 1&nbsp;MB limit come up?
          </h2>
          <p className="mb-4">
            The 1&nbsp;MB threshold shows up in a wide range of contexts:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sage-800">
            <li>
              <strong>Job applications</strong> — many applicant tracking
              systems (ATS) cap resume and cover letter uploads at 1&nbsp;MB.
            </li>
            <li>
              <strong>University admissions</strong> — transcript and supporting
              document portals often restrict uploads to 1&nbsp;MB per file.
            </li>
            <li>
              <strong>Government and legal forms</strong> — tax authorities,
              courts, and permit offices commonly enforce strict upload limits.
            </li>
            <li>
              <strong>Insurance claims</strong> — claim submission portals may
              reject documents that exceed 1&nbsp;MB, especially scanned forms.
            </li>
            <li>
              <strong>Email attachments</strong> — corporate mail servers
              sometimes block attachments over 1&nbsp;MB even when total email
              size is higher.
            </li>
          </ul>
        </section>

        {/* What makes PDFs large */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            What makes a PDF larger than 1&nbsp;MB?
          </h2>
          <p className="mb-4">
            Understanding the culprits helps you set realistic expectations:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sage-800">
            <li>
              <strong>Embedded images</strong> — high-resolution photos or
              uncompressed scans are the single biggest contributor to file
              size. A single full-page scan at 300&nbsp;DPI can be 1–3&nbsp;MB
              by itself.
            </li>
            <li>
              <strong>Scanned documents</strong> — scans saved as image-only
              PDFs carry heavy bitmap data. They compress better than photos
              but still add up quickly across multiple pages.
            </li>
            <li>
              <strong>Embedded fonts</strong> — decorative or non-standard
              fonts are bundled into the PDF; if multiple typefaces are
              embedded, they add hundreds of kilobytes.
            </li>
            <li>
              <strong>Unoptimised export settings</strong> — design tools like
              Illustrator and InDesign often export "press quality" PDFs by
              default, which target printing rather than digital sharing.
            </li>
            <li>
              <strong>Attachments and metadata</strong> — PDFs can contain
              embedded files, revision history, and XMP metadata, all of which
              bloat file size invisibly.
            </li>
          </ul>
        </section>

        {/* Which PDFs compress well */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Which PDFs compress to under 1&nbsp;MB easily?
          </h2>
          <p className="mb-4">
            Most text-heavy documents compress very well. A 10-page report with
            minimal graphics will typically shrink from 2–5&nbsp;MB to well
            under 500&nbsp;KB. Presentation slides with embedded charts and
            vector graphics also compress reliably — expect a 60–80% size
            reduction.
          </p>
          <p className="mb-4">
            Image-heavy PDFs are more challenging. A 5-page brochure with
            full-bleed photography may only compress to around 1.5–2&nbsp;MB
            with moderate settings. For these files, try the{" "}
            <strong>Smaller file</strong> compression mode, which applies more
            aggressive image down-sampling. If the file still exceeds 1&nbsp;MB,
            splitting it into sections before compressing is the most effective
            workaround.
          </p>
        </section>

        {/* Step-by-step */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            How to compress a PDF to 1&nbsp;MB with CalmPDF
          </h2>
          <ol className="list-decimal pl-6 space-y-4 text-sage-800">
            <li>
              <strong>Go to the Compress PDF tool</strong> — open{" "}
              <Link
                href="/compress-pdf"
                className="text-sage-600 underline hover:text-sage-800"
              >
                CalmPDF Compress
              </Link>
              . No account or software installation needed.
            </li>
            <li>
              <strong>Upload your file</strong> — drag and drop your PDF onto
              the drop zone, or click to browse. Files stay in your browser and
              are never sent to a server.
            </li>
            <li>
              <strong>Select "Balanced" compression</strong> — this mode
              reduces image resolution to a web-friendly 150&nbsp;DPI and
              removes redundant data. It's the right starting point for nearly
              every document.
            </li>
            <li>
              <strong>Download and check the file size</strong> — after
              compression finishes, download the file and check its size in
              your file manager (right-click → Get Info on Mac; right-click →
              Properties on Windows).
            </li>
            <li>
              <strong>Re-compress with "Smaller file" if needed</strong> — if
              the result is still over 1&nbsp;MB, re-upload and switch to the
              Smaller file mode, which pushes image quality lower to achieve a
              more aggressive reduction.
            </li>
          </ol>
        </section>

        {/* CTA card */}
        <div className="rounded-2xl border border-sage-100 bg-sage-50 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="font-semibold text-sage-900 text-lg mb-1">
              Ready to compress your PDF?
            </p>
            <p className="text-sage-700 text-sm">
              Free, private, browser-based. No sign-up required.
            </p>
          </div>
          <Link
            href="/compress-pdf"
            className="btn-primary no-underline whitespace-nowrap"
          >
            Compress PDF free →
          </Link>
        </div>

        {/* Tips when it's still too large */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            What if the file is still over 1&nbsp;MB?
          </h2>
          <p className="mb-4">
            If compression alone can't get your PDF below 1&nbsp;MB, these
            strategies can help:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sage-800">
            <li>
              <strong>Split the document</strong> — use{" "}
              <Link
                href="/split-pdf"
                className="text-sage-600 underline hover:text-sage-800"
              >
                CalmPDF Split
              </Link>{" "}
              to divide the PDF into smaller sections, then compress each part
              individually. This is especially useful for scanned multi-page
              documents.
            </li>
            <li>
              <strong>Remove unnecessary pages</strong> — blank pages, cover
              pages, or appendices that aren't required for the submission can
              be deleted before compression.
            </li>
            <li>
              <strong>Re-export from the source</strong> — if you have access
              to the original file (Word document, InDesign file, etc.),
              re-export it using "web" or "screen" quality settings rather than
              "print" quality. This often produces a smaller baseline file
              before any additional compression.
            </li>
            <li>
              <strong>Reduce the page range</strong> — if you only need certain
              pages for the submission, extract just those pages using the{" "}
              <Link
                href="/split-pdf"
                className="text-sage-600 underline hover:text-sage-800"
              >
                Split tool
              </Link>{" "}
              before compressing.
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-sage-900 mb-2">
                Will compressing to 1&nbsp;MB make the text unreadable?
              </h3>
              <p className="text-sage-800">
                No. Text in PDFs is stored as vector data and isn't affected by
                compression — it will remain perfectly crisp at any zoom level.
                Only embedded images are down-sampled. For a typical
                text-heavy document like a CV or report, the visual difference
                between compressed and uncompressed versions is undetectable.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-sage-900 mb-2">
                Is it safe to compress sensitive documents online?
              </h3>
              <p className="text-sage-800">
                CalmPDF processes everything locally inside your browser using
                WebAssembly. Your file never leaves your device and is never
                uploaded to any server, making it safe to use with confidential
                or sensitive documents.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-sage-900 mb-2">
                How many times can I compress the same PDF?
              </h3>
              <p className="text-sage-800">
                You can compress as many times as you like — there's no usage
                limit. That said, re-compressing an already-compressed PDF
                yields diminishing returns. If the first pass doesn't reach
                your target, switching to a more aggressive compression mode
                on a fresh copy of the original file will get you further than
                compressing the compressed version.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-sage-900 mb-2">
                Does CalmPDF work on mobile?
              </h3>
              <p className="text-sage-800">
                Yes. CalmPDF is a web app that works in any modern browser,
                including Safari and Chrome on iOS and Android. You can
                compress PDFs directly from your phone or tablet.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-sage-900 mb-2">
                What's the largest PDF I can compress?
              </h3>
              <p className="text-sage-800">
                Since all processing happens in your browser, the practical
                limit depends on your device's available memory. Most files
                up to 50–100&nbsp;MB process without issue on a modern laptop
                or desktop. Very large files on older or memory-constrained
                devices may be slower.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
