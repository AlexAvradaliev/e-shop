import HeroBanner from "./HeroBanner.js";
import CategoryGrid from "./CategoryGrid.js";
import FeaturedProducts from "./FeaturedProducts.js";
import PromoBanner from "./PromoBanner.js";
import NewsletterSignup from "./NewsletterSignup.js";
import HomeProductSection from "./HomeProductSection.js";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const categories = [
    {
      id: "category-1",
      name: "Fresh deals",
      href: "/categories/fresh-deals",
    },
    {
      id: "category-2",
      name: "Electronics",
      href: "/categories/electronics",
    },
    {
      id: "category-3",
      name: "Home essentials",
      href: "/categories/home-essentials",
    },
    {
      id: "category-4",
      name: "Beauty",
      href: "/categories/beauty",
    },
  ];

  const products = [
    {
      id: "product-1",
      name: "Wireless Keyboard",
      price: "29.99",
      badge: "Best price",
      href: "/products/wireless-keyboard",
    },
    {
      id: "product-2",
      name: "Bluetooth Mouse",
      price: "19.99",
      badge: "Promo",
      href: "/products/bluetooth-mouse",
    },
    {
      id: "product-3",
      name: "USB-C Hub",
      price: "39.99",
      badge: "New",
      href: "/products/usb-c-hub",
    },
  ];

  const bestSellers = [
    {
      id: "best-1",
      name: "Family Coffee Pack",
      price: "8.99",
      href: "/products/family-coffee-pack",
    },
    {
      id: "best-2",
      name: "Eco Cleaning Set",
      price: "12.99",
      href: "/products/eco-cleaning-set",
    },
    {
      id: "best-3",
      name: "Office Starter Kit",
      price: "24.99",
      href: "/products/office-starter-kit",
    },
    {
      id: "best-4",
      name: "Daily Essentials Box",
      price: "18.99",
      href: "/products/daily-essentials-box",
    },
  ];

  const newArrivals = [
    {
      id: "new-1",
      name: "Smart LED Lamp",
      price: "22.99",
      href: "/products/smart-led-lamp",
    },
    {
      id: "new-2",
      name: "Reusable Bottle",
      price: "9.99",
      href: "/products/reusable-bottle",
    },
    {
      id: "new-3",
      name: "Premium Notebook",
      price: "6.99",
      href: "/products/premium-notebook",
    },
    {
      id: "new-4",
      name: "Compact Charger",
      price: "15.99",
      href: "/products/compact-charger",
    },
  ];

  return (
    <main className={styles.page}>
      <HeroBanner />
      <CategoryGrid categories={categories} />
      <FeaturedProducts products={products} />
      <HomeProductSection
        eyebrow="Customer favorites"
        title="Best sellers"
        products={bestSellers}
      />
      <PromoBanner />
      <HomeProductSection
        eyebrow="Just added"
        title="New arrivals"
        products={newArrivals}
      />
      <NewsletterSignup />
    </main>
  );
}
