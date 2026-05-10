import Link from "next/link";
import { ShieldCheck, Zap, Wifi, FileText } from "lucide-react";
import { TOOLS } from "@/content/tools";
import { PUBLISHED_BLOG_POSTS } from "@/content/posts";
import { SITE } from "@/lib/site";

const TOOL_GROUPS = [
  {
    title: "Optimize",
    description: "Reduce file size and prepare documents for email, forms, and portals.",
    links: [
      { href: "/compress-pdf", label: "Compress PDF" },
      { href: "/compress-pdf-for-email", label: "Compress PDF for Email" },
      { href: "/compress-pdf-to-1mb", label: "Compress PDF to 1MB" },
    ],
  },
  {
    title: "Organize",
    description: "Combine, split, and reorder pages before you share a final draft.",
    links: [
      { href: "/merge-pdf", label: "Merge PDF" },
      { href: "/split-pdf", label: "Split PDF" },
      { href: "/reorder-pdf", label: "Reorder PDF Pages" },
    ],
  },
  {
    title: "Edit",
    description: "Add text, signatures, or markup without installing desktop software.",
    links: [
      { href: "/edit-pdf", label: "Edit PDF" },
      { href: "/sign-pdf", label: "Sign PDF" },
      { href: "/unlock-pdf", label: "Unlock PDF" },
    ],
  },
  {
    title: "Convert",
    description: "Move between PDF and Office formats while keeping files private.",
    links: [
      { href: "/pdf-to-word", label: "PDF to Word" },
      { href: "/word-to-pdf", label: "Word to PDF" },
      { href: "/jpg-to-pdf", label: "JPG to PDF" },
    ],
  },
  {
    title: "Page tools",
    description: "Fix orientation and document flow for scanned and mixed-page files.",
    links: [
      { href: "/rotate-pdf", label: "Rotate PDF" },
      { href: "/extract-pdf-pages", label: "Extract PDF Pages" },
      { href: "/delete-pdf-pages", label: "Delete PDF Pages" },
    ],
  },
];

const HOMEPAGE_FAQS = [
  {
    q: "Are these free PDF tools really free?",
    a: "Yes. CalmPDF core tools are free to use with no signup, and you can run them directly in your browser.",
  },
  {
    q: "Is CalmPDF a private PDF editor?",
    a: "Yes. CalmPDF tools process files locally in your browser, so your document does not get uploaded to CalmPDF servers.",
  },
  {
    q: "Can I use PDF tools without upload?",
    a: <>Yes. If a tool says it runs in your browser, file handling stays on your device instead of being sent to a remote queue. Read our <Link href="/pdf-tools-without-upload" className="underline underline-offset-2 hover:no-underline">PDF tools without upload guide</Link> for the full workflow and caveats.</>,
  },
];

const PRIVATE_WORKFLOWS = [
  {
    href: "/pdf-tools-without-upload",
    label: "PDF tools without upload",
    description: "Explore browser-first PDF tasks that avoid unnecessary file uploads for everyday documents.",
  },
  {
    href: "/private-pdf-editor-online",
    label: "Private PDF editor online",
    description: "Learn when browser-based editing is a practical fit for personal and business PDFs.",
  },
  {
    href: "/compress-pdf-for-email",
    label: "Compress PDF for email",
    description: "Reduce file size quickly so attachments are easier to send through strict inbox limits.",
  },
  {
    href: "/merge-pdf-on-iphone-without-app",
    label: "Merge PDF on iPhone without app",
    description: "Follow a Safari-friendly workflow to combine files from your iPhone without extra installs.",
  },
  {
    href: "/browser-based-pdf-converter",
    label: "Browser-based PDF converter",
    description: "Compare local and upload-based conversion approaches before choosing a PDF converter.",
  },
];

export default function HomePage() {
  const featuredGuides = PUBLISHED_BLOG_POSTS.filter((post) => [
    "compress-pdf-on-windows",
    "compress-pdf-on-mac",
    "merge-pdf-files-free",
    "split-pdf-into-multiple-files",
    "reorder-pdf-pages-online",
    "convert-pdf-to-word",
  ].includes(post.slug));

  return (
    <>
      <section className="mx-auto max-w-content px-4 md:px-6 pt-14 md:pt-20 pb-14 md:pb-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
          Private PDF tools that stay in your browser.
        </h1>
        <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-sage-700 max-w-3xl mx-auto">
          Compress PDF, merge PDF, split PDF, edit PDF, rotate PDF, convert PDF to Word, and reorder PDF pages without uploads.
          {" "}With {SITE.name}, your files stay on your device for browser-only processing.
        </p>

        <div className="mt-8 grid w-full max-w-xl mx-auto grid-cols-2 md:flex md:max-w-none md:flex-wrap gap-3 justify-center">
          <Link href="/tools" className="btn-primary col-span-2 md:col-span-1">
            Choose your PDF task
          </Link>
          {TOOLS.map((t) => (
            <Link key={t.slug} href={`/${t.slug}`} className="btn-primary whitespace-nowrap snap-start shrink-0">
              {t.h1}
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm text-sage-700">
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4" /> Your document stays yours</span>
          <span className="inline-flex items-center gap-1.5"><Wifi className="h-4 w-4" /> No uploads. No accounts. No drama.</span>
          <span className="inline-flex items-center gap-1.5"><Zap className="h-4 w-4" /> Quick PDF fixes, without the cloud detour.</span>
        </div>
      </section>

      <section className="mx-auto max-w-content px-4 md:px-6 pb-6" aria-label="Privacy intro copy">
        <p className="text-sage-700 max-w-4xl">
          No uploads. No accounts. No drama. CalmPDF gives you quick PDF fixes that stay local in your browser.
          Your document stays yours while you optimize, organize, edit, and convert in a few clicks.
          For more detail on local processing and practical limits, see <Link href="/pdf-tools-without-upload" className="underline underline-offset-2 hover:no-underline">how to use PDF tools without uploading files</Link>.
        </p>
      </section>

      <section className="mx-auto max-w-content px-4 md:px-6 py-12" id="tools">
        <h2 className="text-2xl md:text-3xl font-semibold">Browse tools by task</h2>
        <p className="mt-2 text-sage-700 max-w-2xl">
          Start with the workflow you need and jump straight to the right tool.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {TOOL_GROUPS.map((group) => (
            <div key={group.title} className="card">
              <h3 className="font-semibold text-sage-900">{group.title}</h3>
              <p className="mt-2 text-sm text-sage-700">{group.description}</p>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sage-700 hover:text-sage-900 underline underline-offset-4">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-content px-4 md:px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Popular private PDF workflows</h2>
        <p className="mt-2 text-sage-700 max-w-2xl">
          Discover practical guides for private, browser-based PDF workflows.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRIVATE_WORKFLOWS.map((workflow) => (
            <Link key={workflow.href} href={workflow.href} className="card no-underline hover:border-sage-300 transition-colors min-w-0 h-full">
              <h3 className="font-semibold text-sage-900 break-words">{workflow.label}</h3>
              <p className="mt-2 text-sm text-sage-700">{workflow.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-content px-4 md:px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Popular how-to guides</h2>
        <p className="mt-2 text-sage-700 max-w-2xl">Step-by-step guides for common PDF jobs and troubleshooting.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredGuides.map((guide) => (
            <Link key={guide.slug} href={`/how-to/${guide.slug}`} className="card no-underline hover:border-sage-300 transition-colors min-w-0 h-full">
              <FileText className="h-5 w-5 text-sage-500" />
              <h3 className="mt-3 font-semibold text-sage-900 break-words">{guide.title}</h3>
              <p className="mt-1 text-sm text-sage-700">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-content px-4 md:px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Frequently asked questions</h2>
        <div className="mt-6 space-y-4">
          {HOMEPAGE_FAQS.map((faq) => (
            <details key={faq.q} className="card">
              <summary className="font-semibold cursor-pointer">{faq.q}</summary>
              <p className="mt-3 text-sm text-sage-700">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
