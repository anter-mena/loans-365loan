import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "",                   priority: 1.0, changeFrequency: "weekly" },
    { path: "/application-form",  priority: 0.9, changeFrequency: "monthly" },
    { path: "/loans",             priority: 0.8, changeFrequency: "weekly" },
    { path: "/resources",         priority: 0.8, changeFrequency: "weekly" },
    { path: "/aboutus",           priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact",           priority: 0.6, changeFrequency: "monthly" },
    { path: "/privacy-policy",    priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms-of-use",      priority: 0.3, changeFrequency: "yearly" },
  ];

  const lastModified = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
