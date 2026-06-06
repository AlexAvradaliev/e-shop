"use client";

import styles from "./SortSelect.module.css";

export default function SortSelect({
  value = "relevance",
  onChange = () => {},
}) {
  return (
    <label className={styles.label}>
      Sort by
      <select
        className={styles.select}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="relevance">Relevance</option>
        <option value="price-asc">Price ascending</option>
        <option value="price-desc">Price descending</option>
        <option value="newest">Newest</option>
      </select>
    </label>
  );
}
