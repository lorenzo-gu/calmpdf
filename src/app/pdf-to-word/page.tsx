import Link from "next/link";
import { ToolShell } from "@/components/ToolShell";
import { PdfToDocxTool } from "@/components/tools/PdfToDocxTool";
import { getTool } from "@/content/tools";
import { buildToolMetadata } from "@/lib/metadata";

const tool = getTool("pdf-to-word")!;

export const metadata = buildToolMetadata(tool);

export default function Page() {
  return (
    <ToolShell tool={tool}>
      <PdfToDocxTool />

      <section className="mt-10 space-y-6 text-sage-700">
        <h2 className="text-2xl font-semibold text-sage-900">Turn a PDF into an editable Word document</h2>
        <p>
          PDF to Word is useful when you need to edit text from a PDF in Word, Google Docs, or another word processor. Common cases include rewriting a one-page letter, updating a contract draft, copying notes into a longer document, or grabbing a passage from a clean PDF report. CalmPDF runs the entire conversion inside your browser, so your file never leaves your device.
        </p>
        <p>
          This first version is a simple, browser-only MVP. It extracts selectable text from text-based PDFs and writes it into a DOCX file with paragraphs and page breaks. It does not perform OCR, so scanned PDFs and image-only documents are not supported yet. It also does not attempt to reconstruct columns, tables, headers, footers, footnotes, forms, or images — those are intentionally out of scope for the MVP and will be addressed in future updates.
        </p>
        <p>
          The tool only accepts <code>.pdf</code> files. Conversion uses your browser&apos;s memory, so very large PDFs (hundreds of pages) may run more smoothly on a desktop or laptop than on a phone. If a conversion fails, try a smaller or simpler document.
        </p>
        <p>
          Once you have your editable Word .docx file, you can keep working with the source PDF using CalmPDF&apos;s other browser-based tools. Add a signature, redact a section, or insert text with{" "}
          <Link href="/edit-pdf" className="underline underline-offset-2 hover:no-underline">
            Edit PDF
          </Link>
          , or shrink the original before sharing it with{" "}
          <Link href="/compress-pdf" className="underline underline-offset-2 hover:no-underline">
            Compress PDF
          </Link>
          . For a broader overview of local conversion workflows, visit our{" "}
          <Link href="/browser-based-pdf-converter" className="underline underline-offset-2 hover:no-underline">
            browser-based PDF converter guide
          </Link>
          .
        </p>
        <p>
          Compatible with modern Chrome, Edge, Firefox, and Safari on desktop and mobile. Because everything happens locally, the file is never uploaded to a server and is not sent to any third-party service.
        </p>
      </section>
    </ToolShell>
  );
}
