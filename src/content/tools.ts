export type Tool = {
  slug: string;
  title: string;
  h1: string;
  tagline: string;
  description: string;
  keyword: string;
  steps: [string, string, string];
  faqs: { q: string; a: string }[];
};

export const TOOLS: Tool[] = [
  {
    slug: "rotate-pdf",
    title: "Rotate PDF — Turn PDF Pages Left or Right | CalmPDF",
    h1: "Rotate PDF",
    tagline: "Rotate all pages in a PDF in your browser. Fast and private.",
    description:
      "Rotate a PDF 90, 180, or 270 degrees directly in your browser. CalmPDF keeps your file on your device and creates a freshly rotated copy to download.",
    keyword: "rotate pdf",
    steps: [
      "Drop your PDF into the box above.",
      "Choose how far you want to rotate the pages.",
      "Download the rotated PDF. Your original file stays untouched.",
    ],
    faqs: [
      {
        q: "Will CalmPDF rotate every page?",
        a: "Yes. This first version rotates every page in the PDF by the same amount, which is perfect for scans that came in sideways or upside down.",
      },
      {
        q: "Can I rotate just one page?",
        a: "Not yet. Phase 2 starts with whole-document rotation first. Per-page controls can be added later on top of the same browser-based engine.",
      },
      {
        q: "Is my file uploaded anywhere?",
        a: "No. Rotation happens entirely inside your browser using JavaScript, so your PDF never leaves your device.",
      },
      {
        q: "Will rotating reduce quality?",
        a: "No. Rotating pages changes page metadata and keeps the original PDF content intact, so there is no image-quality loss.",
      },
    ],
  },
  {
    slug: "compress-pdf",
    title: "Compress PDF — Reduce PDF File Size for Free | CalmPDF",
    h1: "Compress PDF",
    tagline: "Shrink a PDF for email or upload. Runs in your browser.",
    description:
      "Reduce the size of a PDF file without uploading it. CalmPDF compresses PDFs directly in your browser, so your files never leave your device.",
    keyword: "compress pdf",
    steps: [
      "Drop your PDF into the box above — no upload required.",
      "Pick a compression level. Lower quality means a smaller file.",
      "Download the compressed PDF. The original stays untouched.",
    ],
    faqs: [
      {
        q: "Is my PDF uploaded to a server?",
        a: "No. CalmPDF processes your file entirely inside your web browser using JavaScript. Your PDF never leaves your device.",
      },
      {
        q: "How much can CalmPDF compress a PDF?",
        a: "Typical scans and image-heavy PDFs shrink by 40–80%. Text-only PDFs are already small and compress less.",
      },
      {
        q: "Is there a file-size limit?",
        a: "The limit depends on your browser and device memory. Most laptops comfortably handle PDFs up to 200 MB.",
      },
      {
        q: "Does compression reduce quality?",
        a: "Images inside the PDF are re-encoded at a lower resolution. Text stays crisp. Choose the 'High quality' preset if you need to keep images sharp.",
      },
      {
        q: "Is CalmPDF free?",
        a: "Yes. All core PDF tools are free and unlimited, supported by unobtrusive ads.",
      },
    ],
  },
  {
    slug: "merge-pdf",
    title: "Merge PDF — Combine Multiple PDFs Into One | CalmPDF",
    h1: "Merge PDF",
    tagline: "Combine two or more PDFs into a single file. Private and fast.",
    description:
      "Combine multiple PDF files into a single PDF, in the order you choose. Runs entirely in your browser — your files are never uploaded.",
    keyword: "merge pdf",
    steps: [
      "Drop all the PDFs you want to combine into the box.",
      "Drag the files to set the order you want them in.",
      "Click Merge and download the combined PDF.",
    ],
    faqs: [
      {
        q: "How many PDFs can I merge at once?",
        a: "There is no hard limit in CalmPDF. The practical limit is your device memory — most users can merge dozens of files without issue.",
      },
      {
        q: "Will the bookmarks and links be kept?",
        a: "Yes. CalmPDF preserves internal links, bookmarks, and form fields when merging.",
      },
      {
        q: "Can I change the order of the PDFs?",
        a: "Yes. After adding your files, drag them up or down in the list to change the order before merging.",
      },
      {
        q: "Is it really private?",
        a: "Yes. The merge happens inside your browser using JavaScript. No file is sent to our servers.",
      },
    ],
  },
  {
    slug: "split-pdf",
    title: "Split PDF — Extract Pages From a PDF | CalmPDF",
    h1: "Split PDF",
    tagline: "Extract a range of pages or split one PDF into many.",
    description:
      "Split a PDF by page ranges or extract a single page. CalmPDF runs entirely in your browser, so your documents stay on your device.",
    keyword: "split pdf",
    steps: [
      "Drop your PDF into the box above.",
      "Pick a page range, or choose 'Every page' to split into single-page PDFs.",
      "Download the resulting file or ZIP.",
    ],
    faqs: [
      {
        q: "Can I extract a single page?",
        a: "Yes. Enter the page number in both 'from' and 'to' fields (for example, 5 to 5) to extract just that page.",
      },
      {
        q: "What does 'Every page' do?",
        a: "It splits the PDF so each page becomes its own PDF file, then packages them into a ZIP download.",
      },
      {
        q: "Are the original PDFs changed?",
        a: "No. CalmPDF never modifies your original file. It creates a new PDF for you to download.",
      },
      {
        q: "Does it work offline?",
        a: "Once the page has loaded once, yes — splitting happens entirely in your browser.",
      },
    ],
  },
];

export function getTool(slug: string): Tool | undefined {
  return TOOLS.find((t) => t.slug === slug);
}
