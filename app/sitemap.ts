import type { MetadataRoute } from "next";
import { news, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/activities", "/events", "/news", "/team", "/join", "/contact"];
  const notes = news.map((item) => `/news/${item.slug}`);
  return [...paths, ...notes].map((path) => ({
    url: new URL(path || "/", site.url).toString(),
    lastModified: new Date("2026-10-03"),
  }));
}
