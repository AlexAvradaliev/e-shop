import styles from "./PromoBanner.module.css";

export default function PromoBanner() {
  return (
    <section className={styles.banner} aria-label="Promotion banner">
      <div>
        <p className={styles.eyebrow}>Limited offer</p>
        <h2 className={styles.title}>Build your basket with seasonal savings</h2>
      </div>

      <a className={styles.button} href="/categories/fresh-deals">
        Explore offers
      </a>
    </section>
  );
}
