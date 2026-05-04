export type Tool = {
  slug: string;
  title: string;
  h1: string;
  tagline: string;
  description: string;
  keyword: string;
  steps: [string, string, string];
  uploadInstructions: string[];
  useCases: string[];
  limitations: string[];
  troubleshooting: string[];
  faqs: { q: string; a: string }[];
  relatedGuides?: { href: string; label: string }[];
};

export const TOOLS: Tool[] = [
  {
    slug: "edit-pdf",
    title: "Edit PDF — Add Text, Images, Signatures & Initials | CalmPDF",
    h1: "Edit PDF",
    tagline: "Add text, images, signatures, and initials in your browser.",
    description:
      "Edit a PDF directly in your browser. Add movable text boxes, images, signatures, and initials, then download a fresh edited copy.",
    keyword: "edit pdf",
    steps: [
      "Drop your PDF into the editor and choose the page you want to edit.",
      "Add text, images, signatures, or initials and drag each item into position.",
      "Download the edited PDF copy. Your original file stays unchanged.",
    ],
    uploadInstructions: [
      "Choose one PDF to open in the editor.",
      "Use toolbar actions to place text, images, signatures, or initials.",
      "Download a new edited copy when you are done.",
    ],
    useCases: [
      "Adding signature blocks to contracts before sending them.",
      "Placing initials on each reviewed page in approval workflows.",
      "Annotating forms with extra notes, labels, or corrections.",
    ],
    limitations: [
      "This MVP focuses on overlays, not rewriting existing embedded PDF text.",
      "Complex interactive form logic is not fully preserved in all files.",
      "Very large PDFs can feel slower on older phones or low-memory devices.",
    ],
    troubleshooting: [
      "If items do not place where expected, zoom in and re-position precisely.",
      "If a PDF fails to open, try a non-encrypted copy of the document.",
      "If performance slows down, close heavy tabs and reload the tool.",
    ],
    faqs: [
      {
        q: "Does the PDF stay open while I edit?",
        a: "Yes. Once your PDF is loaded, you can keep editing in the browser editor, moving text, images, signatures, and initials before downloading.",
      },
      {
        q: "Can I sign a PDF without uploading it?",
        a: "Yes. Signature generation and placement happen fully in your browser, so the PDF never leaves your device.",
      },
      {
        q: "Can I add initials too?",
        a: "Yes. You can add separate initials marks and move them independently from your full signature.",
      },
      {
        q: "Are my original files modified?",
        a: "No. CalmPDF always creates a new edited PDF for download and leaves your original file untouched.",
      },
    ],
    relatedGuides: [],
  },
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
    uploadInstructions: [
      "Select one PDF from your device.",
      "Pick 90°, 180°, or 270° rotation.",
      "Export the rotated copy.",
    ],
    useCases: [
      "Fixing sideways scans from mobile scanning apps.",
      "Correcting upside-down pages before sharing or printing.",
      "Standardizing document orientation across multi-page reports.",
    ],
    limitations: [
      "Current behavior applies one rotation setting to every page.",
      "Per-page rotation controls are not available in this release.",
      "Password-protected PDFs may need to be unlocked first.",
    ],
    troubleshooting: [
      "If output still looks wrong, verify your viewer is not auto-rotating pages.",
      "If loading stalls, retry with a smaller PDF to rule out memory limits.",
      "If the file is protected, unlock it first and rotate again.",
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
    relatedGuides: [{ href: "/how-to/rotate-pdf", label: "How to Rotate a PDF" }],
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
      "Click Compress PDF and wait for the lossless optimization to finish in your browser.",
      "Download the compressed PDF. The original stays untouched.",
    ],
    uploadInstructions: [
      "Choose one PDF file to compress.",
      "Start compression and wait for local browser processing.",
      "Download the optimized PDF file.",
    ],
    useCases: [
      "Meeting strict upload limits on portals and government forms.",
      "Sending scan-heavy files by email without bounce-backs.",
      "Reducing storage usage for shared document archives.",
    ],
    limitations: [
      "Current compression is lossless, so size reductions vary by file.",
      "Image-heavy scanned documents may only shrink modestly.",
      "No quality slider is available in this MVP.",
    ],
    troubleshooting: [
      "If compression appears stuck, refresh and retry with fewer open tabs.",
      "If the reduction is small, the PDF may already be optimized.",
      "If your device is low on memory, try the file on desktop.",
    ],
    faqs: [
      {
        q: "Is my PDF uploaded to a server?",
        a: "No. CalmPDF processes your file entirely inside your web browser using JavaScript. Your PDF never leaves your device.",
      },
      {
        q: "How much can CalmPDF compress a PDF?",
        a: "Results vary by file. Text-only PDFs may shrink slightly, while image-heavy scans often need future lossy controls for major reductions.",
      },
      {
        q: "Is there a file-size limit?",
        a: "The limit depends on your browser and device memory. Most laptops comfortably handle PDFs up to 200 MB.",
      },
      {
        q: "Does compression reduce quality?",
        a: "Current compression is lossless, so page visuals stay the same while metadata and object streams are optimized.",
      },
      {
        q: "Is CalmPDF free?",
        a: "Yes. All core PDF tools are free and unlimited, supported by unobtrusive ads.",
      },
    ],
    relatedGuides: [
      { href: "/how-to/compress-pdf-on-windows", label: "How to Compress a PDF on Windows" },
      { href: "/how-to/compress-pdf-on-mac", label: "How to Compress a PDF on Mac" },
      { href: "/how-to/rotate-pdf", label: "How to Rotate a PDF" },
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
      "Use the up/down arrow buttons to set the order you want them in.",
      "Click Merge and download the combined PDF.",
    ],
    uploadInstructions: [
      "Add two or more PDF files.",
      "Set file order with the move controls.",
      "Merge and download one combined PDF.",
    ],
    useCases: [
      "Combining invoice batches into one monthly package.",
      "Merging report sections from different teams.",
      "Creating one printable file from multiple attachments.",
    ],
    limitations: [
      "File ordering uses button controls, not drag-and-drop.",
      "Very large merge jobs depend on available device memory.",
      "Encrypted PDFs may need to be unlocked before merging.",
    ],
    troubleshooting: [
      "If merge fails, remove one file at a time to find the problematic input.",
      "If ordering is wrong, re-check sequence before clicking Merge.",
      "If the browser becomes unresponsive, split the merge into smaller batches.",
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
        a: "Yes. After adding your files, use the Move up and Move down arrow buttons in the list to change the order before merging.",
      },
      {
        q: "Is it really private?",
        a: "Yes. The merge happens inside your browser using JavaScript. No file is sent to our servers.",
      },
    ],
    relatedGuides: [
      { href: "/how-to/merge-pdf-files-free", label: "How to Merge PDF Files Free" },
      { href: "/how-to/compress-pdf-on-windows", label: "How to Compress a PDF on Windows" },
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
      "Pick the page range you want to extract.",
      "Download the resulting PDF file.",
    ],
    uploadInstructions: [
      "Upload one PDF to split.",
      "Enter the start and end pages for the range.",
      "Export the extracted range as a new PDF.",
    ],
    useCases: [
      "Sending only signature pages to clients.",
      "Extracting chapters from long handbooks.",
      "Separating appendices before sharing a draft.",
    ],
    limitations: [
      "This version exports one page range per run.",
      "It does not auto-generate one file per page yet.",
      "Encrypted or damaged source files may not load.",
    ],
    troubleshooting: [
      "If output pages are wrong, verify page numbers in your PDF viewer.",
      "If extraction fails, retry with a narrower range first.",
      "If the document is protected, unlock it before splitting.",
    ],
    faqs: [
      {
        q: "Can I extract a single page?",
        a: "Yes. Enter the page number in both 'from' and 'to' fields (for example, 5 to 5) to extract just that page.",
      },
      {
        q: "Can I split every page into separate files?",
        a: "Not yet. This version supports extracting a single page range per run.",
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
    relatedGuides: [
      { href: "/how-to/split-pdf-into-multiple-files", label: "How to Split a PDF into Multiple Files" },
      { href: "/extract-pdf-pages", label: "Extract PDF Pages tool" },
    ],
  },
  {
    slug: "reorder-pdf-pages",
    title: "Reorder PDF Pages — Rearrange Page Order Online | CalmPDF",
    h1: "Reorder PDF pages",
    tagline: "Move PDF pages into the exact order you need, directly in your browser.",
    description:
      "Reorder PDF pages using drag-and-drop or move buttons, then download a new PDF copy. CalmPDF keeps your document on your device.",
    keyword: "reorder pdf pages",
    steps: [
      "Drop your PDF into the reorder tool.",
      "Move pages with drag-and-drop or up/down controls.",
      "Download the reordered PDF copy.",
    ],
    uploadInstructions: [
      "Open one PDF in the page organizer.",
      "Move pages into the desired order.",
      "Download the reordered PDF copy.",
    ],
    useCases: [
      "Reordering scanned packets into final reading order.",
      "Moving summary pages to the front of a report.",
      "Fixing out-of-order pages after manual scanning.",
    ],
    limitations: [
      "Large page counts can be slower on low-memory devices.",
      "Some secured PDFs may not open without prior unlocking.",
      "Exact rendering speed depends on browser and hardware.",
    ],
    troubleshooting: [
      "If moving pages feels laggy, close other heavy tabs first.",
      "If order is still wrong, re-open and verify before export.",
      "If loading fails, save a fresh PDF copy and try again.",
    ],
    faqs: [
      {
        q: "Are my PDF pages uploaded to a server?",
        a: "No. Reordering runs entirely in your browser, so your file stays on your device.",
      },
      {
        q: "Can I reorder pages without drag-and-drop?",
        a: "Yes. Each page row includes Move up and Move down buttons for keyboard-friendly reordering.",
      },
      {
        q: "What if my PDF has one page?",
        a: "You can still load and download it, but page order cannot change because there is only one page.",
      },
      {
        q: "Can CalmPDF open every PDF?",
        a: "Most standard PDFs work. Some encrypted or damaged PDFs may fail to load in browser-only tools.",
      },
    ],
    relatedGuides: [
      { href: "/how-to/combine-pdf-files", label: "How to Combine PDF Files" },
      { href: "/how-to/split-pdf-into-multiple-files", label: "How to Split a PDF into Multiple Files" },
    ],
  },

  {
    slug: "word-to-pdf",
    title: "Word to PDF — Convert Word Documents Online | CalmPDF",
    h1: "Word to PDF",
    tagline: "Turn a Word document into a PDF in your browser.",
    description:
      "Convert a DOCX file into a PDF directly in your browser. Private, simple, and free.",
    keyword: "word to pdf",
    steps: [
      "Drop your DOCX file into the converter.",
      "CalmPDF renders the document in your browser.",
      "Download the converted PDF. Your document is never uploaded.",
    ],
    uploadInstructions: [
      "Choose one .docx file.",
      "Start conversion to render the document to PDF.",
      "Download the generated PDF file.",
    ],
    useCases: [
      "Finalizing resumes before job applications.",
      "Sharing proposals in a fixed print-friendly format.",
      "Converting drafts for cross-device consistency.",
    ],
    limitations: [
      "This MVP supports .docx only (not legacy .doc).",
      "Complex layouts, custom fonts, and tracked changes may differ.",
      "Advanced Word objects may not match pixel-perfect output.",
    ],
    troubleshooting: [
      "If layout shifts, simplify fonts/styles in Word and convert again.",
      "If conversion fails, re-save the file as a fresh .docx first.",
      "If mobile conversion is slow, try desktop for better memory headroom.",
    ],
    faqs: [
      {
        q: "Is my Word document uploaded?",
        a: "No. The conversion happens locally in your browser.",
      },
      {
        q: "Will the PDF look exactly like Word?",
        a: "Simple documents should convert well. Complex formatting, custom fonts, comments, tracked changes, or embedded objects may not match perfectly.",
      },
      {
        q: "Can I convert old .doc files?",
        a: "Not in this MVP. This version supports .docx files only.",
      },
      {
        q: "Does CalmPDF preserve tracked changes and comments?",
        a: "No. This converter is built for final DOCX content. Comments, tracked changes, and advanced Word review metadata may not render in the exported PDF.",
      },
      {
        q: "Does this work on mobile?",
        a: "It should work in modern browsers, but larger documents may work better on desktop.",
      },
    ],
    relatedGuides: [
      { href: "/how-to/convert-word-to-pdf", label: "How to Convert Word to PDF" },
      { href: "/how-to/pdf-conversion-troubleshooting", label: "PDF Conversion Troubleshooting" },
    ],
  },
  {
    slug: "pdf-to-word",
    title: "PDF to Word Converter — Convert PDF to Word Free | CalmPDF",
    h1: "PDF to Word",
    tagline: "Convert simple PDFs into editable Word documents (.docx).",
    description:
      "Convert a text-based PDF into a Word-compatible .docx file directly in your browser. No upload, no signup.",
    keyword: "pdf to word",
    steps: [
      "Drop your PDF into the converter.",
      "CalmPDF extracts text and creates a Word-compatible .docx file.",
      "Download the Word file (.docx). Your original PDF stays on your device.",
    ],
    uploadInstructions: [
      "Select one PDF to convert.",
      "Run conversion to generate an editable .docx.",
      "Download the DOCX and review formatting.",
    ],
    useCases: [
      "Reusing text from old PDFs in new proposals.",
      "Editing policy drafts originally shared as PDF.",
      "Creating a starting DOCX for translation/localization.",
    ],
    limitations: [
      "Best results are for simple text-first PDFs.",
      "Scanned PDFs require OCR, which is not included yet.",
      "Complex tables, images, and multi-column layouts may degrade.",
    ],
    troubleshooting: [
      "If output is missing text, confirm the source PDF is selectable text.",
      "If layout is rough, copy core text into a fresh Word template.",
      "If conversion fails, retry with a smaller or simpler PDF first.",
    ],
    faqs: [
      {
        q: "Is my PDF uploaded?",
        a: "No. The conversion runs in your browser, so your PDF never leaves your device.",
      },
      {
        q: "Will the Word file look exactly like the PDF?",
        a: "Not in this first version. The MVP is best for simple, text-based PDFs and may not preserve complex layouts, images, or tables.",
      },
      {
        q: "Can it convert scanned PDFs?",
        a: "Not yet. Scanned PDFs need OCR, which is planned as a future improvement.",
      },
      {
        q: "Can I edit the DOCX after downloading?",
        a: "Yes. The output is a Word-compatible DOCX file that can be opened in Word, Google Docs, Pages, and similar editors.",
      },
      {
        q: "Why is my converted Word file missing tables or images?",
        a: "The current converter prioritizes text extraction. Complex elements like table structure, embedded images, and multi-column layout are not fully reconstructed in this MVP.",
      },
    ],
    relatedGuides: [
      { href: "/how-to/convert-pdf-to-word", label: "How to Convert PDF to Word" },
      { href: "/how-to/pdf-conversion-troubleshooting", label: "PDF Conversion Troubleshooting" },
    ],
  },
];

export function getTool(slug: string): Tool | undefined {
  return TOOLS.find((t) => t.slug === slug);
}
