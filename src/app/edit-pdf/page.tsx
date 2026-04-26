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
    </ToolShell>
  );
}
