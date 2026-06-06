import styles from "./FeaturedProducts.module.css";

export default function FeaturedProducts({
  products = [],
}) {
  return (
    <section className={styles.section} aria-label="Featured products">
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Weekly selection</p>
          <h2 className={styles.title}>Featured products</h2>
        </div>

        <a className={styles.link} href="/products">
          View all
        </a>
      </div>

      <div className={styles.grid}>
        {products.map((product) => (
          <article className={styles.card} key={product.id}>
            <div className={styles.imagePlaceholder} aria-hidden="true" />
            <span className={styles.badge}>{product.badge}</span>
            <h3 className={styles.name}>
              <a href={product.href}>{product.name}</a>
            </h3>
            <p className={styles.price}>€{product.price}</p>
            <button className={styles.button} type="button">
              Add to cart
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
