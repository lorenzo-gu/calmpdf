import type { Metadata } from "next";
import { ToolShell } from "@/components/ToolShell";
import { RotatePdfTool } from "@/components/tools/RotatePdfTool";
import { getTool } from "@/content/tools";

const tool = getTool("rotate-pdf")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: `/${tool.slug}` },
  openGraph: { title: tool.title, description: tool.description, url: `/${tool.slug}` },
};

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
          Because CalmPDF runs in your browser, orientation fixes happen locally on your device. That keeps confidential scans private and avoids uploading sensitive paperwork. For busy workflows, local processing also feels faster since there is no cloud round-trip before each adjustment.
        </p>
        <p>
          Compatible with modern Chrome, Edge, Firefox, and Safari on desktop and mobile. If a page still appears wrong after rotation, save and reopen the output to clear viewer cache behavior. When dealing with many pages, rotate in small groups first so you can verify each section before downloading the final file.
        </p>
      </section>
    </ToolShell>
  );
}
