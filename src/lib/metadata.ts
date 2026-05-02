import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { getTool, type Tool } from "@/content/tools";
import { getPost, type Post } from "@/content/posts";

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
};

function absoluteUrl(path: string): string {
  return new URL(path, SITE.url).toString();
}

export function buildPageMetadata({ title, description, path, type = "website", image }: BuildPageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const socialImage = image ? absoluteUrl(image) : absoluteUrl(SITE.ogImage);

  return {
    title,
    description,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      type,
      url: canonical,
      title,
      description,
      siteName: SITE.name,
      images: [{ url: socialImage }],
    },
    twitter: {
      card: "summary_large_image",
      creator: SITE.twitter,
      title,
      description,
      images: [socialImage],
    },
  };
}

export function buildToolMetadata(toolOrSlug: Tool | string): Metadata {
  const tool = typeof toolOrSlug === "string" ? getTool(toolOrSlug) : toolOrSlug;
  if (!tool) return {};
  return buildPageMetadata({ title: tool.title, description: tool.description, path: `/${tool.slug}` });
}

export function buildPostMetadata(postOrSlug: Post | string): Metadata {
  const post = typeof postOrSlug === "string" ? getPost(postOrSlug) : postOrSlug;
  if (!post) return {};
  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: `/how-to/${post.slug}`,
    type: "article",
    image: post.image,
  });
}
