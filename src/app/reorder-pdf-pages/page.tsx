import Link from "next/link";
import { ToolShell } from "@/components/ToolShell";
import { ReorderPdfTool } from "@/components/tools/ReorderPdfTool";
import { getTool } from "@/content/tools";
import { buildToolMetadata } from "@/lib/metadata";

const tool = getTool("reorder-pdf-pages")!;

export const metadata = buildToolMetadata(tool);

export default function Page() {
  return (
    <ToolShell tool={tool}>
      <ReorderPdfTool />

      <section className="mt-10 space-y-6 text-sage-700">
        <h2 className="text-2xl font-semibold text-sage-900">Use reorder PDF pages to clean document flow</h2>
        <p>
          Reorder PDF pages helps when a document is technically complete but arranged in the wrong sequence. Common examples include scanner batches that flipped page order, a cover page that should move to the front, or reports that need sections grouped before sharing.
        </p>
        <p>
          CalmPDF processes files in your browser, so private files stay local to your device. You can drag page rows for quick rearranging and still rely on move up/down buttons when you need keyboard-accessible controls.
        </p>

        <h3 className="text-xl font-semibold text-sage-900">How it works</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>Upload one PDF file.</li>
          <li>Move pages with drag-and-drop or page move buttons.</li>
          <li>Download a new reordered PDF copy.</li>
        </ul>

        <h3 className="text-xl font-semibold text-sage-900">Typical use cases</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>Fix scanned packets that came out in reverse order.</li>
          <li>Move cover pages, signatures, or appendices to better positions.</li>
          <li>Rearrange monthly reports before sending to stakeholders.</li>
          <li>Prepare page order before using <Link href="/merge-pdf" className="underline underline-offset-2 hover:no-underline">Merge PDF</Link>.</li>
        </ul>

        <h3 className="text-xl font-semibold text-sage-900">Limitations</h3>
        <p>
          This browser-only MVP focuses on page order. It does not edit page content, annotate text, or merge multiple files in the same step. Very large PDFs or encrypted files may not open depending on your browser memory and file permissions.
        </p>

        <h3 className="text-xl font-semibold text-sage-900">Related tools</h3>
        <p>
          Continue with <Link href="/split-pdf" className="underline underline-offset-2 hover:no-underline">Split PDF</Link>, <Link href="/rotate-pdf" className="underline underline-offset-2 hover:no-underline">Rotate PDF</Link>, <Link href="/edit-pdf" className="underline underline-offset-2 hover:no-underline">Edit PDF</Link>, or browse all tools in <Link href="/tools" className="underline underline-offset-2 hover:no-underline">All PDF tools</Link>.
        </p>
      </section>
    </ToolShell>
  );
}
