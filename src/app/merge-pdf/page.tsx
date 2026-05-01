import type { Metadata } from "next";
import Link from "next/link";
import { ToolShell } from "@/components/ToolShell";
import { MergePdfTool } from "@/components/tools/MergePdfTool";
import { getTool } from "@/content/tools";

const tool = getTool("merge-pdf")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: `/${tool.slug}` },
  openGraph: { title: tool.title, description: tool.description, url: `/${tool.slug}` },
};

export default function Page() {
  return (
    <ToolShell tool={tool}>
      <MergePdfTool />

      <section className="mt-10 space-y-6 text-sage-700">
        <h2 className="text-2xl font-semibold text-sage-900">When to merge PDF files</h2>
        <p>
          Merge PDF is best when you need one clean document instead of scattered attachments. Combine invoices, proposal pages, appendices, or signed forms into a single file that is easier to review, store, and forward. A merged file is also better for version control because recipients are less likely to miss page 3 of 5 in a long email thread.
        </p>
        <p>
          Typical use cases include building board packets, assembling client deliverables, creating school submission bundles, and organizing records before archiving. You can reorder files before combining, which helps when pages come from different teammates or were exported in the wrong sequence.
        </p>
        <p>
          Need a smaller final document? Compress your PDF with{" "}
          <Link href="/compress-pdf" className="underline underline-offset-2 hover:no-underline">
            Compress PDF
          </Link>
          . If one source includes extra pages, remove them first with{" "}
          <Link href="/split-pdf" className="underline underline-offset-2 hover:no-underline">
            Split PDF
          </Link>
          .
        </p>
        <p>
          Processing happens in your browser, so private materials stay local to your device. That is useful for HR files, medical forms, or legal exhibits where confidentiality matters. No account is required, and there is no waiting for remote upload and download cycles when your connection is slow.
        </p>
        <p>
          Supported on current desktop and mobile browsers. If a merge fails, check that each source file opens normally and is not password-protected. For large sets, merge in smaller groups first, then combine those outputs into one final package for faster, more reliable results.
        </p>
      </section>
    </ToolShell>
  );
}
