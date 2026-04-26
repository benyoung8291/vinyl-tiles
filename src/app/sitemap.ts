import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vinyltiles.com.au";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/why-vinyl-tiles`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/how-we-work`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/residential`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Range pages
    ...(["interface", "karndean", "armstrong", "tarkett"] as const).map(
      (slug) => ({
        url: `${baseUrl}/ranges/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })
    ),
    // Solution pages
    ...(
      [
        "office-flooring",
        "retail-flooring",
        "healthcare-flooring",
        "education-flooring",
        "hospitality-flooring",
      ] as const
    ).map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
