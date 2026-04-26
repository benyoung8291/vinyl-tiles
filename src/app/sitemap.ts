import type { MetadataRoute } from "next";
import { ranges } from "@/lib/ranges";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vinyltiles.com.au";
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "monthly", priority: 1, lastModified },
    { url: `${baseUrl}/why-vinyl-tiles`, changeFrequency: "monthly", priority: 0.9, lastModified },
    { url: `${baseUrl}/how-we-work`, changeFrequency: "monthly", priority: 0.8, lastModified },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly", priority: 0.9, lastModified },
    { url: `${baseUrl}/residential`, changeFrequency: "monthly", priority: 0.9, lastModified },
    { url: `${baseUrl}/sustainable-alternative`, changeFrequency: "monthly", priority: 0.7, lastModified },
    { url: `${baseUrl}/manufacturers`, changeFrequency: "monthly", priority: 0.8, lastModified },
  ];

  const solutionPages: MetadataRoute.Sitemap = [
    "office-flooring",
    "retail-flooring",
    "healthcare-flooring",
    "education-flooring",
    "hospitality-flooring",
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified,
  }));

  const rangePages: MetadataRoute.Sitemap = ranges.map((range) => ({
    url: `${baseUrl}/ranges/${range.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
    lastModified,
  }));

  const productPages: MetadataRoute.Sitemap = ranges.flatMap((range) =>
    range.products.map((product) => ({
      url: `${baseUrl}/ranges/${range.slug}/${product.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      lastModified,
    }))
  );

  return [...staticPages, ...solutionPages, ...rangePages, ...productPages];
}
