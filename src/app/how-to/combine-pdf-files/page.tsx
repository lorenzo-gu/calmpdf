import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/content/posts";
import { ArticleShell } from "@/components/ArticleShell";

const post = BLOG_POSTS.find((p) => p.slug === "combine-pdf-files")!;

export const metadata: Metadata = {
  title: "How to Combine PDF Files | CalmPDF",
  description:
    "A complete guide to combining PDF files for any use case — contracts, reports, invoices — using a free, private browser-based tool.",
  keywords: ["combine pdf files", "combine pdfs", "join pdf files", "merge pdf into one"],
  alternates: { canonical: `${SITE.url}/how-to/combine-pdf-files` },
  openGraph: {
    title: "How to Combine PDF Files",
    description: "Combine PDFs for any use case — contracts, reports, invoices — free and private in your browser.",
    url: `${SITE.url}/how-to/combine-pdf-files`,
    siteName: SITE.name,
  },
};

export default function Page() {
  return (
    <ArticleShell post={post}>
      <h1 className="text-3xl font-semibold tracking-tight mb-4">
        How to Combine PDF Files
      </h1>
      <p className="text-sage-700 mb-6">
        Combining PDFs means joining two or more separate files into a single document.
        It's one of the most common PDF tasks — and one of the simplest. Here's how to do
        it quickly, privately, and for free.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">When would you combine PDFs?</h2>
      <p className="text-sage-700 mb-4">Common scenarios where combining PDFs saves time:</p>
      <ul className="list-disc list-inside space-y-2 text-sage-700 mb-6">
        <li><strong>Combining a contract with its annexes</strong> into one document before signing.</li>
        <li><strong>Assembling a multi-part report</strong> from chapters produced by different people.</li>
        <li><strong>Bundling invoices</strong> for a single expense report or reimbursement claim.</li>
        <li><strong>Creating a portfolio</strong> from separate work samples or case studies.</li>
        <li><strong>Joining scanned pages</strong> when a scanner produces one file per page.</li>
        <li><strong>Merging application documents</strong> — cover letter, resume, references — into one submission file.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">How to combine PDF files with CalmPDF</h2>

      <h3 className="text-xl font-medium mt-6 mb-2">Step 1: Open the merge tool</h3>
      <p className="text-sage-700 mb-4">
        Go to <strong>calmpdf.com/merge-pdf</strong>. No account is needed. The tool works
        in any modern browser on Mac, Windows, iOS, or Android.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">Step 2: Add your files</h3>
      <p className="text-sage-700 mb-4">
        Drag all the PDFs you want to combine into the upload area, or click to browse your
        files. You can add as many as you need — there's no fixed limit beyond your device's
        available memory.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">Step 3: Set the order</h3>
      <p className="text-sage-700 mb-4">
        After adding your files, drag them up or down in the list to set the order they'll
        appear in the combined document. The first file in the list becomes the first pages
        of the output.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">Step 4: Merge and download</h3>
      <p className="text-sage-700 mb-6">
        Click <strong>Merge</strong>. CalmPDF combines the files in your browser — nothing
        is sent to a server — and downloads the combined PDF to your device. Your original
        files are unchanged.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Combining PDFs on Mac (no extra tools)</h2>
      <p className="text-sage-700 mb-4">
        Preview, built into macOS, can combine PDFs without any additional software:
      </p>
      <ol className="list-decimal list-inside space-y-2 text-sage-700 mb-6">
        <li>Open the first PDF in Preview.</li>
        <li>Go to <strong>View → Thumbnails</strong> to show the page sidebar.</li>
        <li>Drag other PDF files from Finder into the sidebar at the position where you want them inserted.</li>
        <li>Reorder pages as needed by dragging thumbnails.</li>
        <li>Go to <strong>File → Export as PDF</strong> to save the combined file.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Combining PDFs on Windows</h2>
      <p className="text-sage-700 mb-4">
        Windows doesn't have a native PDF combiner. The easiest options:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sage-700 mb-6">
        <li><strong>CalmPDF</strong> — browser-based, works in Edge, Chrome, or Firefox without installing anything.</li>
        <li><strong>Microsoft Word</strong> — can combine PDFs by inserting them as objects, though it re-renders them which may change formatting.</li>
        <li><strong>PDF24</strong> — free Windows app with a combine feature and no usage limits.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Privacy considerations</h2>
      <p className="text-sage-700 mb-6">
        Most online PDF tools upload your files to a server for processing, then delete them
        after a set time. For confidential documents — contracts, HR files, financial records,
        medical paperwork — this is a real consideration. CalmPDF processes everything locally
        in your browser. The files never leave your device, so there's nothing to delete.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Frequently asked questions</h2>

      <h3 className="text-lg font-medium mt-5 mb-2">Does combining PDFs reduce quality?</h3>
      <p className="text-sage-700 mb-4">
        No. Combining PDFs joins the pages without re-encoding or compressing anything. Images,
        fonts, and text remain exactly as they were in the original files.
      </p>

      <h3 className="text-lg font-medium mt-5 mb-2">Can I combine different types of PDFs?</h3>
      <p className="text-sage-700 mb-4">
        Yes. You can combine scanned PDFs, digital PDFs, password-protected PDFs (once unlocked),
        and PDFs in different page sizes and orientations. The output will contain all pages in
        their original format.
      </p>

      <h3 className="text-lg font-medium mt-5 mb-2">What's the maximum number of PDFs I can combine?</h3>
      <p className="text-sage-700 mb-4">
        CalmPDF has no file count limit. The practical limit is your device's memory. Most
        modern computers comfortably handle dozens of PDFs totaling several hundred megabytes.
      </p>

      <h3 className="text-lg font-medium mt-5 mb-2">Will the bookmarks from each PDF be preserved?</h3>
      <p className="text-sage-700 mb-4">
        Yes. CalmPDF preserves bookmarks, internal links, and form fields from each PDF in the
        combined output. Bookmarks from each source file will appear under the page ranges where
        those pages now live in the combined document.
      </p>
    </ArticleShell>
  );
}
