import styles from "./HomeProductSection.module.css";

export default function HomeProductSection({
  eyebrow,
  title,
  products = [],
}) {
  return (
    <section className={styles.section} aria-label={title}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 className={styles.title}>{title}</h2>
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
