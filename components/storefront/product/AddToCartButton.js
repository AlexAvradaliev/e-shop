"use client";

import styles from "./AddToCartButton.module.css";

export default function AddToCartButton({
  productId,
  onAdd = () => {},
}) {
  return (
    <button
      className={styles.button}
      type="button"
      onClick={() => onAdd(productId)}
    >
      Add to cart
    </button>
  );
}
