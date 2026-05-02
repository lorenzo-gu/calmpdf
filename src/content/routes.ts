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
];
