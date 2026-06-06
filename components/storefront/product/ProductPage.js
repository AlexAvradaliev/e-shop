import ProductGallery from "./ProductGallery.js";
import ProductInfo from "./ProductInfo.js";
import RelatedProducts from "./RelatedProducts.js";
import ProductReviewsSection from "@/components/storefront/reviews/ProductReviewsSection.js";
import styles from "./ProductPage.module.css";

export default function ProductPage() {
  const product = {
    id: "product-1",
    name: "Wireless Keyboard",
    sku: "KB-001",
    price: "29.99",
    oldPrice: "39.99",
    badge: "Best price",
    stockLabel: "In stock",
    description:
      "A compact wireless keyboard designed for fast checkout, home office and everyday shopping tasks.",
  };

  const relatedProducts = [
    {
      id: "product-2",
      name: "Bluetooth Mouse",
      price: "19.99",
      href: "/products/bluetooth-mouse",
    },
    {
      id: "product-3",
      name: "USB-C Hub",
      price: "39.99",
      href: "/products/usb-c-hub",
    },
    {
      id: "product-4",
      name: "Desk Mat",
      price: "14.99",
      href: "/products/desk-mat",
    },
  ];

  return (
    <main className={styles.page}>
      <section className={styles.layout} aria-label="Product details">
        <ProductGallery productName={product.name} />
        <ProductInfo product={product} />
      </section>

      <ProductReviewsSection />

      <RelatedProducts products={relatedProducts} />
    </main>
  );
}
