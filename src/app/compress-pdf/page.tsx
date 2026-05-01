import type { Metadata } from "next";
import { ToolShell } from "@/components/ToolShell";
import { CompressPdfTool } from "@/components/tools/CompressPdfTool";
import { getTool } from "@/content/tools";

const tool = getTool("compress-pdf")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: `/${tool.slug}` },
  openGraph: { title: tool.title, description: tool.description, url: `/${tool.slug}` },
};

export default function Page() {
  return (
    <ToolShell tool={tool}>
      <CompressPdfTool />

      <section className="mt-10 space-y-6 text-sage-700">
        <h2 className="text-2xl font-semibold text-sage-900">More about compressing PDFs online</h2>
        <p>
          Use this tool when your PDF is too large for email limits, web forms, or messaging apps. Compression is especially useful for scan-heavy files, reports with full-page images, and exported slide decks. If your original file is 15 to 30 MB, reducing it can make sharing faster and less frustrating for everyone who needs to open it.
        </p>
        <p>
          Common use cases include sending contracts to clients, uploading resumes to job portals with strict size caps, and submitting coursework or application documents that reject large files. For teams, compressed PDFs also keep cloud storage cleaner and help reduce duplicate uploads caused by failed file-size checks.
        </p>
        <p>
          CalmPDF runs directly in your browser, so your document stays on your device during processing. That privacy-first approach is ideal for invoices, legal paperwork, and internal documents where you do not want data routed through a third-party server. It also means performance depends on your device, not a remote queue.
        </p>
        <p>
          Works on modern Chrome, Safari, Edge, and Firefox across desktop, tablet, and mobile. If compression seems stuck, try closing other heavy tabs, reloading the page, or starting with a smaller batch of pages. For best visual quality, use the previewed result and compare text clarity before downloading the final file.
        </p>
      </section>
    </ToolShell>
  );
}
