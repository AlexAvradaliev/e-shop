import AddToCartButton from "./AddToCartButton.js";
import ProductPrice from "./ProductPrice.js";
import StockBadge from "./StockBadge.js";
import styles from "./ProductInfo.module.css";

export default function ProductInfo({
  product,
}) {
  return (
    <section className={styles.info} aria-label="Product information">
      <p className={styles.eyebrow}>Product details</p>
      <h1 className={styles.title}>{product.name}</h1>
      <p className={styles.sku}>SKU: {product.sku}</p>

      <div className={styles.row}>
        <span className={styles.badge}>{product.badge}</span>
        <StockBadge label={product.stockLabel} />
      </div>

      <ProductPrice
        price={product.price}
        oldPrice={product.oldPrice}
      />

      <p className={styles.description}>{product.description}</p>

      <AddToCartButton productId={product.id} />
    </section>
  );
}
