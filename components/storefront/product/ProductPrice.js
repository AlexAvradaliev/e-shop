import styles from "./ProductPrice.module.css";

export default function ProductPrice({
  price,
  oldPrice = null,
}) {
  return (
    <div className={styles.priceBlock} aria-label="Product price">
      <span className={styles.price}>€{price}</span>
      {oldPrice ? (
        <span className={styles.oldPrice}>€{oldPrice}</span>
      ) : null}
    </div>
  );
}
