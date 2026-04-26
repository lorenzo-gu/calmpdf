import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Compress PDF for Email | CalmPDF",
  description:
    "Email attachment too large? See the size limits for Gmail, Outlook, and others, and compress your PDF in your browser to fit — free and private.",
  keywords: [
    "compress pdf for email",
    "pdf too large to email",
    "make pdf smaller for email",
    "email attachment size limit",
    "shrink pdf for email",
  ],
  alternates: { canonical: `${SITE.url}/compress-pdf-for-email` },
  openGraph: {
    title: "Compress PDF for Email",
    description:
      "Make your PDF small enough to email — free, private, and entirely in your browser.",
    url: `${SITE.url}/compress-pdf-for-email`,
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
        <span className="text-sage-900">For email</span>
      </nav>

      <h1 className="text-3xl font-semibold tracking-tight mb-4">
        Compress PDF for Email
      </h1>
      <p className="text-sage-700 mb-6">
        If you've ever tried to send a PDF and gotten an &ldquo;attachment too large&rdquo; error,
        you know how frustrating it is. Most email providers cap attachments somewhere between
        20MB and 25MB, and many corporate inboxes are stricter. Here's exactly how big your
        PDF needs to be, and how to compress it in your browser without uploading anything.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Email attachment size limits</h2>
      <p className="text-sage-700 mb-4">
        Different email providers enforce different limits. The number that matters is the
        smaller of your sender&apos;s limit and your recipient&apos;s limit — if either side
        rejects the message, it doesn&apos;t get through.
      </p>
      <ul className="list-disc list-inside space-y-2 text-sage-700 mb-6">
        <li><strong>Gmail:</strong> 25MB total per message (above this, Google offers a Drive link instead).</li>
        <li><strong>Outlook / Outlook.com:</strong> 20MB for free accounts, 33MB for Microsoft 365.</li>
        <li><strong>Yahoo Mail:</strong> 25MB per message.</li>
        <li><strong>iCloud Mail:</strong> 20MB per message (Mail Drop kicks in above that).</li>
        <li><strong>Corporate Exchange:</strong> often 10MB or less, set by IT policy.</li>
      </ul>
      <p className="text-sage-700 mb-6">
        A safe target for almost any inbox is <strong>under 10MB</strong>. If you need to be
        sure it&apos;ll go through to a corporate address, aim for <strong>under 5MB</strong>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">How to compress a PDF for email with CalmPDF</h2>
      <ol className="list-decimal list-inside space-y-3 text-sage-700 mb-8">
        <li>Open <strong>calmpdf.com/compress-pdf</strong> — no signup, no install.</li>
        <li>Drag your PDF into the upload area. The file is loaded into your browser; nothing is sent to a server.</li>
        <li>Choose a compression level. <strong>Smaller file</strong> works best for email since you&apos;re optimizing for size, not print quality.</li>
        <li>Click <strong>Compress</strong> and wait a few seconds.</li>
        <li>Download the compressed PDF and attach it to your email as normal.</li>
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

      <h2 className="text-2xl font-semibold mt-8 mb-3">If your PDF is still too large</h2>
      <p className="text-sage-700 mb-4">
        Sometimes a single round of compression isn&apos;t enough — usually because the PDF
        contains high-resolution photos or scanned pages. A few options:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sage-700 mb-6">
        <li><strong>Split it and send in two emails.</strong> Use <Link href="/split-pdf" className="underline">split PDF</Link> to break the file into smaller pieces.</li>
        <li><strong>Re-export from the source document.</strong> If you made the PDF from Word, Pages, or PowerPoint, export it again with a &ldquo;Smallest size&rdquo; or &ldquo;Web optimized&rdquo; preset before compressing.</li>
        <li><strong>Send a link instead.</strong> Upload the file to a cloud service you already use (Drive, iCloud, Dropbox) and email the share link.</li>
        <li><strong>Aim for a specific target.</strong> If you need a precise size, see the targeted guides for <Link href="/compress-pdf-to-1mb" className="underline">1MB</Link>, <Link href="/compress-pdf-to-500kb" className="underline">500KB</Link>, or <Link href="/compress-pdf-to-100kb" className="underline">100KB</Link>.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Why CalmPDF</h2>
      <p className="text-sage-700 mb-6">
        CalmPDF runs entirely in your browser — your PDF never leaves your device. That matters
        for email attachments in particular, because the documents people most often need to
        email (contracts, tax forms, medical records, signed agreements) are exactly the ones
        you don&apos;t want sitting on someone else&apos;s server. There are no daily limits and
        no account is required.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Frequently asked questions</h2>
      <h3 className="text-lg font-medium mt-5 mb-2">What size should a PDF be for email?</h3>
      <p className="text-sage-700 mb-4">
        Aim for under 10MB if you don&apos;t know the recipient&apos;s email provider, and under
        5MB for corporate inboxes. Most providers cap individual messages between 20MB and 25MB,
        but inbox quotas and intermediate spam filters can reject messages well below that limit.
      </p>
      <h3 className="text-lg font-medium mt-5 mb-2">Will compression change how the PDF looks?</h3>
      <p className="text-sage-700 mb-4">
        Text stays sharp at any compression level — PDF text is vector-based. Images may look
        slightly softer at &ldquo;Smaller file&rdquo; settings, but they remain perfectly
        legible for typical documents like contracts, invoices, and reports.
      </p>
      <h3 className="text-lg font-medium mt-5 mb-2">Is it really private?</h3>
      <p className="text-sage-700 mb-4">
        Yes. CalmPDF compresses your PDF in your browser using JavaScript. The file is never
        uploaded to a server. You can confirm this by disconnecting from the internet after
        the page loads — the tool will still work.
      </p>
      <h3 className="text-lg font-medium mt-5 mb-2">What about Gmail&apos;s 25MB limit?</h3>
      <p className="text-sage-700 mb-4">
        Gmail counts the entire message — body, headers, and all attachments combined — toward
        the 25MB cap. Compressing your PDF below 20MB gives you a comfortable margin. If you
        exceed the cap, Gmail offers to share the file via Google Drive automatically.
      </p>
    </main>
  );
}
