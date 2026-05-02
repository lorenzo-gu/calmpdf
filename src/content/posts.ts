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
    faqs?: { q: string; a: string }[];
    relatedLinks?: { href: string; label: string }[];
};

export const BLOG_POSTS: Post[] = [
  {
        slug: "convert-pdf-to-word",
        title: "How to Convert PDF to Word (DOCX)",
        description:
                "Learn when PDF to Word conversion works well, what breaks, and how to convert a text-based PDF into an editable DOCX without uploading your file.",
        datePublished: "2026-05-02",
        dateModified: "2026-05-02",
        ctaHref: "/pdf-to-docx",
        ctaLabel: "Convert PDF to Word",
        published: true,
  },
  {
        slug: "convert-word-to-pdf",
        title: "How to Convert Word to PDF (DOCX)",
        description:
                "A practical guide to turning DOCX into PDF for sharing, applications, and printing, with clear limits for complex Word layouts.",
        datePublished: "2026-05-02",
        dateModified: "2026-05-02",
        ctaHref: "/docx-to-pdf",
        ctaLabel: "Convert Word to PDF",
        published: true,
  },
  {
        slug: "pdf-conversion-troubleshooting",
        title: "PDF Conversion Troubleshooting (Word, DOCX, and Layout Issues)",
        description:
                "Fix common PDF conversion errors: blank output, broken formatting, missing fonts, scanned files, and failed Word/PDF exports.",
        datePublished: "2026-05-02",
        dateModified: "2026-05-02",
        ctaHref: "/pdf-to-docx",
        ctaLabel: "Try PDF to Word",
        published: true,
  },
  {
        slug: "pdf-to-word-not-working",
        title: "PDF to Word Not Working? Fixes That Usually Help",
        description:
                "Troubleshoot failed PDF to Word conversions, blank DOCX output, and broken formatting with practical checks before retrying.",
        datePublished: "2026-05-02",
        dateModified: "2026-05-02",
        ctaHref: "/pdf-to-docx",
        ctaLabel: "Convert PDF to Word",
        published: true,
  },
  {
        slug: "edit-pdf-free",
        title: "How to Edit a PDF for Free",
        description: "Learn the best free PDF editors including browser-based tools and desktop applications that work without uploading files.",
        datePublished: "2026-05-02",
        dateModified: "2026-05-02",
        ctaHref: "/compress-pdf",
        ctaLabel: "Compress PDF Free",
        published: true,
    },
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
    faqs: [
      { q: "Does rotating a PDF reduce its quality?", a: "With CalmPDF and Preview, no — the rotation is metadata applied to the existing page, so text stays sharp and selectable. Rotating through Microsoft Print to PDF can rasterise the page, which slightly softens text and increases file size." },
      { q: "How do I rotate just one page in a PDF?", a: "In CalmPDF, click the rotate button on that single page's thumbnail and leave the others alone. In Preview, select only that page in the sidebar before pressing Cmd + R. Saving the file then keeps the chosen rotation per page." },
      { q: "Why does my PDF keep opening sideways even after I rotate it?", a: "Some viewers — especially older versions of Adobe Reader — read the original page rotation rather than the saved rotation flag. If that happens, re-save the rotated file with CalmPDF, which writes the new rotation directly to each page object so every viewer respects it." },
      { q: "Is it safe to rotate a confidential PDF online?", a: "Most online rotators upload your file to a server, which is a legitimate concern for anything sensitive. CalmPDF is different: the rotation runs in your browser, so the file never leaves your device. If a tool does not say \"no upload\" or \"runs in your browser,\" assume it uploads." },
    ],
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
        faqs: [
          { q: "Does Windows 11 have a built-in PDF compressor?", a: "No. Windows 11 can create PDFs through Microsoft Print to PDF, but it has no dedicated \"reduce file size\" tool. You need either Microsoft Word, a third-party app, or a browser-based tool like CalmPDF." },
          { q: "How much can I compress a PDF on Windows?", a: "It depends on what is in the file. Image-heavy PDFs can typically be reduced by 60–80% without visibly hurting on-screen quality. Text-only PDFs are usually already small and may shrink by 5–15% at most." },
          { q: "Is it safe to compress sensitive PDFs online?", a: "Most online PDF compressors upload your file to a server, which is a real concern for anything sensitive. CalmPDF is different: it runs the compression in your browser, so the file never leaves your device. If you are unsure about a tool, check whether it explicitly says \"no upload\" or \"runs in your browser,\" and confirm in the browser network tab if you want to be certain." },
        ],
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
        faqs: [{ q: "Does compressing a PDF reduce quality?", a: "It depends on the method. The Quartz filter in Preview is lossy and can soften images. CalmPDF currently uses lossless compression, so readability and image detail are preserved while file structure is optimized. Text in PDFs is vector-based and is never affected by image compression." }],
        relatedLinks: [{ href: "/compress-pdf", label: "Compress PDF tool" }, { href: "/how-to/compress-pdf-without-losing-quality", label: "How to Compress a PDF Without Losing Quality" }],
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
        faqs: [{ q: "Can I compress a scanned PDF without losing quality?", a: "Scanned PDFs are entirely images — each page is a photo of a piece of paper. Some quality loss is unavoidable if you want significant file size reduction. Use a lossless tool first and check the output. For archiving, keep the original; send the compressed version." }],
        relatedLinks: [{ href: "/compress-pdf", label: "Compress PDF tool" }, { href: "/compress-pdf-to-1mb", label: "Compress PDF to 1MB" }],
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
        faqs: [{ q: "Does merging PDFs reduce quality?", a: "No. Merging combines the pages of multiple PDFs into one file without re-encoding anything. Images, fonts, and formatting stay exactly as they were in the originals." }],
        relatedLinks: [{ href: "/merge-pdf", label: "Merge PDF tool" }, { href: "/how-to/combine-pdf-files", label: "How to Combine PDF Files" }],
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
        faqs: [{ q: "Does splitting a PDF affect quality?", a: "No. Splitting extracts pages without re-encoding them. Images, fonts, and text remain exactly as they were in the original document." }],
        relatedLinks: [{ href: "/split-pdf", label: "Split PDF tool" }, { href: "/extract-pdf-pages", label: "Extract PDF Pages" }],
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
        faqs: [{ q: "What's the maximum PDF size for email?", a: "Gmail and Outlook both support attachments up to 25 MB. Many corporate email systems have lower limits (10 MB is common). If your PDF exceeds the limit, aim to compress it below 10 MB to be safe for most recipients." }],
        relatedLinks: [{ href: "/compress-pdf", label: "Compress PDF tool" }, { href: "/compress-pdf-for-email", label: "Compress PDF for Email" }],
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
        faqs: [{ q: "Does combining PDFs reduce quality?", a: "No. Combining PDFs joins the pages without re-encoding or compressing anything. Images, fonts, and text remain exactly as they were in the original files." }],
        relatedLinks: [{ href: "/merge-pdf", label: "Merge PDF tool" }, { href: "/how-to/merge-pdf-files-free", label: "How to Merge PDF Files Free" }],
  },
  ];

export function getPost(slug: string): Post | undefined {
    return PUBLISHED_BLOG_POSTS.find((p) => p.slug === slug);
}


export const PUBLISHED_BLOG_POSTS = BLOG_POSTS.filter((post) => post.published);
