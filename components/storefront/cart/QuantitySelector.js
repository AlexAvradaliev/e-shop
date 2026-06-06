"use client";

import styles from "./QuantitySelector.module.css";

export default function QuantitySelector({
  value,
  onChange = () => {},
}) {
  return (
    <label className={styles.label}>
      Quantity
      <input
        className={styles.input}
        type="number"
        min="1"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}
