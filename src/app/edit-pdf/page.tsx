import type { Metadata } from "next";
import { ToolShell } from "@/components/ToolShell";
import { EditPdfTool } from "@/components/tools/EditPdfTool";
import { getTool } from "@/content/tools";

const tool = getTool("edit-pdf")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: `/${tool.slug}` },
  openGraph: { title: tool.title, description: tool.description, url: `/${tool.slug}` },
};

export default function Page() {
  return (
    <ToolShell tool={tool}>
      <EditPdfTool />

      <section className="mt-10 space-y-6 text-sage-700">
        <h2 className="text-2xl font-semibold text-sage-900">What you can do with the PDF editor</h2>
        <p>
          Use Edit PDF when you need quick changes without reopening the original source file. It is great for adding notes, filling lightweight annotations, or making small updates before sharing. This saves time when you receive a finalized PDF and only need minor adjustments rather than a full redesign.
        </p>
        <p>
          Common use cases include marking up drafts for review, preparing onboarding packets, updating labels in form documents, and adding visual guidance to instructions. Many users also edit PDFs before converting, merging, or splitting so each downstream file is already cleaned up and ready to send.
        </p>
        <p>
          CalmPDF is browser-based, and processing stays on your device. That helps protect confidential project files and personal records while avoiding account setup. Since there is no upload dependency, edits can be faster on stable local hardware even if your internet connection is inconsistent.
        </p>
        <p>
          Supported across current desktop and mobile browsers. If an element does not appear after editing, zoom in to confirm placement and export again. For best results, keep the original file nearby so you can compare before and after versions and verify the final layout is exactly what you want.
        </p>
      </section>
    </ToolShell>
  );
}
