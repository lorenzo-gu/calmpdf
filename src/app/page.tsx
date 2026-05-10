import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, ShieldCheck } from "lucide-react";
import { PUBLISHED_BLOG_POSTS } from "@/content/posts";
import { SITE } from "@/lib/site";
import { RelatedToolCard, EditorialCard } from "@/components/cards";

const TOOL_GROUPS = [
  {
    title: "Optimize",
    description: "Reduce PDF size for sharing, submissions, and inbox limits.",
    links: [
      { href: "/compress-pdf", label: "Compress PDF" },
      { href: "/compress-pdf-for-email", label: "Compress PDF for Email" },
      { href: "/compress-pdf-to-1mb", label: "Compress PDF to 1MB" },
    ],
  },
  {
    title: "Organize",
    description: "Combine, split, and reorder pages before sending final versions.",
    links: [
      { href: "/merge-pdf", label: "Merge PDF" },
      { href: "/split-pdf", label: "Split PDF" },
      { href: "/reorder-pdf-pages", label: "Reorder PDF Pages" },
    ],
  },
  {
    title: "Edit",
    description: "Make practical document changes without heavyweight desktop apps.",
    links: [
      { href: "/edit-pdf", label: "Edit PDF" },
      { href: "/pdf-metadata-editor", label: "Edit PDF Metadata" },
      { href: "/unlock-pdf", label: "Unlock PDF" },
    ],
  },
  {
    title: "Convert",
    description: "Switch between PDF and Office/image formats with private processing.",
    links: [
      { href: "/pdf-to-word", label: "PDF to Word" },
      { href: "/word-to-pdf", label: "Word to PDF" },
      { href: "/jpg-to-pdf", label: "JPG to PDF" },
    ],
  },
  {
    title: "Page tools",
    description: "Fix orientation and extract pages from long or scanned documents.",
    links: [
      { href: "/rotate-pdf", label: "Rotate PDF" },
      { href: "/extract-pdf-pages", label: "Extract PDF Pages" },
      { href: "/remove-pdf-pages", label: "Remove PDF Pages" },
    ],
  },
];

const PRIVATE_WORKFLOWS = [
  {
    href: "/pdf-tools-without-upload",
    label: "PDF tools without upload",
    description: "Understand exactly how local browser processing works in real-world document tasks.",
  },
  {
    href: "/private-pdf-editor-online",
    label: "Private PDF editor online",
    description: "See when browser-only editing is the best fit for sensitive files and fast edits.",
  },
  {
    href: "/merge-pdf-on-iphone-without-app",
    label: "Merge PDF on iPhone without app",
    description: "Follow a clean Safari-first workflow to combine PDFs with zero installs.",
  },
];

export default function HomePage() {
  const featuredGuides = PUBLISHED_BLOG_POSTS.filter((post) =>
    [
      "compress-pdf-on-windows",
      "compress-pdf-on-mac",
      "merge-pdf-files-free",
      "split-pdf-into-multiple-files",
      "reorder-pdf-pages-online",
      "convert-pdf-to-word",
    ].includes(post.slug),
  );

  return (
    <>
      <section className="mx-auto max-w-content px-4 md:px-6 pt-12 md:pt-20 pb-10 md:pb-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="inline-flex items-center rounded-full border border-sage-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-wide text-sage-700">
              Privacy-first PDF workspace
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
              Fast, private PDF tools.
              <br />
              No uploads. No drama.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-sage-700 max-w-2xl">
              {SITE.name} helps you compress, merge, split, edit, convert, and organize PDFs directly in your browser so your files stay with you.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="#tools" className="btn-primary inline-flex items-center gap-2">
                Start with tools <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/pdf-tools-without-upload" className="btn-secondary">
                See privacy details
              </Link>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-white to-sage-50 border-sage-200 p-5 sm:p-6">
            <div className="rounded-xl border border-sage-200 bg-white p-4 sm:p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-sage-900">Document workspace preview</p>
                <span className="text-xs text-sage-600">Browser-only</span>
              </div>
              <div className="mt-4 space-y-3">
                {[
                  "Contract-v3.pdf",
                  "Tax-forms-2026.pdf",
                  "Mortgage-packet.pdf",
                ].map((file) => (
                  <div key={file} className="flex items-center justify-between rounded-lg border border-sage-100 bg-sage-50/60 px-3 py-2 text-sm">
                    <span className="text-sage-800">{file}</span>
                    <span className="text-emerald-700">Local</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 grid gap-2 text-sm text-sage-700 sm:grid-cols-2">
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-700" /> No account</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-700" /> No upload queue</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-sage-200 bg-sage-50/70">
        <div className="mx-auto max-w-content px-4 md:px-6 py-4 md:py-5 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="text-base md:text-lg font-medium text-sage-900 inline-flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-emerald-700" /> Your file never leaves your device
          </p>
          <p className="text-sm text-sage-700">Browser-only · No account · No upload · Free</p>
        </div>
      </section>

      <section className="mx-auto max-w-content px-4 md:px-6 py-12" id="tools">
        <h2 className="text-2xl md:text-3xl font-semibold">Find the right tool by task</h2>
        <p className="mt-2 text-sage-700 max-w-2xl">Choose a workflow category and jump straight into your PDF job.</p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {TOOL_GROUPS.map((group) => (
            <div key={group.title} className="card border-sage-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-sage-900">{group.title}</h3>
              <p className="mt-2 text-sm text-sage-700">{group.description}</p>
              <div className="mt-4 grid gap-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="inline-flex items-center gap-1 text-sage-800 hover:text-sage-950 underline underline-offset-4">
                      {link.label} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </li>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-content px-4 md:px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Popular workflows</h2>
        <p className="mt-2 text-sage-700 max-w-2xl">Editorial guides for common private PDF workflows, written for real tasks.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRIVATE_WORKFLOWS.map((workflow) => (
            <Link key={workflow.href} href={workflow.href} className="card no-underline hover:border-sage-300 transition-colors min-w-0 h-full p-6">
              <h3 className="font-semibold text-sage-900 break-words">{workflow.label}</h3>
              <p className="mt-2 text-sm text-sage-700">{workflow.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-content px-4 md:px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">How-to library</h2>
        <p className="mt-2 text-sage-700 max-w-2xl">Step-by-step articles for frequent PDF tasks and troubleshooting.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredGuides.map((guide) => (
            <Link key={guide.slug} href={`/how-to/${guide.slug}`} className="card no-underline hover:border-sage-300 transition-colors min-w-0 h-full p-6">
              <FileText className="h-5 w-5 text-sage-500" />
              <h3 className="mt-3 font-semibold text-sage-900 break-words">{guide.title}</h3>
              <p className="mt-1 text-sm text-sage-700">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
