import WishlistItemCard from "./WishlistItemCard.js";
import styles from "./WishlistGrid.module.css";

export default function WishlistGrid({
  items = [],
}) {
  if (items.length === 0) {
    return (
      <p className={styles.empty}>Your wishlist is empty.</p>
    );
  }

  return (
    <section className={styles.grid} aria-label="Wishlist items">
      {items.map((item) => (
        <WishlistItemCard
          key={item.id}
          item={item}
        />
      ))}
    </section>
  );
}
