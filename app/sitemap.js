export default function sitemap() {
  const baseUrl = "https://example.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/categories/fresh-deals`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products/wireless-keyboard`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];
}
