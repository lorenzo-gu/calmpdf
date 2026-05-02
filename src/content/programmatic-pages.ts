import type { MetadataRoute } from "next";

export type ProgrammaticPage = {
  slug:
    | "compress-pdf-to-100kb"
    | "compress-pdf-to-200kb"
    | "compress-pdf-to-500kb"
    | "compress-pdf-to-1mb"
    | "compress-pdf-to-2mb"
    | "compress-pdf-for-email";
  title: string;
  h1: string;
  metaDescription: string;
  introCopy: string;
  targetIntent: string;
  limitationNote: string;
  ctaLabel: string;
  ctaHref: "/compress-pdf";
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
];

export const PROGRAMMATIC_PAGE_BY_SLUG = Object.fromEntries(
  PROGRAMMATIC_PAGES.map((page) => [page.slug, page]),
) as Record<ProgrammaticPage["slug"], ProgrammaticPage>;
