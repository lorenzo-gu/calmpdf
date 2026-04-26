import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/content/posts";
import { ArticleShell } from "@/components/ArticleShell";

const post = BLOG_POSTS.find((p) => p.slug === "split-pdf-into-multiple-files")!;

export const metadata: Metadata = {
  title: "How to Split a PDF into Multiple Files | CalmPDF",
  description:
    "Step-by-step guide to splitting a PDF into separate files by page range or individual pages — free, private, and in your browser.",
  keywords: ["split pdf into multiple files", "split pdf free", "extract pages from pdf"],
  alternates: { canonical: `${SITE.url}/how-to/split-pdf-into-multiple-files` },
  openGraph: {
    title: "How to Split a PDF into Multiple Files",
    description: "Split a PDF by page range or extract individual pages — free and private in your browser.",
    url: `${SITE.url}/how-to/split-pdf-into-multiple-files`,
    siteName: SITE.name,
  },
};

export default function Page() {
  return (
    <ArticleShell post={post}>
      <h1 className="text-3xl font-semibold tracking-tight mb-4">
        How to Split a PDF into Multiple Files
      </h1>
      <p className="text-sage-700 mb-6">
        Splitting a PDF means extracting a subset of pages into a separate document. You might
        want to pull out a single invoice from a multi-page statement, separate chapters from
        a report, or divide a large scan into smaller parts for email. CalmPDF lets you do this
        in your browser — no upload, no account, free.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">When would you split a PDF?</h2>
      <p className="text-sage-700 mb-4">Common reasons to split a PDF include:</p>
      <ul className="list-disc list-inside space-y-2 text-sage-700 mb-6">
        <li><strong>Extracting a single invoice</strong> from a combined monthly statement.</li>
        <li><strong>Separating chapters</strong> from a long report or ebook.</li>
        <li><strong>Dividing a scanned batch</strong> into individual documents.</li>
        <li><strong>Removing pages</strong> you don't want to share before sending a file.</li>
        <li><strong>Creating handouts</strong> from specific pages of a presentation.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">How to split a PDF using CalmPDF</h2>

      <h3 className="text-xl font-medium mt-6 mb-2">Step 1: Open the split tool</h3>
      <p className="text-sage-700 mb-4">
        Go to <strong>calmpdf.com/split-pdf</strong> in any browser. The tool works on Mac,
        Windows, iOS, and Android — no app to install.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">Step 2: Drop your PDF</h3>
      <p className="text-sage-700 mb-4">
        Drag the PDF into the upload area, or click to browse. The file loads in your browser
        and is never sent to a server.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">Step 3: Choose a page range</h3>
      <p className="text-sage-700 mb-4">
        Enter the pages you want to extract. For example, if you want pages 3 through 7, enter
        3 in the "From" field and 7 in the "To" field. To extract a single page, enter the same
        number in both fields (e.g., 5 to 5).
      </p>
      <p className="text-sage-700 mb-4">
        To split every page into its own file, choose the <strong>Every page</strong> option.
        CalmPDF will package all the individual pages into a ZIP download.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">Step 4: Download the result</h3>
      <p className="text-sage-700 mb-6">
        Click <strong>Split</strong>. For a page range, you get a single PDF. For every-page
        splits, you get a ZIP containing one PDF per page. Your original file is not modified.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Splitting a PDF on Mac without a tool</h2>
      <p className="text-sage-700 mb-4">
        Mac users can split PDFs using Preview without any additional software:
      </p>
      <ol className="list-decimal list-inside space-y-2 text-sage-700 mb-6">
        <li>Open the PDF in Preview.</li>
        <li>Go to <strong>View → Thumbnails</strong>.</li>
        <li>Select the pages you want to keep (hold Shift or Cmd to select multiple pages).</li>
        <li>Drag the selected pages to the desktop or a Finder window to create a new PDF from those pages.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Splitting a PDF on Windows</h2>
      <p className="text-sage-700 mb-4">
        Windows doesn't have a built-in PDF splitter. Options include:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sage-700 mb-6">
        <li><strong>CalmPDF</strong> — works in any browser, no install needed.</li>
        <li><strong>Adobe Acrobat Reader</strong> — splitting requires the paid Acrobat Pro version.</li>
        <li><strong>PDF24</strong> — free desktop app for Windows with a split feature.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Frequently asked questions</h2>

      <h3 className="text-lg font-medium mt-5 mb-2">Does splitting a PDF affect quality?</h3>
      <p className="text-sage-700 mb-4">
        No. Splitting extracts pages without re-encoding them. Images, fonts, and text remain
        exactly as they were in the original document.
      </p>

      <h3 className="text-lg font-medium mt-5 mb-2">Can I split a PDF into equal parts?</h3>
      <p className="text-sage-700 mb-4">
        CalmPDF currently splits by page range. To create equal parts from a 20-page PDF, you'd
        run the split operation multiple times (pages 1–5, 6–10, etc.). The every-page option
        splits into individual pages automatically.
      </p>

      <h3 className="text-lg font-medium mt-5 mb-2">Can I split password-protected PDFs?</h3>
      <p className="text-sage-700 mb-4">
        Password-protected PDFs need to be unlocked first. Open the PDF in Preview (Mac) or
        Adobe Acrobat, remove the password protection, save, then split.
      </p>

      <h3 className="text-lg font-medium mt-5 mb-2">Will bookmarks and links be preserved?</h3>
      <p className="text-sage-700 mb-4">
        Internal links within the extracted page range are preserved. Links pointing to pages
        outside the extracted range may break, since those pages no longer exist in the new file.
      </p>
    </ArticleShell>
  );
}
