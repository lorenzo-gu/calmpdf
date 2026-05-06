import Link from "next/link";
import { ToolShell } from "@/components/ToolShell";
import { ExtractPdfPagesTool } from "@/components/tools/ExtractPdfPagesTool";
import { getTool } from "@/content/tools";
import { buildToolMetadata } from "@/lib/metadata";

const tool = getTool("extract-pdf-pages")!;

export const metadata = buildToolMetadata(tool);

export default function Page() {
  return (
    <ToolShell tool={tool}>
      <ExtractPdfPagesTool />

      <section className="mt-10 space-y-6 text-sage-700">
        <h2 className="text-2xl font-semibold text-sage-900">Extract only the PDF pages you need</h2>
        <p>
          Use this tool when you need a clean subset of a larger file: invoice pages for accounting, selected contract pages for signatures, one resume version from a long portfolio, or only the relevant scanned form pages.
        </p>
        <p>
          Everything runs in your browser using local processing. Your PDF is not uploaded to CalmPDF servers.
        </p>

        <h3 className="text-xl font-semibold text-sage-900">Fast extraction workflow</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>Upload one PDF.</li>
          <li>Click page chips or paste ranges like <code>1-3, 5, 8-10</code>.</li>
          <li>Download a new PDF containing only selected pages.</li>
        </ul>

        <h3 className="text-xl font-semibold text-sage-900">Troubleshooting</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>If range input fails, confirm commas and ascending ranges only (example: 2-6, 8).</li>
          <li>If extraction errors appear, test with a non-password-protected source PDF.</li>
          <li>If the browser is slow on very large files, close heavy tabs and try again.</li>
        </ul>

        <h3 className="text-xl font-semibold text-sage-900">FAQs</h3>
        <div className="space-y-3">
          <p><strong>Can I select non-consecutive pages?</strong> Yes. Mix single pages and ranges in one run, such as 1, 4, 9-12.</p>
          <p><strong>Does page quality change?</strong> No. Extracted pages are copied into a new file without rasterizing the document.</p>
          <p><strong>Can I reorder selected pages here?</strong> This route focuses on extraction. Use <Link href="/reorder-pdf-pages" className="underline underline-offset-2 hover:no-underline">Reorder PDF Pages</Link> before or after extracting when needed.</p>
        </div>

        <h3 className="text-xl font-semibold text-sage-900">Related page tools</h3>
        <p>
          Continue with <Link href="/split-pdf" className="underline underline-offset-2 hover:no-underline">Split PDF</Link>, <Link href="/reorder-pdf-pages" className="underline underline-offset-2 hover:no-underline">Reorder PDF Pages</Link>, <Link href="/merge-pdf" className="underline underline-offset-2 hover:no-underline">Merge PDF</Link>, or browse <Link href="/tools" className="underline underline-offset-2 hover:no-underline">All PDF tools</Link>.
        </p>
      </section>
    </ToolShell>
  );
}
