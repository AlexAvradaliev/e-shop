import styles from "./AuthLayout.module.css";

export default function AuthLayout({
  title,
  description,
  children,
}) {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Customer account</p>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>

        {children}
      </section>
    </main>
  );
}
