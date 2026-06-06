import styles from "./OrderConfirmationPage.module.css";

export default function OrderConfirmationPage({
  status = "success",
}) {
  const isSuccess = status === "success";

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <p className={styles.eyebrow}>
          {isSuccess ? "Payment confirmed" : "Payment cancelled"}
        </p>

        <h1 className={styles.title}>
          {isSuccess ? "Thank you for your order" : "Checkout was cancelled"}
        </h1>

        <p className={styles.description}>
          {isSuccess
            ? "Your order ORD-001 has been received and is being prepared."
            : "Your basket is still available. You can return to checkout when ready."}
        </p>

        <div className={styles.actions}>
          <a className={styles.primary} href="/account/orders">
            View orders
          </a>
          <a className={styles.secondary} href="/cart">
            Back to cart
          </a>
        </div>
      </section>
    </main>
  );
}
