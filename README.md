# CalmPDF

Simple, private PDF tools that run entirely in the browser.
Next.js 15 (App Router) + TypeScript + Tailwind + pdf-lib.

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

---

## Phase 1 — Core tools (complete)

Pure browser · pdf-lib · no server required.

Pages

- `/` — homepage (hero + tool grid)
- `/compress-pdf` — lossless compression (pdf-lib)
- `/merge-pdf` — combine PDFs in chosen order
- `/split-pdf` — extract a page range
- `/about`, `/privacy`
- `/sitemap.xml`, `/robots.txt`, `/llms.txt`

Shared pieces

- `src/components/ToolShell.tsx` — tool page template (breadcrumb, hero, How-it-works, FAQ, related tools, JSON-LD). Every future tool plugs into this shell.
- `src/components/JsonLd.tsx` — Organization, WebSite, SoftwareApplication, HowTo, FAQPage, BreadcrumbList schemas.
- `src/content/tools.ts` — single source of truth for tool titles, descriptions, steps, FAQs. Adding a tool = one entry here + one new page.
- `src/lib/pdf.ts` — client-side PDF helpers (merge, split, compress, page count, download).

---

## Phase 2 — Quick wins (next to build)

Pure browser · pdf-lib + lightweight helpers · no server required.

| Tool | Route | Notes |
|------|-------|-------|
| Rotate PDF | `/rotate-pdf` | pdf-lib built-in |
| PDF to JPG | `/pdf-to-jpg` | pdfjs-dist render → canvas → JPEG |
| JPG to PDF | `/jpg-to-pdf` | pdf-lib embedJpg |
| Protect PDF | `/protect-pdf` | qpdf-wasm |
| Unlock PDF | `/unlock-pdf` | qpdf-wasm |
| Watermark PDF | `/watermark-pdf` | pdf-lib text/image overlay |
| Page numbers | `/page-numbers` | pdf-lib drawText per page |
| Organize PDF | `/organize-pdf` | drag-and-drop page reorder + delete, pdf-lib |
| Crop PDF | `/crop-pdf` | pdf-lib setCropBox |

Also in Phase 2: image recompression inside compress-pdf (render page → canvas → JPEG → rebuild).

---

## Phase 3 — Medium effort (browser-only, extra libraries)

Still runs entirely in the browser, but requires heavier WASM or canvas libraries.

| Tool | Route | Key dependency |
|------|-------|----------------|
| Edit PDF | `/edit-pdf` | Fabric.js or pdf-lib for text/image/shape overlays |
| Sign PDF | `/sign-pdf` | Canvas draw → embed signature via pdf-lib |
| Redact PDF | `/redact-pdf` | pdf-lib fill rectangles over sensitive areas |
| Repair PDF | `/repair-pdf` | pdf-lib re-serialisation |
| OCR PDF | `/ocr-pdf` | Tesseract.js — makes scanned PDFs searchable |
| Compare PDF | `/compare-pdf` | pdfjs-dist render → canvas diff |

---

## Phase 4 — Heavy / server-required

These tools require a backend or an AI API and break the browser-only model. Consider a lightweight serverless function or a third-party API integration.

| Tool | Route | Dependency |
|------|-------|------------|
| PDF to Word | `/pdf-to-word` | LibreOffice / cloud API |
| PDF to PowerPoint | `/pdf-to-pptx` | Cloud API |
| PDF to Excel | `/pdf-to-excel` | Cloud API |
| Word to PDF | `/word-to-pdf` | LibreOffice / cloud API |
| PowerPoint to PDF | `/pptx-to-pdf` | LibreOffice / cloud API |
| Excel to PDF | `/excel-to-pdf` | LibreOffice / cloud API |
| HTML to PDF | `/html-to-pdf` | Puppeteer (serverless) |
| PDF to PDF/A | `/pdf-to-pdfa` | Ghostscript / cloud API |
| AI Summarizer | `/summarize-pdf` | OpenAI / Anthropic API |
| Translate PDF | `/translate-pdf` | OpenAI / DeepL API |

---

## Deploy to Vercel

1. Push this folder to a new GitHub repo.
2. On [vercel.com](https://vercel.com), click **Add New → Project**, import the repo, and deploy (defaults work).
3. Add the domain: **Settings → Domains → Add `calmpdf.com`**. Vercel will show the DNS records to set at your registrar.
4. Update `src/lib/site.ts` if you change the domain.

---

## Add a new PDF tool

1. Add an entry to `TOOLS` in `src/content/tools.ts`.
2. Add a helper in `src/lib/pdf.ts` if needed (e.g. `rotatePdf`, `protectPdf`).
3. Create `src/components/tools/YourTool.tsx` (client component with the UI).
4. Create `src/app/<slug>/page.tsx` exporting metadata and wrapping your component in `<ToolShell tool={...}>`.

The sitemap, navigation, footer, and related-tools block pick up the new tool automatically.

---

## Analytics

Google Analytics 4 is configured in `src/app/layout.tsx` with Measurement ID `G-J1GR90ETYW`.
Data flows into [analytics.google.com](https://analytics.google.com) once the site receives traffic.

---

## Monetization (ad slots)

Recommended placements (all safe per AdSense policy):

- Desktop sidebar on tool pages (below the fold).
- Between the How it works card and FAQ section.
- Sticky footer ad on mobile.

Do not put ads inside the tool UI — it's the single fastest way to lose both conversions and ad-network approval.

Add a small `<AdSlot />` component when you're ready and drop it into the three spots above in `ToolShell.tsx`.

Apply to Ezoic first — much easier approval than AdSense for a new site. Mediavine's Journey tier is another good starting point.

---

## SEO checklist (do these before launch)

- Replace `public/og.png` with a real 1200×630 social image.
- Replace `public/favicon.ico` with your logo.
- Add a real `public/logo.png` (1024×1024 recommended).
- Verify canonical URLs match your production domain.
- Add Google Search Console and submit `https://calmpdf.com/sitemap.xml`.
- Add Bing Webmaster Tools.
- Lighthouse check: LCP < 1.5s, CLS < 0.1 (should pass out of the box).

## AI search (GEO) checklist

- `llms.txt` at site root listing tools.
- JSON-LD on every tool page.
- Self-contained intro paragraph that answers "what is this tool."
- Get listed: AlternativeTo, Toolify.ai, There's An AI For That, Product Hunt, one or two relevant Reddit threads.

---

## License

MIT
