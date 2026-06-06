"use client";

import styles from "./FilterSidebar.module.css";

export default function FilterSidebar({
  filters = [],
}) {
  return (
    <aside className={styles.sidebar} aria-label="Product filters">
      <h2 className={styles.title}>Filters</h2>

      <div className={styles.group}>
        {filters.map((filter) => (
          <label className={styles.option} key={filter.id}>
            <input type="checkbox" />
            <span>{filter.label}</span>
          </label>
        ))}
      </div>

      <button className={styles.button} type="button">
        Apply filters
      </button>
    </aside>
  );
}
