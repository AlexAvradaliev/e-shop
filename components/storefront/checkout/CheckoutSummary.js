import styles from "./CheckoutSummary.module.css";

export default function CheckoutSummary({
  subtotal,
  shipping,
  total,
}) {
  return (
    <section className={styles.summary} aria-label="Checkout summary">
      <h2 className={styles.title}>Summary</h2>

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
    </section>
  );
}
