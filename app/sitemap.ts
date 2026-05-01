import { MetadataRoute } from "next";

import { BLOG_CONTENT, Language } from "./blog-content";
import { getAllMdxPosts } from "../lib/mdx";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://fintara.app";

// Slugs that 301-redirect to a canonical — exclude from sitemap to avoid confusion
const REDIRECTED_SLUGS = new Set([
  "optimal-portfolio-rebalancing-frequency-strategy",
  "optimal-portfolio-rebalancing-frequency-guide",
  "optimal-portfolio-rebalancing-frequency-stocks",
  "implementing-sector-rotation-strategy-etfs",
  "build-dividend-etf-portfolio-strategy",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/es`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/es/blog`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
  ];

  // Collect all post slugs per language (MDX takes precedence, then hardcoded)
  const blogPages: MetadataRoute.Sitemap = [];

  for (const lang of ["en", "es"] as Language[]) {
    const mdxPosts = getAllMdxPosts(lang);
    const hardcoded = BLOG_CONTENT[lang];
    const seen = new Set<string>();

    // MDX posts — canonical URL is /blog/{slug} (publisher route)
    for (const post of mdxPosts) {
      if (!seen.has(post.slug) && !REDIRECTED_SLUGS.has(post.slug)) {
        seen.add(post.slug);
        const prefix = lang === "en" ? "/blog" : "/es/blog";
        blogPages.push({
          url: `${SITE_URL}${prefix}/${post.slug}`,
          lastModified: post.date ? new Date(post.date).toISOString() : now,
          changeFrequency: "monthly",
          priority: 0.7,
        });
      }
    }

    // Hardcoded posts (only if not already covered by MDX)
    for (const post of hardcoded) {
      if (!seen.has(post.slug)) {
        seen.add(post.slug);
        const prefix = lang === "en" ? "/blog" : "/es/blog";
        blogPages.push({
          url: `${SITE_URL}${prefix}/${post.slug}`,
          lastModified: post.date ? new Date(post.date).toISOString() : now,
          changeFrequency: "monthly",
          priority: 0.7,
        });
      }
    }
  }

  return [...staticPages, ...blogPages];
}
