import styles from "./RelatedProducts.module.css";

export default function RelatedProducts({
  products = [],
}) {
  return (
    <section className={styles.section} aria-label="Related products">
      <div className={styles.header}>
        <p className={styles.eyebrow}>You may also like</p>
        <h2 className={styles.title}>Related products</h2>
      </div>

      <div className={styles.grid}>
        {products.map((product) => (
          <article className={styles.card} key={product.id}>
            <div className={styles.imagePlaceholder} aria-hidden="true" />
            <h3 className={styles.name}>
              <a href={product.href}>{product.name}</a>
            </h3>
            <p className={styles.price}>€{product.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
