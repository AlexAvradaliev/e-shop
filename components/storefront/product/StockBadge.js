import styles from "./StockBadge.module.css";

export default function StockBadge({
  label,
}) {
  return (
    <span className={styles.stock}>
      {label}
    </span>
  );
}
