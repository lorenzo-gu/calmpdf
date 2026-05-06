import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/content/posts";
import { ArticleShell } from "@/components/ArticleShell";

const post = BLOG_POSTS.find((p) => p.slug === "merge-pdfs-on-mac-windows-iphone")!;

export const metadata: Metadata = {
  title: "How to Merge PDFs on Mac, Windows, and iPhone | CalmPDF",
  description:
    "A practical cross-platform guide to merge PDFs on Mac, Windows, and iPhone, with troubleshooting, privacy notes, and desktop-app comparisons.",
  alternates: { canonical: `${SITE.url}/how-to/merge-pdfs-on-mac-windows-iphone` },
};

export default function Page() {
  return (
    <ArticleShell post={post}>
      <h1 className="text-3xl font-semibold tracking-tight mb-4">How to Merge PDFs on Mac, Windows, and iPhone</h1>
      <p className="text-sage-700 mb-6">If you need one PDF from multiple files, the core task is the same on every device: pick files, set order, merge, and export. What changes is how much setup each platform requires and whether your files are uploaded to a server.</p>
      <p className="text-sage-700 mb-6"><a href="/merge-pdf" className="text-sage-900 underline underline-offset-4">Need to merge now? Use CalmPDF's Merge PDF tool.</a></p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Fastest option on any device: browser merge</h2>
      <ol className="list-decimal list-inside space-y-2 text-sage-700 mb-6">
        <li>Open <strong>/merge-pdf</strong>.</li>
        <li>Add every PDF you want in the final file.</li>
        <li>Use arrows to set output order.</li>
        <li>Click <strong>Merge</strong> and download.</li>
      </ol>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Merge PDFs on Mac</h2>
      <p className="text-sage-700 mb-4">You can merge with Preview (built in) or use a browser tool.</p>
      <ul className="list-disc list-inside space-y-2 text-sage-700 mb-6">
        <li><strong>Preview method:</strong> open a PDF, show thumbnails, drag other PDFs into the sidebar, then export.</li>
        <li><strong>Browser method:</strong> open CalmPDF and merge directly without installing apps.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Merge PDFs on Windows</h2>
      <p className="text-sage-700 mb-4">Windows has no native merge function in File Explorer or Edge, so you typically choose:</p>
      <ul className="list-disc list-inside space-y-2 text-sage-700 mb-6">
        <li><strong>Browser tool</strong> (fastest, no install).</li>
        <li><strong>Desktop PDF apps</strong> like Adobe Acrobat Pro (paid) or PDF24 (free).</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Merge PDFs on iPhone</h2>
      <p className="text-sage-700 mb-4">On iPhone, many people use Files + Share Sheet workflows, but browser tools are often simpler for multiple documents.</p>
      <ol className="list-decimal list-inside space-y-2 text-sage-700 mb-6">
        <li>Open Safari and go to <strong>/merge-pdf</strong>.</li>
        <li>Choose PDFs from Files.</li>
        <li>Reorder and merge, then save back to Files.</li>
      </ol>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Troubleshooting</h2>
      <ul className="list-disc list-inside space-y-2 text-sage-700 mb-6">
        <li><strong>Wrong page order:</strong> sort files by final read order before clicking merge.</li>
        <li><strong>Merge fails on mobile:</strong> reduce number of files per run, then merge merged outputs.</li>
        <li><strong>Password-protected file rejected:</strong> unlock first, then retry.</li>
        <li><strong>Output too large:</strong> merge first, then <a href="/compress-pdf" className="text-sage-900 underline underline-offset-4">compress the combined PDF</a>.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Browser tools vs desktop apps</h2>
      <p className="text-sage-700 mb-6">Desktop apps can offer batch automation and advanced document assembly features, but for most users merging a few files, browser tools are faster and easier. If privacy matters, prefer tools that process locally in-browser rather than uploading files.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Related guides</h2>
      <ul className="list-disc list-inside space-y-2 text-sage-700 mb-6">
        <li><a href="/how-to/combine-pdf-files" className="text-sage-900 underline underline-offset-4">How to Combine PDF Files</a></li>
        <li><a href="/how-to/reorder-pdf-pages-online" className="text-sage-900 underline underline-offset-4">How to Reorder PDF Pages Online</a></li>
        <li><a href="/how-to/split-pdf-into-multiple-files" className="text-sage-900 underline underline-offset-4">How to Split a PDF into Multiple Files</a></li>
      </ul>
    </ArticleShell>
  );
}
