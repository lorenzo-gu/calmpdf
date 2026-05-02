import Link from "next/link";
import { ToolShell } from "@/components/ToolShell";
import { RotatePdfTool } from "@/components/tools/RotatePdfTool";
import { getTool } from "@/content/tools";
import { buildToolMetadata } from "@/lib/metadata";

const tool = getTool("rotate-pdf")!;

export const metadata = buildToolMetadata(tool);

export default function Page() {
  return (
    <ToolShell tool={tool}>
      <RotatePdfTool />

      <section className="mt-10 space-y-6 text-sage-700">
        <h2 className="text-2xl font-semibold text-sage-900">Fix sideways PDF pages quickly</h2>
        <p>
          Rotate PDF is useful whenever scanned pages open sideways or upside down. This happens often with mobile scans, office copier exports, and mixed-orientation documents. Correcting orientation makes files easier to read on any screen and prevents printing errors where half the packet comes out in the wrong direction.
        </p>
        <p>
          Typical use cases include rotating a single misaligned signature page, standardizing portrait orientation for reports, and preparing handouts for print shops. It is also helpful before merging files so the final document looks consistent from page 1 through the appendix.
        </p>
        <p>
          If your file includes unwanted pages, clean it up first with{" "}
          <Link href="/split-pdf" className="underline underline-offset-2 hover:no-underline">
            Split PDF
          </Link>
          . Once orientation is fixed, combine related files with{" "}
          <Link href="/merge-pdf" className="underline underline-offset-2 hover:no-underline">
            Merge PDF
          </Link>
          .
        </p>
        <p>
          Because CalmPDF runs in your browser, orientation fixes happen locally on your device. That keeps confidential scans private and avoids uploading sensitive paperwork. For busy workflows, local processing also feels faster since there is no cloud round-trip before each adjustment.
        </p>
        <p>
          Compatible with modern Chrome, Edge, Firefox, and Safari on desktop and mobile. If a page still appears wrong after rotation, save and reopen the output to clear viewer cache behavior. When dealing with many pages, rotate in small groups first so you can verify each section before downloading the final file.
        </p>
      </section>
    </ToolShell>
  );
}
