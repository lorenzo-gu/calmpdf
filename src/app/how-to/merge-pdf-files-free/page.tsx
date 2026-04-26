import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/content/posts";
import { ArticleShell } from "@/components/ArticleShell";

const post = BLOG_POSTS.find((p) => p.slug === "merge-pdf-files-free")!;

export const metadata: Metadata = {
  title: "How to Merge PDF Files Free | CalmPDF",
  description:
    "Compare the best free tools for merging PDFs, including CalmPDF — a private, browser-based option that never uploads your files to a server.",
  keywords: ["merge pdf files free", "combine pdf free", "merge pdf online free"],
  alternates: { canonical: `${SITE.url}/how-to/merge-pdf-files-free` },
  openGraph: {
    title: "How to Merge PDF Files Free",
    description: "The best free tools for merging PDFs — including one that keeps your files completely private.",
    url: `${SITE.url}/how-to/merge-pdf-files-free`,
    siteName: SITE.name,
  },
};

export default function Page() {
  return (
    <ArticleShell post={post}>
      <h1 className="text-3xl font-semibold tracking-tight mb-4">
        How to Merge PDF Files Free
      </h1>
      <p className="text-sage-700 mb-6">
        You can merge PDF files for free using your browser, a desktop app, or a web tool.
        The best option depends on how many files you need to combine, whether the documents
        are sensitive, and how often you do this. Here's an honest comparison of the main approaches.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Option 1: CalmPDF (browser-based, fully private)</h2>
      <p className="text-sage-700 mb-4">
        CalmPDF merges PDFs directly in your browser using JavaScript. Your files are never
        sent to a server — the entire process happens on your device. This makes it the best
        choice for sensitive documents like contracts, medical records, or financial statements.
      </p>
      <ol className="list-decimal list-inside space-y-2 text-sage-700 mb-4">
        <li>Go to <strong>calmpdf.com/merge-pdf</strong>.</li>
        <li>Drop all the PDFs you want to combine into the upload area.</li>
        <li>Drag them into the order you want.</li>
        <li>Click <strong>Merge</strong> and download the combined PDF.</li>
      </ol>
      <p className="text-sage-700 mb-6">
        There's no file size limit beyond what your browser can handle (typically up to 200 MB
        total on most laptops), no account required, and no watermark on the output.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Option 2: Smallpdf and iLovePDF</h2>
      <p className="text-sage-700 mb-4">
        Tools like Smallpdf and iLovePDF have polished interfaces and support many PDF operations
        beyond merging. They're good general-purpose tools. The trade-off is that your files are
        uploaded to their servers for processing.
      </p>
      <p className="text-sage-700 mb-4">
        Both offer a free tier with daily or file-size limits. Smallpdf's free plan allows two
        free tasks per hour. iLovePDF allows unlimited free merges with ads. Neither should be
        used with documents you'd consider confidential.
      </p>
      <p className="text-sage-700 mb-6">
        If you need to merge dozens of files regularly, their paid plans ($9–12/month) remove
        limits and add batch processing. For occasional use, the free tiers are fine for
        non-sensitive documents.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Option 3: Preview on Mac</h2>
      <p className="text-sage-700 mb-4">
        Mac users can merge PDFs using the built-in Preview app — no internet required.
      </p>
      <ol className="list-decimal list-inside space-y-2 text-sage-700 mb-6">
        <li>Open the first PDF in Preview.</li>
        <li>Go to <strong>View → Thumbnails</strong> to show the page sidebar.</li>
        <li>Drag additional PDF files from Finder into the sidebar at the position where you want them inserted.</li>
        <li>Go to <strong>File → Export as PDF</strong> to save the merged document.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Option 4: Adobe Acrobat Reader (free, with limits)</h2>
      <p className="text-sage-700 mb-4">
        Adobe Acrobat Reader's free version doesn't support merging — you need Acrobat Pro
        ($20/month) or a free trial for that. Adobe's free web tools at acrobat.adobe.com do
        allow merging with an account, with files uploaded to Adobe's servers.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Which free PDF merger should you use?</h2>
      <p className="text-sage-700 mb-2">
        <strong>Use CalmPDF</strong> if privacy matters, you have sensitive documents, or you
        want no account, no watermark, and no daily limits.
      </p>
      <p className="text-sage-700 mb-2">
        <strong>Use Preview (Mac)</strong> if you're offline or prefer an entirely local solution
        without opening a browser.
      </p>
      <p className="text-sage-700 mb-6">
        <strong>Use Smallpdf or iLovePDF</strong> if you need additional PDF features beyond
        merging (like converting, compressing, or editing) and your documents aren't sensitive.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Common questions about merging PDFs</h2>

      <h3 className="text-lg font-medium mt-5 mb-2">Does merging PDFs reduce quality?</h3>
      <p className="text-sage-700 mb-4">
        No. Merging combines the pages of multiple PDFs into one file without re-encoding anything.
        Images, fonts, and formatting stay exactly as they were in the originals.
      </p>

      <h3 className="text-lg font-medium mt-5 mb-2">Can I merge PDFs without losing bookmarks?</h3>
      <p className="text-sage-700 mb-4">
        CalmPDF preserves bookmarks, internal links, and form fields when merging. Some tools
        strip bookmarks during the merge — check the output if bookmarks matter for your workflow.
      </p>

      <h3 className="text-lg font-medium mt-5 mb-2">Is there a limit to how many PDFs I can merge?</h3>
      <p className="text-sage-700 mb-4">
        CalmPDF has no file count limit. The practical limit is your device's memory. Most
        modern laptops handle dozens of PDFs totaling hundreds of megabytes without issue.
      </p>

      <h3 className="text-lg font-medium mt-5 mb-2">Can I merge password-protected PDFs?</h3>
      <p className="text-sage-700 mb-4">
        You'll need to unlock password-protected PDFs before merging. Most tools, including
        CalmPDF, require unprotected files. You can remove the password in Preview (Mac) or
        Adobe Acrobat before merging.
      </p>
    </ArticleShell>
  );
}
