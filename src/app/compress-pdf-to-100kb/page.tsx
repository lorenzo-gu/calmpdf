import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Compress PDF to 100KB | CalmPDF",
  description:
    "Need a PDF under 100KB? Learn when 100KB is required, what affects final file size, and how to compress your PDF as small as possible in your browser.",
  keywords: ["compress pdf to 100kb", "reduce pdf to 100kb", "pdf under 100kb"],
  alternates: { canonical: `${SITE.url}/compress-pdf-to-100kb` },
  openGraph: {
    title: "Compress PDF to 100KB",
    description: "Need a PDF under 100KB? Here's how to get there — free and private in your browser.",
    url: `${SITE.url}/compress-pdf-to-100kb`,
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
        <span className="text-sage-900">100KB</span>
      </nav>

      <h1 className="text-3xl font-semibold tracking-tight mb-4">
        Compress PDF to 100KB
      </h1>
      <p className="text-sage-700 mb-6">
        Getting a PDF below 100KB is a strict requirement in many situations — government
        portals, job application systems, and university admissions forms often enforce
        exact file size limits. Here's how to get there, and what to expect.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">When is a 100KB limit enforced?</h2>
      <p className="text-sage-700 mb-4">Common scenarios requiring PDFs under 100KB:</p>
      <ul className="list-disc list-inside space-y-2 text-sage-700 mb-6">
        <li>Government application portals (visa applications, tax documents)</li>
        <li>University and college admissions systems</li>
        <li>Job application platforms with strict file size limits</li>
        <li>HR and onboarding portals</li>
        <li>Online form submissions that limit individual attachments</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">What determines how small a PDF can get?</h2>
      <p className="text-sage-700 mb-4">
        The main factor is the content. Text-only PDFs (resumes, cover letters, simple forms)
        can often be compressed to under 100KB easily. PDFs with photos, graphics, or scanned
        images are harder — each image carries pixel data that can't be eliminated without
        visual degradation.
      </p>
      <p className="text-sage-700 mb-6">
        A one-page text resume is typically 50–150KB before compression and 20–50KB after.
        A one-page scanned document might start at 500KB–2MB and compress to 80–200KB depending
        on the image quality setting.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">How to compress a PDF to 100KB with CalmPDF</h2>
      <ol className="list-decimal list-inside space-y-3 text-sage-700 mb-8">
        <li>Go to <strong>calmpdf.com/compress-pdf</strong> — no signup required.</li>
        <li>Drop your PDF into the upload area. It loads locally; nothing is sent to a server.</li>
        <li>Choose <strong>Smaller file</strong> for maximum compression.</li>
        <li>Click <strong>Compress</strong> and check the output file size.</li>
        <li>If it's still over 100KB, the PDF contains high-resolution imagery that resists compression — see tips below.</li>
      </ol>

      <div className="rounded-2xl border border-sage-100 bg-sage-50 p-6 my-8">
        <p className="font-semibold text-sage-900 mb-2">Try it now — free and private</p>
        <p className="text-sm text-sage-700 mb-4">
          Your PDF stays in your browser. Nothing is uploaded to a server.
        </p>
        <Link href="/compress-pdf" className="btn-primary no-underline">
          Compress PDF free
        </Link>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3">If compression alone isn't enough</h2>
      <p className="text-sage-700 mb-4">
        When a PDF remains above 100KB after maximum compression, the options are:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sage-700 mb-6">
        <li><strong>Reduce page count</strong> — if you don't need all pages, split the PDF and submit only the required pages.</li>
        <li><strong>Re-export from source</strong> — if you created the PDF from Word, PowerPoint, or another app, re-export with "Smallest file size" or "Web optimized" settings before compressing.</li>
        <li><strong>Convert scans to text-based PDFs</strong> — if the PDF is a scanned image, OCR software can convert it to a text-based PDF, which is far smaller.</li>
        <li><strong>Reduce image dimensions</strong> — in the source app, scale photos down before exporting to PDF.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Frequently asked questions</h2>

      <h3 className="text-lg font-medium mt-5 mb-2">Can any PDF be compressed to 100KB?</h3>
      <p className="text-sage-700 mb-4">
        Not always. A PDF that's already 2MB and filled with high-resolution photos may only
        compress to 300–500KB at minimum acceptable quality. At lower quality settings, it
        might reach 100KB but look visibly degraded. There's a physical lower bound to how
        small an image-heavy file can get.
      </p>

      <h3 className="text-lg font-medium mt-5 mb-2">Will text quality be affected?</h3>
      <p className="text-sage-700 mb-4">
        No. PDF text is vector-based and stays perfectly sharp regardless of compression level.
        Only images are affected.
      </p>

      <h3 className="text-lg font-medium mt-5 mb-2">Is CalmPDF free to use?</h3>
      <p className="text-sage-700 mb-4">
        Yes. CalmPDF is free with no daily limits and no account required. Compression runs
        in your browser, so your files stay private.
      </p>
    </main>
  );
}
