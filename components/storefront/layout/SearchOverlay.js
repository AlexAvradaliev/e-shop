"use client";

import { useState } from "react";
import styles from "./SearchOverlay.module.css";

export default function SearchOverlay({
  onClose,
  onSearch = () => {},
}) {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(query);
  }

  return (
    <div className={styles.backdrop} role="dialog" aria-label="Search overlay">
      <form className={styles.panel} onSubmit={handleSubmit}>
        <button className={styles.close} type="button" onClick={onClose}>
          Close
        </button>

        <label className={styles.label}>
          Search products
          <input
            className={styles.input}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>

        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
