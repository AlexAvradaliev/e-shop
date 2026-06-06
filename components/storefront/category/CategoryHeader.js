import styles from "./CategoryHeader.module.css";

export default function CategoryHeader({
  name,
  description,
}) {
  return (
    <section className={styles.header} aria-label="Category header">
      <p className={styles.eyebrow}>Store department</p>
      <h1 className={styles.title}>{name}</h1>
      <p className={styles.description}>{description}</p>
    </section>
  );
}
