import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { TOOLS } from "@/content/tools";
import { BLOG_POSTS } from "@/content/posts";

const PROGRAMMATIC_SLUGS = [
  "compress-pdf-to-100kb",
  "compress-pdf-to-500kb",
  "compress-pdf-to-1mb",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = ["", "about", "privacy"];
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
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE.url}/how-to/${post.slug}`,
      lastModified: new Date(post.datePublished),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...PROGRAMMATIC_SLUGS.map((slug) => ({
      url: `${SITE.url}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
