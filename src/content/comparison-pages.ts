import type { MetadataRoute } from "next";

export type ComparisonPage = {
  slug:
    | "ilovepdf-alternative"
    | "smallpdf-alternative"
    | "browser-only-pdf-editor"
    | "private-pdf-tools-online"
    | "browser-based-pdf-converter"
    | "free-pdf-merger-without-signup"
    | "private-pdf-editor-online";
  title: string;
  h1: string;
  metaDescription: string;
  intro: string;
  summary: string;
  comparisonRows: { criterion: string; calmpdf: string; others: string }[];
  faqs: { q: string; a: string }[];
  toolLinks: { href: string; label: string }[];
  sitemap: {
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  };
};

export const COMPARISON_PAGES: ComparisonPage[] = [
  {
    slug: "ilovepdf-alternative",
    title: "iLovePDF Alternative | CalmPDF",
    h1: "CalmPDF as an iLovePDF Alternative",
    metaDescription: "An honest iLovePDF alternative page focused on private, browser-only PDF workflows and direct links to CalmPDF tools.",
    intro: "If you are comparing iLovePDF alternatives, the most important difference is where your files are processed. CalmPDF focuses on browser-side processing so documents stay on your device.",
    summary: "Choose CalmPDF when privacy-first workflows matter and you want quick no-signup access to common PDF tasks.",
    comparisonRows: [
      { criterion: "Processing model", calmpdf: "Local browser processing for core tools", others: "Often upload-first cloud workflow" },
      { criterion: "Account requirement", calmpdf: "No signup for standard usage", others: "May gate advanced actions behind account" },
      { criterion: "Best fit", calmpdf: "Privacy-sensitive everyday PDF edits", others: "Teams already standardized on cloud stacks" },
    ],
    faqs: [
      { q: "Is CalmPDF always better than iLovePDF?", a: "Not always. If your team needs account-based cloud collaboration, another product may fit better." },
      { q: "When is CalmPDF the best alternative?", a: "When you want fast personal workflows and browser-local processing for sensitive files." },
    ],
    toolLinks: [{ href: "/merge-pdf", label: "Merge PDF" }, { href: "/compress-pdf", label: "Compress PDF" }, { href: "/edit-pdf", label: "Edit PDF" }],
    sitemap: { changeFrequency: "monthly", priority: 0.7 },
  },
  {
    slug: "smallpdf-alternative",
    title: "Smallpdf Alternative | CalmPDF",
    h1: "CalmPDF as a Smallpdf Alternative",
    metaDescription: "Compare CalmPDF and Smallpdf style workflows with a privacy-first perspective and practical tool links.",
    intro: "Smallpdf is well known, but many users look for alternatives that keep processing in-browser and avoid unnecessary account steps.",
    summary: "CalmPDF is ideal for users who want straightforward tools, local processing, and minimal friction.",
    comparisonRows: [
      { criterion: "Privacy posture", calmpdf: "Browser-first processing approach", others: "Mixed cloud and local patterns" },
      { criterion: "Friction", calmpdf: "Simple start with no signup", others: "Signup prompts can appear by feature" },
      { criterion: "Use case", calmpdf: "Quick single-user tasks", others: "Broader suite with plan-driven features" },
    ],
    faqs: [
      { q: "Can I do daily PDF tasks with CalmPDF?", a: "Yes. Merging, compressing, splitting, rotating, and editing are available without signup." },
      { q: "Should businesses still compare options?", a: "Yes. Teams should validate compliance, collaboration needs, and cost before selecting a stack." },
    ],
    toolLinks: [{ href: "/split-pdf", label: "Split PDF" }, { href: "/rotate-pdf", label: "Rotate PDF" }, { href: "/pdf-to-word", label: "PDF to Word" }],
    sitemap: { changeFrequency: "monthly", priority: 0.7 },
  },
  {
    slug: "browser-only-pdf-editor",
    title: "Browser-Only PDF Editor | CalmPDF",
    h1: "Browser-Only PDF Editor Comparison",
    metaDescription: "Looking for a browser-only PDF editor? Compare what matters: local processing, ease of use, and practical editing workflows.",
    intro: "A browser-only editor is usually about convenience and data handling. CalmPDF is built for in-browser workflows that avoid unnecessary upload complexity.",
    summary: "For text edits, page changes, and common conversions, browser-only tools can be the simplest path.",
    comparisonRows: [
      { criterion: "Install required", calmpdf: "No installation", others: "Some tools push desktop apps" },
      { criterion: "Workflow speed", calmpdf: "Open, edit, export quickly", others: "Can require extra onboarding steps" },
      { criterion: "Privacy", calmpdf: "Local-first processing", others: "Varies by vendor and feature" },
    ],
    faqs: [
      { q: "Are browser-only editors enough for professional work?", a: "For many workflows yes, especially standard edits and document packaging." },
      { q: "When do I still need desktop software?", a: "For advanced prepress, signature orchestration, or enterprise policy constraints." },
    ],
    toolLinks: [{ href: "/edit-pdf", label: "Edit PDF" }, { href: "/reorder-pdf-pages", label: "Reorder Pages" }, { href: "/add-page-numbers-to-pdf", label: "Add Page Numbers" }],
    sitemap: { changeFrequency: "monthly", priority: 0.72 },
  },
  {
    slug: "private-pdf-tools-online",
    title: "Private PDF Tools Online | CalmPDF",
    h1: "Private PDF Tools Online: What to Compare",
    metaDescription: "Compare private online PDF tools and learn which workflows can stay local in your browser with CalmPDF.",
    intro: "Privacy claims vary. This page focuses on practical criteria: where files are processed, whether signup is required, and how quickly you can finish tasks.",
    summary: "If you handle contracts, IDs, or financial docs, choose tools that minimize data exposure and keep workflows simple.",
    comparisonRows: [
      { criterion: "File handling", calmpdf: "Browser-local processing for core tasks", others: "May upload to remote servers" },
      { criterion: "Data minimization", calmpdf: "No account needed for typical usage", others: "Accounts and storage can be encouraged" },
      { criterion: "Practical trust", calmpdf: "Clear privacy page + direct task links", others: "Policies can be harder to map to each tool" },
    ],
    faqs: [
      { q: "Is any online PDF workflow perfectly risk-free?", a: "No tool is zero-risk; always review privacy docs and avoid unnecessary sharing." },
      { q: "What should I check before using a PDF tool?", a: "Processing model, retention policy, and whether your task can stay local in-browser." },
    ],
    toolLinks: [{ href: "/privacy", label: "Read CalmPDF privacy page" }, { href: "/compress-pdf", label: "Private PDF compression" }, { href: "/merge-pdf", label: "Private PDF merge" }],
    sitemap: { changeFrequency: "monthly", priority: 0.72 },
  },
  {
    slug: "browser-based-pdf-converter",
    title: "Browser Based PDF Converter | CalmPDF",
    h1: "Browser-Based PDF Converter: Local vs Cloud Workflows",
    metaDescription: "Compare browser-based PDF converter workflows, including local processing, privacy trade-offs, and direct links to CalmPDF conversion tools.",
    intro: "A browser based PDF converter can work in two very different ways: local client-side processing or cloud upload processing. This page explains both approaches in plain language so you can choose the right workflow for your files.",
    summary: "If privacy and fast start matter, pick tools that support client-side conversion and clear file-handling practices.",
    comparisonRows: [
      { criterion: "Where conversion happens", calmpdf: "Client-side conversion inside your browser for core flows", others: "Often uploads files to remote cloud servers" },
      { criterion: "Data exposure", calmpdf: "Local PDF converter workflow with fewer handoffs", others: "Cloud conversion can involve storage and transfer layers" },
      { criterion: "Performance feel", calmpdf: "No upload wait for typical files", others: "Network speed can affect queue and turnaround" },
      { criterion: "Best fit", calmpdf: "Private PDF converter use cases and quick edits", others: "Shared cloud pipelines and account-based collaboration" },
    ],
    faqs: [
      { q: "What is a browser based PDF converter?", a: "It is a PDF tool that runs from your browser. Some are client-side and process files locally, while others upload documents to cloud servers before converting." },
      { q: "Is a local PDF converter always safer than cloud conversion?", a: "Local processing usually reduces exposure, but no tool is perfect. Always review privacy terms, retention policy, and your document sensitivity." },
      { q: "Will client-side PDF conversion preserve formatting perfectly?", a: "Not always. Complex layouts, custom fonts, and scanned pages can still need manual cleanup after conversion." },
      { q: "Which in-browser PDF tools should I start with?", a: "Start with PDF to Word or Word to PDF for conversion, then use Merge, Compress, or Edit tools to finalize the file." },
    ],
    toolLinks: [
      { href: "/pdf-to-word", label: "PDF to Word" },
      { href: "/word-to-pdf", label: "Word to PDF" },
      { href: "/merge-pdf", label: "Merge PDF" },
      { href: "/compress-pdf", label: "Compress PDF" },
      { href: "/edit-pdf", label: "Edit PDF" },
    ],
    sitemap: { changeFrequency: "monthly", priority: 0.74 },
  },
  {
    slug: "free-pdf-merger-without-signup",
    title: "Free PDF Merger Without Signup | CalmPDF",
    h1: "Free PDF Merger Without Signup",
    metaDescription: "Need a free PDF merger without signup? Compare options and use CalmPDF to combine files directly in your browser.",
    intro: "Many users just want to merge a few files quickly without creating accounts. CalmPDF supports that workflow with browser-first processing.",
    summary: "Best for students, applicants, and professionals who need fast document assembly with low friction.",
    comparisonRows: [
      { criterion: "Cost", calmpdf: "Free for common merge workflows", others: "Free tiers may limit volume" },
      { criterion: "Signup", calmpdf: "No signup required", others: "Account prompts are common" },
      { criterion: "Follow-up tasks", calmpdf: "Direct links to compress/reorder tools", others: "May require plan upgrades" },
    ],
    faqs: [
      { q: "Can I merge multiple PDFs in one go?", a: "Yes, then reorder pages if needed before downloading." },
      { q: "What if the merged file is too large?", a: "Use the compression tool right after merging to meet upload limits." },
    ],
    toolLinks: [{ href: "/merge-pdf", label: "Merge PDFs now" }, { href: "/reorder-pdf-pages", label: "Reorder merged pages" }, { href: "/compress-pdf", label: "Compress merged PDF" }],
    sitemap: { changeFrequency: "monthly", priority: 0.72 },
  },
  {
    slug: "private-pdf-editor-online",
    title: "Private PDF Editor Online | CalmPDF",
    h1: "Private PDF Editor Online (Browser-Based)",
    metaDescription: "Learn how a private PDF editor online works, why browser-based processing matters, and how CalmPDF compares with upload-first tools.",
    intro: "If you are searching for a private PDF editor online, the key question is simple: does the tool process your file in your browser or upload it to remote servers? CalmPDF is designed around browser-based processing for common workflows.",
    summary: "Use private, browser-based tools when handling sensitive documents and choose upload-based workflows only when you explicitly need cloud collaboration features.",
    comparisonRows: [
      { criterion: "Where processing happens", calmpdf: "Inside your browser tab for core tools", others: "Often uploaded and processed on vendor servers" },
      { criterion: "Data exposure surface", calmpdf: "No account required for routine tasks", others: "Accounts, cloud storage, and sharing defaults are common" },
      { criterion: "Best use case", calmpdf: "Personal or small-team secure PDF editing", others: "Cloud-centric review and collaboration stacks" },
    ],
    faqs: [
      { q: "What does browser-based PDF editing mean?", a: "It means editing logic runs in your browser session instead of sending documents to CalmPDF servers for processing." },
      { q: "Why do files stay in the browser?", a: "CalmPDF tools are built for local browser execution, so your file is handled on-device during the workflow." },
      { q: "Is a no-upload PDF editor automatically secure?", a: "No single tool is perfect. You should still protect your device, use trusted networks, and review each product's privacy documentation." },
      { q: "When should I use an upload-based editor instead?", a: "Upload-based tools can fit when your team needs centralized storage, shared review, or account-level workflow controls." },
    ],
    toolLinks: [
      { href: "/edit-pdf", label: "Edit PDF" },
      { href: "/merge-pdf", label: "Merge PDF" },
      { href: "/compress-pdf", label: "Compress PDF" },
      { href: "/sign-pdf", label: "Sign PDF" },
    ],
    sitemap: { changeFrequency: "monthly", priority: 0.74 },
  },

];

export const COMPARISON_PAGE_BY_SLUG = Object.fromEntries(
  COMPARISON_PAGES.map((page) => [page.slug, page]),
) as Record<ComparisonPage["slug"], ComparisonPage>;
