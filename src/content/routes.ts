import type { MetadataRoute } from "next";

export type StaticSitemapRoute = {
  path: `/${string}` | "/";
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

export type ProgrammaticSitemapRoute = {
  slug: string;
  lastModified: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

export const STATIC_SITEMAP_ROUTES: StaticSitemapRoute[] = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.5 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.2 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.4 },
  { path: "/tools", changeFrequency: "weekly", priority: 0.8 },
  { path: "/how-to", changeFrequency: "weekly", priority: 0.8 },
];

export const PROGRAMMATIC_SITEMAP_ROUTES: ProgrammaticSitemapRoute[] = [
  { slug: "compress-pdf-to-100kb", lastModified: "2026-04-30", changeFrequency: "monthly", priority: 0.75 },
  { slug: "compress-pdf-to-200kb", lastModified: "2026-04-30", changeFrequency: "monthly", priority: 0.75 },
  { slug: "compress-pdf-to-500kb", lastModified: "2026-04-30", changeFrequency: "monthly", priority: 0.75 },
  { slug: "compress-pdf-to-1mb", lastModified: "2026-04-30", changeFrequency: "monthly", priority: 0.75 },
  { slug: "compress-pdf-to-2mb", lastModified: "2026-04-30", changeFrequency: "monthly", priority: 0.75 },
  { slug: "compress-pdf-for-email", lastModified: "2026-04-30", changeFrequency: "monthly", priority: 0.75 },
  { slug: "pdf-to-word-for-contracts", lastModified: "2026-05-05", changeFrequency: "monthly", priority: 0.8 },
  { slug: "merge-pdf-for-mortgage-application", lastModified: "2026-05-05", changeFrequency: "monthly", priority: 0.8 },
  { slug: "compress-pdf-for-visa-application", lastModified: "2026-05-05", changeFrequency: "monthly", priority: 0.8 },
  { slug: "ilovepdf-alternative", lastModified: "2026-05-06", changeFrequency: "monthly", priority: 0.7 },
  { slug: "smallpdf-alternative", lastModified: "2026-05-06", changeFrequency: "monthly", priority: 0.7 },
  { slug: "browser-only-pdf-editor", lastModified: "2026-05-06", changeFrequency: "monthly", priority: 0.72 },
  { slug: "private-pdf-tools-online", lastModified: "2026-05-06", changeFrequency: "monthly", priority: 0.72 },
  { slug: "free-pdf-merger-without-signup", lastModified: "2026-05-06", changeFrequency: "monthly", priority: 0.72 },
  { slug: "browser-based-pdf-converter", lastModified: "2026-05-09", changeFrequency: "monthly", priority: 0.74 },
];
