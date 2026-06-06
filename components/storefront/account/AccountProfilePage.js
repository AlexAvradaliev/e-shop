import AccountProfileCard from "./AccountProfileCard.js";
import AccountQuickLinks from "./AccountQuickLinks.js";
import styles from "./AccountProfilePage.module.css";

export default function AccountProfilePage() {
  const user = {
    name: "Alex Customer",
    email: "alex@example.com",
    role: "USER",
    createdAt: "2026-01-01",
  };

  return (
    <main className={styles.page}>
      <section className={styles.header}>
        <p className={styles.eyebrow}>My account</p>
        <h1 className={styles.title}>Account overview</h1>
        <p className={styles.description}>
          Manage your profile, saved products and order activity.
        </p>
      </section>

      <section className={styles.layout} aria-label="Account overview">
        <AccountProfileCard user={user} />
        <AccountQuickLinks />
      </section>
    </main>
  );
}
