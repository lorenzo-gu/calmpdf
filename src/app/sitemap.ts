import type { MetadataRoute } from "next";
import { PUBLISHED_BLOG_POSTS } from "@/content/posts";
import { PROGRAMMATIC_SITEMAP_ROUTES, STATIC_SITEMAP_ROUTES } from "@/content/routes";
import { TOOLS } from "@/content/tools";
import { SITE } from "@/lib/site";

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
    ...PROGRAMMATIC_SITEMAP_ROUTES.map((route) => ({
      url: `${SITE.url}/${route.slug}`,
      lastModified: new Date(route.lastModified),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
  ];
}
