import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/content/posts";
import { ArticleShell } from "@/components/ArticleShell";

const post = BLOG_POSTS.find((p) => p.slug === "rotate-pdf")!;

export const metadata: Metadata = {
  title: "How to Rotate a PDF | CalmPDF",
  description:
    "Rotate a PDF in your browser without uploading it. Step-by-step instructions for CalmPDF, Preview on Mac, and Microsoft Edge on Windows — all free, no signup.",
  keywords: [
    "how to rotate a pdf",
    "rotate pdf",
    "rotate pdf free",
    "rotate pdf online",
    "rotate pdf permanently",
  ],
  alternates: { canonical: `${SITE.url}/how-to/rotate-pdf` },
  openGraph: {
    title: "How to Rotate a PDF",
    description:
      "Rotate a PDF page or every page in your browser — free, private, and no signup. Step-by-step instructions for CalmPDF, Preview, and Edge.",
    url: `${SITE.url}/how-to/rotate-pdf`,
    siteName: SITE.name,
  },
};

export default function Page() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Rotate a PDF",
    description:
      "Rotate one page or every page of a PDF in your browser using CalmPDF, Preview on Mac, or Microsoft Edge on Windows.",
    totalTime: "PT2M",
    supply: [{ "@type": "HowToSupply", name: "PDF file" }],
    tool: [
      { "@type": "HowToTool", name: "Web browser" },
      { "@type": "HowToTool", name: "CalmPDF" },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Open the rotate tool",
        text: "Open calmpdf.com/rotate-pdf in any modern browser. Nothing is installed and the file never leaves your device.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Add your PDF",
        text: "Drag your PDF onto the page or click to pick it from your computer. The pages render as a thumbnail grid.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Rotate pages",
        text: "Click the rotate button on a thumbnail to spin a single page 90 degrees clockwise, or use Rotate all to apply the rotation to every page at once.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Download the rotated PDF",
        text: "Click Download to save the new PDF. The original file on disk is untouched.",
      },
    ],
  };

  return (
    <ArticleShell post={post}>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <h1 className="text-3xl font-semibold tracking-tight mb-4">
        How to Rotate a PDF
      </h1>
      <p className="text-sage-700 mb-6">
        Rotating a PDF takes about thirty seconds and does not require Acrobat,
        a subscription, or uploading the file to a stranger&apos;s server. The
        easiest path is a browser-based tool like CalmPDF, which spins pages
        ninety degrees at a time and saves a brand new PDF entirely on your
        computer. Preview on Mac and Microsoft Edge on Windows can also do it,
        with a couple of caveats below.
      </p>
      <p className="text-sage-700 mb-6">
        <a href="/rotate-pdf" className="text-sage-900 underline underline-offset-4">
          Need to rotate a PDF now? Use CalmPDF's free Rotate PDF tool.
        </a>
      </p>


      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Method 1: Rotate a PDF in your browser with CalmPDF
      </h2>
      <p className="text-sage-700 mb-4">
        CalmPDF runs entirely in your browser using JavaScript and pdf-lib.
        There is no upload, no signup, and no watermark. The rotation is
        applied to a fresh copy of the PDF — your original file on disk is
        never touched.
      </p>
      <ol className="list-decimal list-inside space-y-2 text-sage-700 mb-4">
        <li>
          Open <strong>calmpdf.com/rotate-pdf</strong> in Chrome, Edge,
          Firefox, Safari, or Brave.
        </li>
        <li>
          Drag your PDF onto the drop zone or click to select it. You will see
          every page as a thumbnail.
        </li>
        <li>
          Click the rotate button on any thumbnail to turn that page ninety
          degrees clockwise. Click again for one-eighty, and a third time for
          two-seventy.
        </li>
        <li>
          To rotate every page in one go — common with a sideways scan — use
          the <strong>Rotate all</strong> button at the top.
        </li>
        <li>
          Click <strong>Download</strong> to save the rotated PDF. The new file
          keeps the original&apos;s text, links, and form fields.
        </li>
      </ol>
      <p className="text-sage-700 mb-6">
        Because the work happens locally, file size is only limited by your
        device&apos;s memory. A two-hundred-page contract or a scanned book
        will rotate in seconds without ever leaving the tab.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Method 2: Rotate a PDF on Mac with Preview
      </h2>
      <p className="text-sage-700 mb-4">
        Preview, the default PDF viewer on macOS, can rotate pages and save
        the result without any third-party software.
      </p>
      <ol className="list-decimal list-inside space-y-2 text-sage-700 mb-4">
        <li>Right-click the PDF in Finder and choose <strong>Open With &rarr; Preview</strong>.</li>
        <li>Open the sidebar with <strong>View &rarr; Thumbnails</strong> if it is not already visible.</li>
        <li>
          Select one or more page thumbnails. Use <strong>Cmd + A</strong> to
          select all pages.
        </li>
        <li>
          Press <strong>Cmd + R</strong> to rotate clockwise, or
          <strong> Cmd + L</strong> to rotate counter-clockwise.
        </li>
        <li>Save with <strong>File &rarr; Save</strong> (or <strong>Export as PDF</strong> for a separate copy).</li>
      </ol>
      <p className="text-sage-700 mb-6">
        Preview is the fastest option if you are already on a Mac, but it can
        sometimes flatten interactive form fields when re-saving large PDFs.
        If keeping form fields matters, prefer CalmPDF.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Method 3: Rotate a PDF on Windows with Microsoft Edge
      </h2>
      <p className="text-sage-700 mb-4">
        Edge ships with a built-in PDF reader that can rotate the on-screen
        view. To save the rotation permanently you need a second step.
      </p>
      <ol className="list-decimal list-inside space-y-2 text-sage-700 mb-4">
        <li>Right-click the PDF and choose <strong>Open with &rarr; Microsoft Edge</strong>.</li>
        <li>
          Use the <strong>Rotate</strong> button in the top toolbar to spin the
          view ninety degrees clockwise.
        </li>
        <li>
          Press <strong>Ctrl + P</strong>, choose <strong>Microsoft Print to PDF</strong> as the destination,
          and click <strong>Print</strong> to save the rotated copy.
        </li>
      </ol>
      <p className="text-sage-700 mb-6">
        The print-to-PDF step rasterises pages, which means selectable text can
        become a flat image. For text-heavy PDFs where you need to keep the
        text searchable, CalmPDF is the cleaner option because it rotates the
        underlying page object rather than re-rendering it.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Why CalmPDF</h2>
      <p className="text-sage-700 mb-6">
        CalmPDF is free, requires no account, and processes everything in your
        browser. There is no upload, no email gate, and no watermark. Closing
        the tab clears the file from memory — there is no copy on a server to
        forget about. That makes it a sensible default for sensitive
        documents like signed contracts, medical forms, or tax filings.
      </p>

      <p className="text-sage-700 mb-6">
        <a href="/rotate-pdf" className="text-sage-900 underline underline-offset-4">
          Need to rotate a PDF now? Use CalmPDF's free Rotate PDF tool.
        </a>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Frequently asked questions</h2>

      <h3 className="text-lg font-medium mt-5 mb-2">Does rotating a PDF reduce its quality?</h3>
      <p className="text-sage-700 mb-4">
        With CalmPDF and Preview, no — the rotation is metadata applied to the
        existing page, so text stays sharp and selectable. Rotating through
        Microsoft Print to PDF can rasterise the page, which slightly softens
        text and increases file size.
      </p>

      <h3 className="text-lg font-medium mt-5 mb-2">How do I rotate just one page in a PDF?</h3>
      <p className="text-sage-700 mb-4">
        In CalmPDF, click the rotate button on that single page&apos;s
        thumbnail and leave the others alone. In Preview, select only that
        page in the sidebar before pressing Cmd + R. Saving the file then
        keeps the chosen rotation per page.
      </p>

      <h3 className="text-lg font-medium mt-5 mb-2">Why does my PDF keep opening sideways even after I rotate it?</h3>
      <p className="text-sage-700 mb-4">
        Some viewers — especially older versions of Adobe Reader — read the
        original page rotation rather than the saved rotation flag. If that
        happens, re-save the rotated file with CalmPDF, which writes the new
        rotation directly to each page object so every viewer respects it.
      </p>

      <h3 className="text-lg font-medium mt-5 mb-2">Is it safe to rotate a confidential PDF online?</h3>
      <p className="text-sage-700 mb-4">
        Most online rotators upload your file to a server, which is a
        legitimate concern for anything sensitive. CalmPDF is different: the
        rotation runs in your browser, so the file never leaves your device.
        If a tool does not say &ldquo;no upload&rdquo; or &ldquo;runs in your
        browser,&rdquo; assume it uploads.
      </p>
    </ArticleShell>
  );
}
