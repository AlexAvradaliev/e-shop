import CategoryHeader from "./CategoryHeader.js";
import FilterSidebar from "./FilterSidebar.js";
import ProductGrid from "./ProductGrid.js";
import SortSelect from "./SortSelect.js";
import Pagination from "./Pagination.js";
import styles from "./CategoryPage.module.css";

export default function CategoryPage({
  category = {
    name: "Fresh deals",
    description: "Weekly offers and selected products for your basket.",
  },
}) {
  const filters = [
    {
      id: "availability",
      label: "In stock",
    },
    {
      id: "promo",
      label: "Promotions",
    },
    {
      id: "new",
      label: "New products",
    },
  ];

  const products = [
    {
      id: "product-1",
      name: "Wireless Keyboard",
      price: "29.99",
      badge: "Best price",
      href: "/products/wireless-keyboard",
      stockLabel: "In stock",
    },
    {
      id: "product-2",
      name: "Bluetooth Mouse",
      price: "19.99",
      badge: "Promo",
      href: "/products/bluetooth-mouse",
      stockLabel: "In stock",
    },
    {
      id: "product-3",
      name: "USB-C Hub",
      price: "39.99",
      badge: "New",
      href: "/products/usb-c-hub",
      stockLabel: "Low stock",
    },
  ];

  return (
    <main className={styles.page}>
      <CategoryHeader
        name={category.name}
        description={category.description}
      />

      <section className={styles.layout} aria-label="Category catalog">
        <FilterSidebar filters={filters} />

        <div className={styles.content}>
          <div className={styles.toolbar}>
            <p className={styles.count}>{products.length} products</p>
            <SortSelect />
          </div>

          <ProductGrid products={products} />

          <Pagination
            currentPage={1}
            totalPages={3}
          />
        </div>
      </section>
    </main>
  );
}
