import Link from "next/link";
import { ToolShell } from "@/components/ToolShell";
import { DocxToPdfTool } from "@/components/tools/DocxToPdfTool";
import { getTool } from "@/content/tools";
import { buildToolMetadata } from "@/lib/metadata";

const tool = getTool("word-to-pdf")!;

export const metadata = buildToolMetadata(tool);

export default function Page() {
  return (
    <ToolShell tool={tool}>
      <DocxToPdfTool />

      <section className="mt-10 space-y-6 text-sage-700">
        <h2 className="text-2xl font-semibold text-sage-900">Convert Word to PDF without uploading anything</h2>
        <p>
          Word to PDF is handy when you need to share a document with someone who does not use Microsoft Word, lock layout before sending, or attach a polished copy to an application. CalmPDF runs the entire conversion inside your browser, so resumes, cover letters, school assignments, and short reports never leave your device.
        </p>
        <p>
          This first version is a simple, browser-only MVP. It works best for everyday DOCX files made up of paragraphs, headings, lists, bold and italic text, and basic tables. Documents with custom fonts, tracked changes, comments, embedded Office objects, or complex layouts may not match Microsoft Word exactly. If you need pixel-perfect fidelity for a printed contract, open the file in Word and use its native PDF export.
        </p>
        <p>
          The tool accepts <code>.docx</code> files. Older <code>.doc</code> files, <code>.rtf</code>, <code>.odt</code>, and Apple Pages files are not supported in this MVP. Conversion uses your browser&apos;s memory, so very large documents may run more smoothly on a desktop or laptop than on a phone.
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
      </section>
    </ToolShell>
  );
}
