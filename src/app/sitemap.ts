import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogData";

const BASE_URL = "https://www.waterfordautoshine.com";

// Real last-content-change dates. Update the date when a page's copy changes;
// a wall-clock timestamp makes every page look edited on every request.
const staticPages: Array<[path: string, lastModified: string]> = [
  ["", "2026-09-04"],
  ["/services", "2026-05-19"],
  ["/services/exterior-detailing", "2026-05-26"],
  ["/services/interior-detailing", "2026-05-21"],
  ["/services/full-detailing", "2026-05-21"],
  ["/quote", "2026-05-27"],
  ["/reviews", "2026-05-20"],
  ["/faq", "2026-05-19"],
  ["/service-area", "2026-05-26"],
  ["/blog", "2026-05-26"],
  ["/privacy-policy", "2026-05-27"],
  ["/terms-of-service", "2026-05-26"],
  ["/accessibility", "2026-05-26"],
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPages.map(([path, date]) => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date(date),
    })),
    ...blogPosts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
    })),
  ];
}
