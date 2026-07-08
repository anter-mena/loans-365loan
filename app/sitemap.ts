import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/seo";
import { LOAN_AMOUNTS } from "@/lib/loans/amounts";
import { LOAN_PURPOSES } from "@/lib/loans/purposes";
import { CREDIT_SCORE_RANGES } from "@/lib/loans/credit-scores";
import { LOAN_TYPES } from "@/lib/loans/types";
import { PROVINCES } from "@/lib/loans/locations";
import { REPAYMENT_TERMS } from "@/lib/loans/terms";
import { COMPARISONS } from "@/lib/loans/comparisons";
import { GUIDES } from "@/lib/guides";
import { getAllPosts } from "@/lib/blog";
import { getAllNews } from "@/lib/news";

type ChangeFreq = MetadataRoute.Sitemap[number]["changeFrequency"];

function entries(paths: string[], priority: number, changeFrequency: ChangeFreq, lastModified: Date): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: { path: string; priority: number; changeFrequency: ChangeFreq }[] = [
    { path: "",                   priority: 1.0, changeFrequency: "weekly" },
    { path: "/application-form",  priority: 0.9, changeFrequency: "monthly" },
    { path: "/loans",             priority: 0.9, changeFrequency: "weekly" },
    { path: "/resources",         priority: 0.8, changeFrequency: "weekly" },
    { path: "/blog",              priority: 0.8, changeFrequency: "weekly" },
    { path: "/news",              priority: 0.8, changeFrequency: "daily" },
    { path: "/loans/by-amount",         priority: 0.8, changeFrequency: "monthly" },
    { path: "/loans/by-purpose",        priority: 0.8, changeFrequency: "monthly" },
    { path: "/loans/by-credit-score",   priority: 0.8, changeFrequency: "monthly" },
    { path: "/loans/by-type",           priority: 0.8, changeFrequency: "monthly" },
    { path: "/loans/by-location",       priority: 0.8, changeFrequency: "monthly" },
    { path: "/loans/by-term",           priority: 0.8, changeFrequency: "monthly" },
    { path: "/resources/guides",              priority: 0.7, changeFrequency: "weekly" },
    { path: "/resources/comparisons",          priority: 0.7, changeFrequency: "monthly" },
    { path: "/resources/faq",                  priority: 0.7, changeFrequency: "monthly" },
    { path: "/resources/tools/loan-calculator", priority: 0.7, changeFrequency: "monthly" },
    { path: "/aboutus",           priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact",           priority: 0.6, changeFrequency: "monthly" },
    { path: "/privacy-policy",    priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms-of-use",      priority: 0.3, changeFrequency: "yearly" },
  ];

  return [
    ...staticRoutes.map(({ path, priority, changeFrequency }) => ({
      url: `${BASE_URL}${path}`,
      lastModified,
      changeFrequency,
      priority,
    })),
    ...entries(LOAN_AMOUNTS.map((a) => `/loans/by-amount/${a.slug}`), 0.7, "monthly", lastModified),
    ...entries(LOAN_PURPOSES.map((p) => `/loans/by-purpose/${p.slug}`), 0.7, "monthly", lastModified),
    ...entries(CREDIT_SCORE_RANGES.map((r) => `/loans/by-credit-score/${r.slug}`), 0.7, "monthly", lastModified),
    ...entries(LOAN_TYPES.map((t) => `/loans/by-type/${t.slug}`), 0.7, "monthly", lastModified),
    ...entries(PROVINCES.map((p) => `/loans/by-location/${p.slug}`), 0.7, "monthly", lastModified),
    ...entries(REPAYMENT_TERMS.map((t) => `/loans/by-term/${t.slug}`), 0.7, "monthly", lastModified),
    ...entries(COMPARISONS.map((c) => `/resources/comparisons/${c.slug}`), 0.6, "monthly", lastModified),
    ...entries(GUIDES.map((g) => `/resources/guides/${g.slug}`), 0.6, "monthly", lastModified),
    ...getAllPosts().map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(`${post.updated}T00:00:00Z`),
      changeFrequency: "weekly" as ChangeFreq,
      priority: 0.7,
    })),
    ...getAllNews().map((item) => ({
      url: `${BASE_URL}/news/${item.slug}`,
      lastModified: new Date(`${item.updated}T00:00:00Z`),
      changeFrequency: "weekly" as ChangeFreq,
      priority: 0.7,
    })),
  ];
}
