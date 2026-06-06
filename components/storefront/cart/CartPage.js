import CartTable from "./CartTable.js";
import CartSummary from "./CartSummary.js";
import CouponInput from "./CouponInput.js";
import styles from "./CartPage.module.css";

export default function CartPage() {
  const items = [
    {
      id: "item-1",
      name: "Wireless Keyboard",
      price: 29.99,
      quantity: 1,
    },
    {
      id: "item-2",
      name: "Bluetooth Mouse",
      price: 19.99,
      quantity: 2,
    },
  ];

  return (
    <main className={styles.page}>
      <section className={styles.header}>
        <p className={styles.eyebrow}>Shopping basket</p>
        <h1 className={styles.title}>Your cart</h1>
      </section>

      <section className={styles.layout} aria-label="Cart content">
        <div className={styles.main}>
          <CartTable items={items} />
          <CouponInput />
        </div>

        <CartSummary
          subtotal={69.97}
          shipping={4.99}
          total={74.96}
        />
      </section>
    </main>
  );
}
