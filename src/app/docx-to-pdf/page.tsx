import type { Metadata } from "next";
import Link from "next/link";
import { ToolShell } from "@/components/ToolShell";
import { DocxToPdfTool } from "@/components/tools/DocxToPdfTool";
import { getTool } from "@/content/tools";

const tool = getTool("docx-to-pdf")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: `/${tool.slug}` },
  openGraph: { title: tool.title, description: tool.description, url: `/${tool.slug}` },
};

export default function Page() {
  return (
    <ToolShell tool={tool}>
      <DocxToPdfTool />

      <section className="mt-10 space-y-6 text-sage-700">
        <h2 className="text-2xl font-semibold text-sage-900">Convert Word to PDF without uploading anything</h2>
        <p>
          DOCX to PDF is handy when you need to share a Word document with someone who does not use Microsoft Word, lock the layout before sending, or attach a polished copy to an application. CalmPDF runs the entire conversion inside your browser, so resumes, cover letters, school assignments, and short reports never leave your device.
        </p>
        <p>
          This first version is a simple, browser-only MVP. It works best for everyday DOCX files made up of paragraphs, headings, lists, bold and italic text, and basic tables. Documents with custom fonts, tracked changes, comments, embedded Office objects, or complex layouts may not match Word exactly. If you need pixel-perfect fidelity for a printed contract, open the file in Word and use its native PDF export.
        </p>
        <p>
          The tool only accepts <code>.docx</code> files. Older <code>.doc</code> files, <code>.rtf</code>, <code>.odt</code>, and Apple Pages files are not supported in this MVP. Conversion uses your browser&apos;s memory, so very large documents may run more smoothly on a desktop or laptop than on a phone.
        </p>
        <p>
          Once you have a PDF, you can keep working with it using CalmPDF&apos;s other browser-based tools: shrink the file with{" "}
          <Link href="/compress-pdf" className="underline underline-offset-2 hover:no-underline">
            Compress PDF
          </Link>
          , combine it with cover pages or attachments using{" "}
          <Link href="/merge-pdf" className="underline underline-offset-2 hover:no-underline">
            Merge PDF
          </Link>
          , or add signatures and notes with{" "}
          <Link href="/edit-pdf" className="underline underline-offset-2 hover:no-underline">
            Edit PDF
          </Link>
          .
        </p>
        <p>
          Compatible with modern Chrome, Edge, Firefox, and Safari on desktop and mobile. If a conversion fails, try a smaller or simpler document. Because everything happens locally, the file is never uploaded to a server and is not sent to any third-party service.
        </p>
      </section>
    </ToolShell>
  );
}
