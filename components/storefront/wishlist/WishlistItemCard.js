"use client";

import styles from "./WishlistItemCard.module.css";

export default function WishlistItemCard({
  item,
  onRemove = () => {},
}) {
  return (
    <article className={styles.card}>
      <div className={styles.imagePlaceholder} aria-hidden="true" />

      <h2 className={styles.name}>
        <a href={item.href}>{item.name}</a>
      </h2>

      <p className={styles.price}>€{item.price}</p>

      <div className={styles.actions}>
        <a className={styles.primary} href={item.href}>
          View product
        </a>

        <button
          className={styles.secondary}
          type="button"
          onClick={() => onRemove(item.id)}
        >
          Remove
        </button>
      </div>
    </article>
  );
}
