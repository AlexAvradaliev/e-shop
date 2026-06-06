import styles from "./OrderStatusBadge.module.css";

export default function OrderStatusBadge({
  status,
}) {
  return (
    <span className={styles.badge}>
      {status}
    </span>
  );
}
