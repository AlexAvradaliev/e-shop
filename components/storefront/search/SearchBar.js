"use client";

import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({
  onSearch = () => {},
}) {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(query);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-label="Search form">
      <label className={styles.label}>
        Search products
        <input
          className={styles.input}
          value={query}
          placeholder="Search products"
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>

      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
}
