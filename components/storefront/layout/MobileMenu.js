import styles from "./MobileMenu.module.css";

export default function MobileMenu({
  onClose,
}) {
  return (
    <div className={styles.backdrop} role="dialog" aria-label="Mobile menu">
      <div className={styles.panel}>
        <button className={styles.close} type="button" onClick={onClose}>
          Close
        </button>

        <a href="/">Home</a>
        <a href="/categories/fresh-deals">Deals</a>
        <a href="/search">Search</a>
        <a href="/wishlist">Wishlist</a>
        <a href="/cart">Cart</a>
        <a href="/account">Account</a>
      </div>
    </div>
  );
}
