import styles from "./AccountSummary.module.css";

export default function AccountSummary({
  name,
  email,
  ordersCount,
}) {
  return (
    <aside className={styles.summary} aria-label="Account summary">
      <p className={styles.eyebrow}>Customer</p>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.email}>{email}</p>

      <div className={styles.stat}>
        <span className={styles.statValue}>{ordersCount}</span>
        <span className={styles.statLabel}>orders</span>
      </div>
    </aside>
  );
}
