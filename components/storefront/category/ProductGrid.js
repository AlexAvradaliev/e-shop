import ProductCard from "./ProductCard.js";
import styles from "./ProductGrid.module.css";

export default function ProductGrid({
  products = [],
}) {
  if (products.length === 0) {
    return (
      <p className={styles.empty}>No products found.</p>
    );
  }

  return (
    <section className={styles.grid} aria-label="Product grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </section>
  );
}
