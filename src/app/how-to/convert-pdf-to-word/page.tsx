import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/content/posts";
import { ArticleShell } from "@/components/ArticleShell";

const post = BLOG_POSTS.find((p) => p.slug === "convert-pdf-to-word")!;

export const metadata: Metadata = {
  title: "How to Convert PDF to Word | CalmPDF",
  description: "Step-by-step guide to convert PDF to editable Word documents, including current OCR and layout limitations.",
  alternates: { canonical: `${SITE.url}/how-to/convert-pdf-to-word` },
};

export default function Page() {
  return (
    <ArticleShell post={post}>
      <h1 className="text-3xl font-semibold tracking-tight mb-4">How to Convert PDF to Word</h1>
      <p className="text-sage-700 mb-6">Use PDF to Word when you need to edit text from a PDF. CalmPDF outputs a DOCX file you can open in Microsoft Word, Google Docs, or Pages.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Best use cases</h2>
      <ul className="list-disc list-inside text-sage-700 space-y-2 mb-6">
        <li>Text-based letters, short contracts, and reports.</li>
        <li>Reusing copy from older PDFs in a new Word document.</li>
        <li>Quick editing before exporting back to PDF.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Limitations to know</h2>
      <p className="text-sage-700 mb-6">This tool does not support OCR yet, so scanned PDFs and image-only PDFs will not convert into editable text. It also does not fully rebuild complex tables, columns, headers, footers, or embedded images in this version.</p>
      <p className="text-sage-700 mb-6"><a href="/pdf-to-word" className="text-sage-900 underline underline-offset-4">Try CalmPDF PDF to Word converter.</a></p>
    </ArticleShell>
  );
}
