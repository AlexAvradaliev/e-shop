import styles from "./CartSummary.module.css";

export default function CartSummary({
  subtotal,
  shipping,
  total,
}) {
  return (
    <aside className={styles.summary} aria-label="Cart summary">
      <h2 className={styles.title}>Order summary</h2>

      <dl className={styles.rows}>
        <div className={styles.row}>
          <dt>Subtotal</dt>
          <dd>€{subtotal.toFixed(2)}</dd>
        </div>

        <div className={styles.row}>
          <dt>Shipping</dt>
          <dd>€{shipping.toFixed(2)}</dd>
        </div>

        <div className={styles.total}>
          <dt>Total</dt>
          <dd>€{total.toFixed(2)}</dd>
        </div>
      </dl>

      <a className={styles.checkout} href="/checkout">
        Continue to checkout
      </a>
    </aside>
  );
}
