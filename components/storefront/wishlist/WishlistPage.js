import WishlistGrid from "./WishlistGrid.js";
import styles from "./WishlistPage.module.css";

export default function WishlistPage() {
  const items = [
    {
      id: "wishlist-1",
      name: "Wireless Keyboard",
      price: "29.99",
      href: "/products/wireless-keyboard",
    },
    {
      id: "wishlist-2",
      name: "USB-C Hub",
      price: "39.99",
      href: "/products/usb-c-hub",
    },
  ];

  return (
    <main className={styles.page}>
      <section className={styles.header}>
        <p className={styles.eyebrow}>Saved products</p>
        <h1 className={styles.title}>Wishlist</h1>
        <p className={styles.description}>
          Keep favorite products ready for your next basket.
        </p>
      </section>

      <section className={styles.content}>
        <WishlistGrid items={items} />
      </section>
    </main>
  );
}
