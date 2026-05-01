import type { Metadata } from "next";
import Link from "next/link";
import { ToolShell } from "@/components/ToolShell";
import { SplitPdfTool } from "@/components/tools/SplitPdfTool";
import { getTool } from "@/content/tools";

const tool = getTool("split-pdf")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: `/${tool.slug}` },
  openGraph: { title: tool.title, description: tool.description, url: `/${tool.slug}` },
};

export default function Page() {
  return (
    <ToolShell tool={tool}>
      <SplitPdfTool />

      <section className="mt-10 space-y-6 text-sage-700">
        <h2 className="text-2xl font-semibold text-sage-900">Why and when to split a PDF</h2>
        <p>
          Split PDF is helpful when one big document contains sections meant for different people. Instead of sharing an entire handbook, contract packet, or scan bundle, you can separate only the pages each person needs. That reduces confusion, makes downloads lighter, and helps keep sensitive pages from being sent by mistake.
        </p>
        <p>
          Common scenarios include extracting a single chapter from class notes, separating monthly statements from a yearly export, and pulling signature pages from a long agreement. Teams also use splitting before OCR or translation workflows so each subset can be processed independently.
        </p>
        <p>
          After extracting only what you need, you can combine the final set with{" "}
          <Link href="/merge-pdf" className="underline underline-offset-2 hover:no-underline">
            Merge PDF
          </Link>
          . If the output is still too large to send, reduce it using{" "}
          <Link href="/compress-pdf" className="underline underline-offset-2 hover:no-underline">
            Compress PDF
          </Link>
          .
        </p>
        <p>
          CalmPDF performs page extraction in-browser, so files are processed on your device. This is ideal for internal reports, legal files, or personal documents where privacy is important. Local processing also cuts wait time because there is no server-side queue.
        </p>
        <p>
          The tool works on laptops, desktops, tablets, and phones with modern browsers. If page ranges do not export as expected, double-check start and end numbers and confirm the source PDF is not encrypted. For very large files, split in stages to keep memory use lower and exports smoother.
        </p>
      </section>
    </ToolShell>
  );
}
