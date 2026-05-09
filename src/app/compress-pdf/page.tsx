import Link from "next/link";
import { ToolShell } from "@/components/ToolShell";
import { CompressPdfTool } from "@/components/tools/CompressPdfTool";
import { getTool } from "@/content/tools";
import { buildToolMetadata } from "@/lib/metadata";

const tool = getTool("compress-pdf")!;

export const metadata = buildToolMetadata(tool);

export default function Page() {
  return (
    <ToolShell tool={tool}>
      <CompressPdfTool />

      <section className="mt-10 space-y-6 text-sage-700">
        <h2 className="text-2xl font-semibold text-sage-900">Compress PDFs for real submission limits</h2>
        <p>
          Use Compress PDF when files are too large for email, school portals, or job applications. CalmPDF runs locally in your browser, so the original document stays on your device while you generate a smaller copy for sharing.
        </p>
        <p>
          Need a workflow tuned for attachments and inbox limits? Follow our{" "}
          <Link href="/compress-pdf-for-email" className="underline underline-offset-2 hover:no-underline">
            practical PDF email compression guide
          </Link>
          {" "}for file-size targets, quality tradeoffs, and quick checks before sending.
        </p>
      </section>
    </ToolShell>
  );
}
