export type Post = {
    slug: string;
    title: string;
    description: string;
    datePublished: string;
    dateModified: string;
    image?: string;
    ctaHref: string;
    ctaLabel: string;
    published: boolean;
};

export const BLOG_POSTS: Post[] = [
  {
    slug: "rotate-pdf",
    title: "How to Rotate a PDF",
    description:
      "Rotate a PDF in your browser without uploading it. Step-by-step instructions for CalmPDF, Preview on Mac, and Microsoft Edge on Windows — all free, no signup.",
    datePublished: "2026-04-29",
    dateModified: "2026-04-29",
    ctaHref: "/rotate-pdf",
    ctaLabel: "Rotate PDF free",
    published: true,
  },
  {
        slug: "compress-pdf-on-windows",
        title: "How to Compress a PDF on Windows",
        description:
                "Three ways to compress a PDF on Windows 10 and 11 — using Word, Microsoft Print to PDF, or a free private browser-based tool. No software install required.",
        datePublished: "2026-04-27",
        dateModified: "2026-04-27",
        ctaHref: "/compress-pdf",
        ctaLabel: "Compress PDF free",
        published: true,
  },
  {
        slug: "compress-pdf-on-mac",
        title: "How to Compress a PDF on Mac",
        description:
                "Learn how to reduce PDF file size on Mac using Preview, and discover CalmPDF — a free, private browser-based alternative that works on any device.",
        datePublished: "2026-04-25",
        dateModified: "2026-04-25",
        ctaHref: "/compress-pdf",
        ctaLabel: "Compress PDF free",
        published: true,
  },
  {
        slug: "compress-pdf-without-losing-quality",
        title: "How to Compress a PDF Without Losing Quality",
        description:
                "Understand lossy vs lossless PDF compression, and learn how CalmPDF preserves quality while still meaningfully reducing file size.",
        datePublished: "2026-04-25",
        dateModified: "2026-04-25",
        ctaHref: "/compress-pdf",
        ctaLabel: "Compress PDF free",
        published: true,
  },
  {
        slug: "merge-pdf-files-free",
        title: "How to Merge PDF Files Free",
        description:
                "Compare the best ways to merge PDF files for free, including CalmPDF — a fully private option that never uploads your files to a server.",
        datePublished: "2026-04-25",
        dateModified: "2026-04-25",
        ctaHref: "/merge-pdf",
        ctaLabel: "Merge PDF free",
        published: true,
  },
  {
        slug: "split-pdf-into-multiple-files",
        title: "How to Split a PDF into Multiple Files",
        description:
                "A step-by-step guide to splitting a PDF into separate files using CalmPDF, with tips on extracting invoices, chapters, and specific page ranges.",
        datePublished: "2026-04-25",
        dateModified: "2026-04-25",
        ctaHref: "/split-pdf",
        ctaLabel: "Split PDF free",
        published: true,
  },
  {
        slug: "reduce-pdf-file-size",
        title: "How to Reduce PDF File Size",
        description:
                "Discover why PDFs get large, the best methods to reduce file size, and a step-by-step guide to compressing PDFs in your browser with CalmPDF.",
        datePublished: "2026-04-25",
        dateModified: "2026-04-25",
        ctaHref: "/compress-pdf",
        ctaLabel: "Compress PDF free",
        published: true,
  },
  {
        slug: "combine-pdf-files",
        title: "How to Combine PDF Files",
        description:
                "A complete guide to combining PDF files — from merging contracts to assembling reports — using CalmPDF's free, private browser-based tool.",
        datePublished: "2026-04-25",
        dateModified: "2026-04-25",
        ctaHref: "/merge-pdf",
        ctaLabel: "Combine PDFs free",
        published: true,
  },
  ];

export function getPost(slug: string): Post | undefined {
    return PUBLISHED_BLOG_POSTS.find((p) => p.slug === slug);
}


export const PUBLISHED_BLOG_POSTS = BLOG_POSTS.filter((post) => post.published);
