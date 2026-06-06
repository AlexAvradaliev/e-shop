import styles from "./AccountProfileCard.module.css";

export default function AccountProfileCard({
  user,
}) {
  return (
    <section className={styles.card} aria-label="Profile details">
      <p className={styles.eyebrow}>Profile</p>
      <h2 className={styles.name}>{user.name}</h2>

      <dl className={styles.list}>
        <div className={styles.row}>
          <dt>Email</dt>
          <dd>{user.email}</dd>
        </div>

        <div className={styles.row}>
          <dt>Role</dt>
          <dd>{user.role}</dd>
        </div>

        <div className={styles.row}>
          <dt>Registered</dt>
          <dd>{user.createdAt}</dd>
        </div>
      </dl>
    </section>
  );
}
