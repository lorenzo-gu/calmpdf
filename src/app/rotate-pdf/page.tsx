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
    </ToolShell>
  );
}
