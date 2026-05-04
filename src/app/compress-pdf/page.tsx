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
    </ToolShell>
  );
}
