export default function manifest() {
  return {
    name: "E-Shop V2",
    short_name: "E-Shop",
    description: "Modern supermarket-inspired e-commerce storefront.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#005caf",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
