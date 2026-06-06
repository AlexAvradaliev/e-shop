import SearchBar from "./SearchBar.js";
import SearchResults from "./SearchResults.js";
import styles from "./SearchPage.module.css";

export default function SearchPage() {
  const results = [
    {
      id: "product-1",
      name: "Wireless Keyboard",
      price: "29.99",
      href: "/products/wireless-keyboard",
    },
    {
      id: "product-2",
      name: "Bluetooth Mouse",
      price: "19.99",
      href: "/products/bluetooth-mouse",
    },
  ];

  return (
    <main className={styles.page}>
      <section className={styles.header}>
        <p className={styles.eyebrow}>Search</p>
        <h1 className={styles.title}>Find products</h1>
        <p className={styles.description}>
          Search the catalog and discover products for your basket.
        </p>
      </section>

      <section className={styles.content}>
        <SearchBar />
        <SearchResults results={results} />
      </section>
    </main>
  );
}
