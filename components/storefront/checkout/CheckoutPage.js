import AddressForm from "./AddressForm.js";
import CheckoutSummary from "./CheckoutSummary.js";
import PaymentButton from "./PaymentButton.js";
import styles from "./CheckoutPage.module.css";

export default function CheckoutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.header}>
        <p className={styles.eyebrow}>Secure checkout</p>
        <h1 className={styles.title}>Checkout</h1>
      </section>

      <section className={styles.layout} aria-label="Checkout content">
        <AddressForm />
        <aside className={styles.side}>
          <CheckoutSummary
            subtotal={69.97}
            shipping={4.99}
            total={74.96}
          />
          <PaymentButton />
        </aside>
      </section>
    </main>
  );
}
