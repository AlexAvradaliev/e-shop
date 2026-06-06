import styles from "./HeroBanner.module.css";

export default function HeroBanner() {
  return (
    <section className={styles.hero} aria-label="Store hero">
      <div className={styles.content}>
        <p className={styles.eyebrow}>Online supermarket</p>
        <h1 className={styles.title}>
          Smart shopping for everyday essentials
        </h1>
        <p className={styles.description}>
          Discover weekly deals, fresh categories and fast checkout in one clean storefront.
        </p>

        <div className={styles.actions}>
          <a className={styles.primary} href="/products">
            Shop products
          </a>
          <a className={styles.secondary} href="/categories/fresh-deals">
            See deals
          </a>
        </div>
      </div>

      <div className={styles.card} aria-label="Highlighted promotion">
        <span className={styles.discount}>-30%</span>
        <p className={styles.cardTitle}>Weekly favorites</p>
        <p className={styles.cardText}>Fresh offers selected for your basket.</p>
      </div>
    </section>
  );
}
