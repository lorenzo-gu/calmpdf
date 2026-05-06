import Link from "next/link";
import { ToolShell } from "@/components/ToolShell";
import { PdfToJpgTool } from "@/components/tools/PdfToJpgTool";
import { getTool } from "@/content/tools";
import { buildToolMetadata } from "@/lib/metadata";

const tool = getTool("pdf-to-jpg")!;

export const metadata = buildToolMetadata(tool);

export default function Page() {
  return (
    <ToolShell tool={tool}>
      <PdfToJpgTool />
      <section className="mt-10 space-y-5 text-sage-700">
        <h2 className="text-2xl font-semibold text-sage-900">Convert PDF pages into JPG images in your browser</h2>
        <p>This PDF to JPG tool renders every page locally and exports high-quality JPG files you can share anywhere.</p>
        <p>Use the quality slider to trade image clarity against smaller file sizes, then download single pages or a ZIP archive.</p>
        <h3 className="text-xl font-semibold text-sage-900">Related tools</h3>
        <p>Need more document cleanup first? Try <Link href="/compress-pdf" className="underline underline-offset-2 hover:no-underline">Compress PDF</Link>, <Link href="/reorder-pdf-pages" className="underline underline-offset-2 hover:no-underline">Reorder PDF Pages</Link>, or convert editable files with <Link href="/pdf-to-word" className="underline underline-offset-2 hover:no-underline">PDF to Word</Link>.</p>
      </section>
    </ToolShell>
  );
}
