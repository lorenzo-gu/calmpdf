import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { TOOLS } from "@/content/tools";
import { PUBLISHED_BLOG_POSTS } from "@/content/posts";
import { PROGRAMMATIC_PAGES } from "@/content/programmatic-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = ["", "about", "privacy", "terms", "contact", "blog", "tools", "pdf-to-images", "images-to-pdf", "jpg-to-pdf", "png-to-pdf", "pdf-to-jpg", "pdf-to-png", "extract-pdf-pages", "remove-pdf-pages", "reorder-pdf-pages", "add-page-numbers-to-pdf", "protect-pdf", "unlock-pdf", "pdf-metadata-viewer", "pdf-metadata-editor"];
  return [
    ...staticPaths.map((p) => ({
      url: `${SITE.url}${p ? `/${p}` : ""}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.5,
    })),
    ...TOOLS.map((t) => ({
      url: `${SITE.url}/${t.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    {
      url: `${SITE.url}/how-to`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...PUBLISHED_BLOG_POSTS.map((post) => ({
      url: `${SITE.url}/how-to/${post.slug}`,
      lastModified: new Date(post.datePublished),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...PROGRAMMATIC_PAGES.map((page) => ({
      url: `${SITE.url}/${page.slug}`,
      lastModified: now,
      changeFrequency: page.sitemap.changeFrequency,
      priority: page.sitemap.priority,
    })),
  ];
}
