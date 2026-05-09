import type { MetadataRoute } from "next";

export type ProgrammaticPage = {
  slug:
    | "compress-pdf-to-100kb"
    | "compress-pdf-to-200kb"
    | "compress-pdf-to-500kb"
    | "compress-pdf-to-1mb"
    | "compress-pdf-to-2mb"
    | "compress-pdf-for-email"
    | "pdf-to-word-for-contracts"
    | "merge-pdf-for-mortgage-application"
    | "compress-pdf-for-visa-application"
    | "merge-pdf-files-online-free"
    | "split-pdf-into-separate-pages"
    | "rotate-pdf-landscape-to-portrait"
    | "pdf-tools-for-students"
    | "pdf-tools-for-recruiters-job-applications";
  title: string;
  h1: string;
  metaDescription: string;
  introCopy: string;
  targetIntent: string;
  useCases: string[];
  practicalSteps: string[];
  limitationNote: string;
  ctaLabel: string;
  ctaHref: "/compress-pdf" | "/pdf-to-word" | "/merge-pdf" | "/split-pdf" | "/rotate-pdf";
  faqs: { q: string; a: string }[];
  relatedLinks: { href: string; label: string }[];
  sitemap: {
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  };
};

export const PROGRAMMATIC_PAGES: ProgrammaticPage[] = [
  {
    slug: "compress-pdf-to-100kb",
    title: "Compress PDF to 100KB | CalmPDF",
    h1: "Compress PDF to 100KB",
    metaDescription: "Try to reduce your PDF below 100KB with private browser-only compression. Learn what files can realistically hit 100KB and what to do if they cannot.",
    introCopy: "Need a strict 100KB upload? This is common on government and admissions forms. Use CalmPDF to reduce file size directly in your browser.",
    targetIntent: "Users trying to satisfy strict form limits (100KB) for resumes, IDs, and official submissions.",
    useCases: ["Government and visa portals", "University admissions uploads", "Job applications with strict attachment caps"],
    practicalSteps: ["Compress once in CalmPDF and check final file size", "If still above limit, re-export source file with smallest-size settings", "For scanned pages, lower DPI and remove unnecessary pages"],
    limitationNote: "Exact 100KB output is not guaranteed. Image-heavy scans may stay above target even after compression.",
    ctaLabel: "Compress PDF to the smallest size",
    ctaHref: "/compress-pdf",
    faqs: [
      { q: "Can every PDF reach 100KB?", a: "No. Text-heavy PDFs often can, but scanned or photo-heavy files may not." },
      { q: "Will text quality drop?", a: "Text generally remains sharp; the biggest tradeoffs are on embedded images." },
    ],
    relatedLinks: [
      { href: "/how-to/reduce-pdf-file-size", label: "How to reduce PDF file size" },
      { href: "/compress-pdf-to-200kb", label: "Compress PDF to 200KB" },
    ],
    sitemap: { changeFrequency: "monthly", priority: 0.75 },
  },
  {
    slug: "compress-pdf-to-200kb",
    title: "Compress PDF to 200KB | CalmPDF",
    h1: "Compress PDF to 200KB",
    metaDescription: "Need your PDF under 200KB? Compress in your browser and learn realistic expectations for scans, photos, and text-based documents.",
    introCopy: "A 200KB cap is common in KYC, application, and exam portals. CalmPDF helps you reduce size privately, with no upload.",
    targetIntent: "Users targeting a 200KB hard limit for online forms and verification systems.",
    useCases: ["KYC/banking upload forms", "Scholarship and exam portals", "HR onboarding workflows"],
    practicalSteps: ["Start with browser compression", "If needed, re-scan at 150-200 DPI", "Split long scanned PDFs and submit only required pages"],
    limitationNote: "Exact 200KB output is not guaranteed, especially for multi-page scanned PDFs.",
    ctaLabel: "Compress PDF for 200KB targets",
    ctaHref: "/compress-pdf",
    faqs: [
      { q: "Is 200KB realistic for scans?", a: "For short scans, often yes. For longer scans, you may need lower DPI or fewer pages." },
      { q: "Is compression private?", a: "Yes. Compression runs in your browser; files are not uploaded by CalmPDF." },
    ],
    relatedLinks: [
      { href: "/how-to/compress-pdf-on-windows", label: "How to compress PDF on Windows" },
      { href: "/compress-pdf-to-500kb", label: "Compress PDF to 500KB" },
    ],
    sitemap: { changeFrequency: "monthly", priority: 0.75 },
  },
  {
    slug: "compress-pdf-to-500kb",
    title: "Compress PDF to 500KB | CalmPDF",
    h1: "Compress PDF to 500KB",
    metaDescription: "Reduce a PDF toward 500KB using private in-browser compression. Great for upload forms and lightweight document sharing.",
    introCopy: "500KB is a practical target for many uploads. Use CalmPDF to shrink PDFs quickly while keeping workflow private.",
    targetIntent: "Users aiming for a moderate size cap that balances quality and compatibility.",
    useCases: ["General online forms", "School and healthcare portals", "Lightweight document sharing"],
    practicalSteps: ["Run one compression pass", "Check if visuals remain acceptable", "If still large, reduce image dimensions in source and compress again"],
    limitationNote: "Exact 500KB output is not guaranteed. Heavily visual PDFs may remain larger.",
    ctaLabel: "Compress PDF now",
    ctaHref: "/compress-pdf",
    faqs: [
      { q: "What compresses best to 500KB?", a: "Text-heavy files and short forms usually compress the easiest." },
      { q: "What if my file is still too large?", a: "Try splitting pages or re-exporting with smaller images first." },
    ],
    relatedLinks: [
      { href: "/how-to/compress-pdf-without-losing-quality", label: "Compress PDF without losing quality" },
      { href: "/compress-pdf-to-1mb", label: "Compress PDF to 1MB" },
    ],
    sitemap: { changeFrequency: "monthly", priority: 0.75 },
  },
  {
    slug: "compress-pdf-to-1mb",
    title: "Compress PDF to 1MB | CalmPDF",
    h1: "Compress PDF to 1MB",
    metaDescription: "Need a PDF under 1MB? Use CalmPDF in your browser and see what impacts whether image-heavy files can hit the target.",
    introCopy: "1MB is a common upload threshold for applications and forms. CalmPDF gives you a private way to reduce file size quickly.",
    targetIntent: "Users trying to meet a standard 1MB upload requirement.",
    useCases: ["Resume and cover letter submissions", "Client/contract document portals", "Application systems with medium limits"],
    practicalSteps: ["Compress and verify size", "Re-export source as web-optimized PDF", "Split appendices or extra pages when allowed"],
    limitationNote: "Exact 1MB output is not guaranteed; outcomes depend on image density and original export settings.",
    ctaLabel: "Compress PDF for 1MB limit",
    ctaHref: "/compress-pdf",
    faqs: [
      { q: "Can a 10MB scan reach 1MB?", a: "Sometimes, but not always. Multi-page high-DPI scans may remain above 1MB." },
      { q: "Should I compress or re-export?", a: "Re-exporting source files with web/small-size settings often helps first." },
    ],
    relatedLinks: [
      { href: "/how-to/reduce-pdf-file-size", label: "How to reduce PDF file size" },
      { href: "/compress-pdf-to-2mb", label: "Compress PDF to 2MB" },
    ],
    sitemap: { changeFrequency: "monthly", priority: 0.75 },
  },
  {
    slug: "compress-pdf-to-2mb",
    title: "Compress PDF to 2MB | CalmPDF",
    h1: "Compress PDF to 2MB",
    metaDescription: "Bring large PDFs closer to 2MB for job portals, school systems, and support forms using browser-only compression.",
    introCopy: "2MB is one of the most common document caps online. CalmPDF helps you reduce PDFs in-browser with no account required.",
    targetIntent: "Users with 2MB submission caps that still need readable output.",
    useCases: ["ATS and recruiting systems", "School and support ticket uploads", "Government filing forms"],
    practicalSteps: ["Compress first to preserve readability", "Reduce page count where permitted", "For scans, lower DPI before exporting"],
    limitationNote: "Exact 2MB output is not guaranteed for large scans or image-rich portfolios.",
    ctaLabel: "Compress PDF for 2MB uploads",
    ctaHref: "/compress-pdf",
    faqs: [
      { q: "Is 2MB usually achievable?", a: "For many text-heavy files, yes. For scans, it depends on page count and DPI." },
      { q: "Does CalmPDF upload files?", a: "No. Compression is handled locally in your browser." },
    ],
    relatedLinks: [
      { href: "/how-to/compress-pdf-on-mac", label: "How to compress PDF on Mac" },
      { href: "/compress-pdf-for-email", label: "Compress PDF for email" },
    ],
    sitemap: { changeFrequency: "monthly", priority: 0.75 },
  },
  {
    slug: "compress-pdf-for-email",
    title: "Compress PDF for Email | CalmPDF",
    h1: "Compress PDF for Email",
    metaDescription: "Compress attachment PDFs for email with realistic goals for Gmail and Outlook limits, before/after examples, and quality tradeoffs.",
    introCopy: "If your PDF is too large for email, compress it before you attach it. CalmPDF helps you reduce PDF size for Gmail, Outlook, and stricter work inboxes without uploading files.",
    targetIntent: "People who need to send a PDF attachment that exceeds Gmail, Outlook, or company size limits.",
    useCases: [
      "Reduce PDF size for Gmail when attachments approach the 25 MB limit",
      "Compress attachment PDFs for Outlook.com (25 MB) and keep margin for message overhead",
      "Handle 'PDF too large for email' errors on corporate systems that commonly cap messages at 10-20 MB",
    ],
    practicalSteps: [
      "Check your current file size, then compress before attaching",
      "Use a practical target: under 20 MB for consumer inboxes, under 10 MB for mixed recipients, under 5 MB for stricter corporate delivery",
      "If still too large, split the PDF (send part 1/part 2) or share a cloud link",
      "Review text, signatures, and charts after compression so readability stays acceptable",
      "For scanned/image-heavy PDFs, re-scan around 150-200 DPI and compress again",
    ],
    limitationNote: "No tool can guarantee exact output sizes for every file. Large scanned or image-heavy PDFs may need splitting, lower-DPI rescans, or link sharing instead of a single attachment.",
    ctaLabel: "Compress PDF for email",
    ctaHref: "/compress-pdf",
    faqs: [
      { q: "What is the email PDF size limit for Gmail and Outlook?", a: "Gmail attachments are typically capped at 25 MB. Outlook.com file attachments are also typically capped at 25 MB, while some Outlook/Exchange business environments use lower limits such as 10 MB or 20 MB." },
      { q: "How much can I usually compress a PDF for email?", a: "Text-first PDFs often shrink meaningfully, while photo-heavy scans shrink less. A practical example is reducing a 14 MB text-heavy contract to around 6-8 MB, versus a 14 MB scan that may only drop to around 10-12 MB." },
      { q: "How should I think about quality tradeoffs?", a: "Higher compression can soften scanned images and small text inside images. Always review signatures, ID numbers, and fine print before sending. Keep the original file for records." },
      { q: "What if my PDF is still too large for email after compression?", a: "Split the PDF into smaller parts, remove unnecessary pages, or share via a cloud link. This is often the most reliable path for very large image-heavy files." },
      { q: "Can I compress attachment PDFs privately?", a: "Yes. CalmPDF runs in your browser so files stay on your device during processing." },
    ],
    relatedLinks: [
      { href: "/compress-pdf", label: "Compress PDF tool" },
      { href: "/merge-pdf", label: "Merge PDF" },
      { href: "/split-pdf", label: "Split PDF" },
      { href: "/how-to/reduce-pdf-file-size", label: "PDF size guide: how to reduce PDF file size" },
    ],
    sitemap: { changeFrequency: "monthly", priority: 0.75 },
  },
  {
    slug: "pdf-to-word-for-contracts",
    title: "PDF to Word for Contracts | CalmPDF",
    h1: "Convert PDF to Word for Contracts",
    metaDescription: "Turn contract PDFs into editable Word files in your browser so you can revise clauses, pricing tables, and terms faster.",
    introCopy: "Need to edit a contract that only exists as PDF? Convert it to Word first, then make redlines or comments before sharing back with legal or procurement.",
    targetIntent: "Teams and freelancers who need contract edits without retyping entire documents.",
    useCases: ["MSA and SOW revisions", "Vendor agreement redlines", "Procurement and legal review cycles"],
    practicalSteps: ["Convert PDF to Word and review formatting", "Apply tracked changes in Word before final approval", "Export final version back to PDF for signatures"],
    limitationNote: "Complex layouts (tables, stamps, scanned signatures) may need light cleanup after conversion.",
    ctaLabel: "Convert contract PDF to Word",
    ctaHref: "/pdf-to-word",
    faqs: [
      { q: "Will the converted file be editable?", a: "Yes, headings, paragraphs, and most tables become editable Word content." },
      { q: "Is this suitable for signed contracts?", a: "Use it for drafting and redlines; keep the signed original PDF for records." },
    ],
    relatedLinks: [
      { href: "/how-to/convert-pdf-to-word", label: "How to convert PDF to Word" },
      { href: "/word-to-pdf", label: "Convert Word back to PDF" },
    ],
    sitemap: { changeFrequency: "monthly", priority: 0.8 },
  },
  {
    slug: "merge-pdf-for-mortgage-application",
    title: "Merge PDF for Mortgage Application | CalmPDF",
    h1: "Merge PDF for Mortgage Applications",
    metaDescription: "Combine pay stubs, bank statements, ID scans, and forms into one clean PDF before uploading to a mortgage portal.",
    introCopy: "Lenders often ask for one consolidated file. Merge your mortgage documents in order so underwriting teams can review faster.",
    targetIntent: "Home buyers and loan officers preparing complete mortgage document packets.",
    useCases: ["Purchase mortgage submissions", "Refinance document packages", "Broker and lender portal uploads"],
    practicalSteps: ["Arrange documents in lender-requested order", "Merge into one PDF", "Verify readability and page order before upload"],
    limitationNote: "Large scanned files may create oversized packets; compress after merging if your portal has size limits.",
    ctaLabel: "Merge mortgage PDFs",
    ctaHref: "/merge-pdf",
    faqs: [
      { q: "What order should I use?", a: "Follow the exact checklist from your lender so underwriting can process it quickly." },
      { q: "Can I combine statements from multiple banks?", a: "Yes. Include clear page labels and keep statement months in sequence." },
    ],
    relatedLinks: [
      { href: "/how-to/combine-pdf-files", label: "How to combine PDF files" },
      { href: "/compress-pdf-to-2mb", label: "Compress PDF to 2MB" },
    ],
    sitemap: { changeFrequency: "monthly", priority: 0.8 },
  },
  {
    slug: "compress-pdf-for-visa-application",
    title: "Compress PDF for Visa Application | CalmPDF",
    h1: "Compress PDF for Visa Applications",
    metaDescription: "Reduce visa-support PDFs to meet strict embassy and portal upload limits without sharing files to a server.",
    introCopy: "Visa systems often reject files that are too large. Compress passports, bank letters, and supporting documents before submission.",
    targetIntent: "Applicants trying to pass strict visa portal size limits on first upload.",
    useCases: ["Tourist and student visa portals", "Work permit document uploads", "Embassy appointment documentation"],
    practicalSteps: ["Compress each supporting PDF", "Check if each file is within the required size cap", "Rename clearly before uploading to the visa portal"],
    limitationNote: "Exact size targets are not guaranteed for image-heavy passport scans; rescanning at lower DPI may be required.",
    ctaLabel: "Compress visa PDFs",
    ctaHref: "/compress-pdf",
    faqs: [
      { q: "Will compression affect document readability?", a: "Usually text remains readable; always review names, numbers, and stamps before submission." },
      { q: "Is this private enough for personal documents?", a: "CalmPDF processes files in your browser, so documents stay on your device." },
    ],
    relatedLinks: [
      { href: "/compress-pdf-to-500kb", label: "Compress PDF to 500KB" },
      { href: "/how-to/compress-pdf-without-losing-quality", label: "Compress without losing quality" },
    ],
    sitemap: { changeFrequency: "monthly", priority: 0.8 },
  },
  {
    slug: "merge-pdf-files-online-free",
    title: "Merge PDF Files Online Free | CalmPDF",
    h1: "Merge PDF Files Online Free",
    metaDescription: "Combine multiple PDFs into one file for free in your browser. Keep pages in order and prepare one clean document for sharing or uploads.",
    introCopy: "Need one PDF instead of many attachments? Merge PDF files online for free with CalmPDF and keep everything on your device.",
    targetIntent: "People who want a no-signup way to combine PDFs for submissions, sharing, or recordkeeping.",
    useCases: ["Combining invoices for accounting", "Bundling signed pages into one agreement", "Sending one attachment instead of many files"],
    practicalSteps: ["Add all PDFs and drag them into the final order", "Merge and review page flow, numbering, and orientation", "Compress afterward if your destination has file-size limits"],
    limitationNote: "Merging does not reduce file size by itself; run compression after merging if needed.",
    ctaLabel: "Merge PDF files for free",
    ctaHref: "/merge-pdf",
    faqs: [
      { q: "Is it really free to merge PDFs?", a: "Yes. CalmPDF lets you merge PDFs in-browser without creating an account." },
      { q: "Will merging change formatting?", a: "No. Merging combines pages as-is, so layout and quality stay intact." },
    ],
    relatedLinks: [
      { href: "/how-to/combine-pdf-files", label: "How to combine PDF files" },
      { href: "/split-pdf", label: "Split PDF pages" },
    ],
    sitemap: { changeFrequency: "monthly", priority: 0.8 },
  },
  {
    slug: "split-pdf-into-separate-pages",
    title: "Split PDF into Separate Pages | CalmPDF",
    h1: "Split PDF into Separate Pages",
    metaDescription: "Extract every page of a PDF into separate files in your browser. Useful for forms, applications, and sharing only the pages you need.",
    introCopy: "If you only need selected pages, split your PDF into separate pages and share exactly what each recipient needs.",
    targetIntent: "Users who need to break a long PDF into smaller, page-level files for workflows and uploads.",
    useCases: ["Submitting only signature pages", "Separating student assignments by chapter", "Sharing one statement page with support teams"],
    practicalSteps: ["Upload your document and choose split mode", "Export individual pages or page ranges", "Rename output files clearly before sending"],
    limitationNote: "Splitting keeps original quality but can create many files, so naming and organization matter.",
    ctaLabel: "Split PDF now",
    ctaHref: "/split-pdf",
    faqs: [
      { q: "Does splitting reduce quality?", a: "No. Split pages keep the same content quality as the original PDF." },
      { q: "Can I split by ranges instead of every page?", a: "Yes. You can extract one page, multiple pages, or custom ranges." },
    ],
    relatedLinks: [
      { href: "/how-to/extract-pages-from-pdf", label: "How to extract pages from a PDF" },
      { href: "/merge-pdf", label: "Merge PDFs back together" },
    ],
    sitemap: { changeFrequency: "monthly", priority: 0.8 },
  },
  {
    slug: "rotate-pdf-landscape-to-portrait",
    title: "Rotate PDF Landscape to Portrait | CalmPDF",
    h1: "Rotate PDF Landscape to Portrait",
    metaDescription: "Fix sideways or landscape PDF pages by rotating them to portrait orientation directly in your browser.",
    introCopy: "Got a PDF with sideways scans? Rotate landscape pages to portrait before printing, sharing, or uploading.",
    targetIntent: "Users correcting page orientation so PDFs are readable on phones, ATS systems, and printers.",
    useCases: ["Phone-scanned forms uploaded sideways", "Landscape bank statements for uploads", "Portrait-only portals that reject rotated pages"],
    practicalSteps: ["Open the PDF and identify incorrect page orientation", "Rotate only the affected pages", "Save and verify orientation on desktop and mobile"],
    limitationNote: "Rotation changes orientation metadata and page display but does not edit underlying text content.",
    ctaLabel: "Rotate PDF pages",
    ctaHref: "/rotate-pdf",
    faqs: [
      { q: "Can I rotate just one page?", a: "Yes. You can rotate specific pages without changing the whole document." },
      { q: "Will rotated pages print correctly?", a: "Yes. After saving, most PDF viewers and printers use the new orientation." },
    ],
    relatedLinks: [
      { href: "/how-to/rotate-pdf-pages", label: "How to rotate PDF pages" },
      { href: "/split-pdf", label: "Split pages before rotating" },
    ],
    sitemap: { changeFrequency: "monthly", priority: 0.8 },
  },
  {
    slug: "pdf-tools-for-students",
    title: "PDF Tools for Students | CalmPDF",
    h1: "PDF Tools for Students",
    metaDescription: "Use free browser-based PDF tools for class notes, assignments, and scholarship submissions: split, merge, compress, and convert quickly.",
    introCopy: "Students handle PDFs constantly: lecture slides, assignment hand-ins, and applications. CalmPDF gives you fast tools without installs.",
    targetIntent: "Students looking for practical PDF workflows for coursework and admissions.",
    useCases: ["Compressing assignment uploads", "Merging appendix pages into one submission", "Converting PDFs to editable documents for notes"],
    practicalSteps: ["Choose the tool based on your submission requirement", "Preview output before uploading to your LMS", "Keep originals and submit a clearly named final file"],
    limitationNote: "Some school portals enforce strict size limits, so compressing may require removing nonessential pages.",
    ctaLabel: "Open student PDF tools",
    ctaHref: "/compress-pdf",
    faqs: [
      { q: "Which PDF tool do students use most?", a: "Compression and merge are the most common for LMS and scholarship uploads." },
      { q: "Do I need to install software?", a: "No. CalmPDF runs in your browser, so you can work from school or personal devices." },
    ],
    relatedLinks: [
      { href: "/compress-pdf-for-email", label: "Compress PDFs for professor email" },
      { href: "/how-to/reduce-pdf-file-size", label: "Reduce PDF file size guide" },
    ],
    sitemap: { changeFrequency: "monthly", priority: 0.8 },
  },
  {
    slug: "pdf-tools-for-recruiters-job-applications",
    title: "PDF Tools for Recruiters & Job Applications | CalmPDF",
    h1: "PDF Tools for Recruiters and Job Applications",
    metaDescription: "Prepare hiring and job-application PDFs faster: compress resumes, merge supporting docs, split portfolios, and fix page orientation.",
    introCopy: "Recruiters and candidates both depend on clean PDFs. Use CalmPDF to format documents for ATS portals, inbox limits, and hiring workflows.",
    targetIntent: "Recruiters and applicants who need submission-ready PDFs for ATS systems and hiring communications.",
    useCases: ["Compressing resume and cover letter uploads", "Merging references and certificates", "Rotating scanned documents for ATS readability"],
    practicalSteps: ["Compress files to pass portal or inbox limits", "Merge supporting documents in logical hiring order", "Double-check readability on mobile and desktop before submission"],
    limitationNote: "ATS systems vary; always verify required file size, naming, and document type before final upload.",
    ctaLabel: "Prepare job-application PDFs",
    ctaHref: "/compress-pdf",
    faqs: [
      { q: "What file size should resumes target?", a: "Under 1MB is usually safe for ATS portals, with smaller files loading faster for reviewers." },
      { q: "Should candidates merge all documents into one PDF?", a: "Only if the listing asks for a single file; otherwise upload each requested file separately." },
    ],
    relatedLinks: [
      { href: "/compress-pdf-to-1mb", label: "Compress PDF to 1MB" },
      { href: "/merge-pdf-files-online-free", label: "Merge PDF files online free" },
    ],
    sitemap: { changeFrequency: "monthly", priority: 0.8 },
  },

];

export const PROGRAMMATIC_PAGE_BY_SLUG = Object.fromEntries(
  PROGRAMMATIC_PAGES.map((page) => [page.slug, page]),
) as Record<ProgrammaticPage["slug"], ProgrammaticPage>;
