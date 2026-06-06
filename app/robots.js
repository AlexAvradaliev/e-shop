export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin",
        "/api",
      ],
    },
    sitemap: "https://example.com/sitemap.xml",
  };
}
