"use client";

import styles from "./PaymentButton.module.css";

export default function PaymentButton({
  onClick = () => {},
}) {
  return (
    <button
      className={styles.button}
      type="button"
      onClick={onClick}
    >
      Pay with Stripe
    </button>
  );
}
