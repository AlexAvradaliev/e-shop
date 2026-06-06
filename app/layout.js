import StorefrontLayout from "@/components/storefront/layout/StorefrontLayout.js";
import StorefrontSeo from "@/components/storefront/seo/StorefrontSeo.js";

export const metadata = {
  title: {
    default: "E-Shop V2",
    template: "%s | E-Shop V2",
  },
  description: "Backend-first Clean Architecture e-commerce project",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "E-Shop V2",
    description: "Modern supermarket-inspired e-commerce storefront.",
    url: "https://example.com",
    siteName: "E-Shop V2",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <body>
        <StorefrontSeo />
        <StorefrontLayout>
          {children}
        </StorefrontLayout>
      </body>
    </html>
  );
}
