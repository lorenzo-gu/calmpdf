import type { MetadataRoute } from "next";
import { PUBLISHED_BLOG_POSTS } from "@/content/posts";
import { PROGRAMMATIC_PAGES } from "@/content/programmatic-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...STATIC_SITEMAP_ROUTES.map((route) => ({
      url: `${SITE.url}${route.path === "/" ? "" : route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...TOOLS.map((tool) => ({
      url: `${SITE.url}/${tool.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...PUBLISHED_BLOG_POSTS.map((post) => ({
      url: `${SITE.url}/how-to/${post.slug}`,
      lastModified: new Date(post.dateModified || post.datePublished),
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
