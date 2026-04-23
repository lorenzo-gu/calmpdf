# CalmPDF

Simple, private PDF tools that run entirely in the browser.
Next.js 15 (App Router) + TypeScript + Tailwind + pdf-lib.

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## What's in Phase 1

Pages
- `/` — homepage (hero + tool grid)
- `/compress-pdf` — lossless compression (pdf-lib)
- `/merge-pdf` — combine PDFs in chosen order
- `/split-pdf` — extract a page range
- `/about`, `/privacy`
- `/sitemap.xml`, `/robots.txt`, `/llms.txt`

Shared pieces
- `src/components/ToolShell.tsx` — tool page template (breadcrumb, hero, How-it-works, FAQ, related tools, JSON-LD). Every future tool plugs into this shell.
- `src/components/JsonLd.tsx` — `Organization`, `WebSite`, `SoftwareApplication`, `HowTo`, `FAQPage`, `BreadcrumbList` schemas.
- `src/content/tools.ts` — single source of truth for tool titles, descriptions, steps, FAQs. Adding a tool = one entry here + one new page.
- `src/lib/pdf.ts` — client-side PDF helpers (merge, split, compress, page count, download).

## Deploy to Vercel

1. Push this folder to a new GitHub repo.
2. On [vercel.com](https://vercel.com), click **Add New → Project**, import the repo, and deploy (defaults work).
3. Add the domain: **Settings → Domains → Add `calmpdf.com`**. Vercel will show the DNS records to set at your registrar.
4. Update `src/lib/site.ts` if you change the domain.

## Add a new PDF tool

1. Add an entry to `TOOLS` in `src/content/tools.ts`.
2. Add a helper in `src/lib/pdf.ts` if needed (e.g. `rotatePdf`, `protectPdf`).
3. Create `src/components/tools/YourTool.tsx` (client component with the UI).
4. Create `src/app/<slug>/page.tsx` exporting metadata and wrapping your component in `<ToolShell tool={...}>`.

The sitemap, navigation, footer, and related-tools block pick up the new tool automatically.

## Monetization (ad slots)

Recommended placements (all safe per AdSense policy):
- Desktop sidebar on tool pages (below the fold).
- Between the **How it works** card and **FAQ** section.
- Sticky footer ad on mobile.

**Do not** put ads inside the tool UI — it's the single fastest way to lose both conversions and ad-network approval. Add a small `<AdSlot />` component when you're ready and drop it into the three spots above in `ToolShell.tsx`.

Apply to **Ezoic** first — much easier approval than AdSense for a new site. Mediavine's Journey tier is another good starting point.

## SEO checklist (do these before launch)

- [ ] Replace `public/og.png` with a real 1200×630 social image.
- [ ] Replace `public/favicon.ico` with your logo.
- [ ] Add a real `public/logo.png` (1024×1024 recommended).
- [ ] Verify canonical URLs match your production domain.
- [ ] Add Google Search Console and submit `https://calmpdf.com/sitemap.xml`.
- [ ] Add Bing Webmaster Tools.
- [ ] Add Plausible or GA4 snippet to `layout.tsx`.
- [ ] Lighthouse check: LCP < 1.5s, CLS < 0.1 (should pass out of the box).

## AI search (GEO) checklist

- [x] `llms.txt` at site root listing tools.
- [x] JSON-LD on every tool page.
- [x] Self-contained intro paragraph that answers "what is this tool."
- [ ] Get listed: AlternativeTo, Toolify.ai, There's An AI For That, Product Hunt, one or two relevant Reddit threads.

## Phase 2 (next to build)

- Image recompression in `compress-pdf` using `pdfjs-dist` (render page → canvas → JPEG → rebuild PDF).
- `/pdf-to-jpg` and `/jpg-to-pdf`.
- `/rotate-pdf`.
- `/protect-pdf` and `/unlock-pdf` (needs `qpdf-wasm`).
- Blog at `/how-to/...` targeting informational keywords.
- `next-intl` stub for ES/FR/DE translations.
- Programmatic SEO: `/compress-pdf-to-{100kb,500kb,1mb}`.

## License

MIT.
