import styles from "./ProductCard.module.css";

export default function ProductCard({
  product,
}) {
  return (
    <article className={styles.card}>
      <div className={styles.imagePlaceholder} aria-hidden="true" />

      <div className={styles.header}>
        <span className={styles.badge}>{product.badge}</span>
        <span className={styles.stock}>{product.stockLabel}</span>
      </div>

      <h2 className={styles.name}>
        <a href={product.href}>{product.name}</a>
      </h2>

      <p className={styles.price}>€{product.price}</p>

      <button className={styles.button} type="button">
        Add to cart
      </button>
    </article>
  );
}
