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
    | "compress-pdf-for-visa-application";
  title: string;
  h1: string;
  metaDescription: string;
  introCopy: string;
  targetIntent: string;
  useCases: string[];
  practicalSteps: string[];
  limitationNote: string;
  ctaLabel: string;
  ctaHref: "/compress-pdf" | "/pdf-to-word" | "/merge-pdf";
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
    metaDescription: "Make oversized PDFs easier to email by reducing file size in your browser. See realistic size goals for major inbox providers.",
    introCopy: "If your attachment is too large for Gmail, Outlook, or work email, reduce your PDF before sending using CalmPDF.",
    targetIntent: "Users who need smaller attachments to pass email limits.",
    useCases: ["Gmail/Outlook attachment issues", "Corporate inbox restrictions", "Sending contracts and signed forms"],
    practicalSteps: ["Compress before attaching", "Aim under 10MB, or 5MB for stricter inboxes", "If still too large, split file or send cloud link"],
    limitationNote: "Exact target sizes are not guaranteed. Very image-heavy PDFs may still exceed strict inbox limits.",
    ctaLabel: "Compress PDF before sending",
    ctaHref: "/compress-pdf",
    faqs: [
      { q: "What size is safest for email?", a: "Under 10MB is broadly safe; under 5MB is safer for stricter corporate mail systems." },
      { q: "Can I keep files private?", a: "Yes. CalmPDF runs in your browser, so files are processed locally." },
    ],
    relatedLinks: [
      { href: "/how-to/reduce-pdf-file-size", label: "How to reduce PDF file size" },
      { href: "/compress-pdf-to-500kb", label: "Compress PDF to 500KB" },
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
];

export const PROGRAMMATIC_PAGE_BY_SLUG = Object.fromEntries(
  PROGRAMMATIC_PAGES.map((page) => [page.slug, page]),
) as Record<ProgrammaticPage["slug"], ProgrammaticPage>;
