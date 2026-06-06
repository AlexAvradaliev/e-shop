import styles from "./CategoryGrid.module.css";

export default function CategoryGrid({
  categories = [],
}) {
  return (
    <section className={styles.section} aria-label="Featured categories">
      <div className={styles.header}>
        <p className={styles.eyebrow}>Departments</p>
        <h2 className={styles.title}>Shop by category</h2>
      </div>

      <div className={styles.grid}>
        {categories.map((category) => (
          <a className={styles.card} href={category.href} key={category.id}>
            <span className={styles.icon} aria-hidden="true">●</span>
            <span>{category.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
