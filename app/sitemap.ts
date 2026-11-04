import type { MetadataRoute } from "next";
import { SITE_URL, updates } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/projects",
    "/projects/destiny-code",
    "/updates",
    ...updates.map((u) => `/updates/${u.slug}`),
    "/research",
    "/about",
    "/code",
  ];
  return paths.map((path) => ({ url: `${SITE_URL}${path}` }));
}
