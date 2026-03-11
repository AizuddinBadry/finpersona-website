import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://finpersona.com";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/features/tax-tracking`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/features/budgeting`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/features/split-bill`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tax-relief`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tax-return`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/avoid-overpaying-tax`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/events`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
