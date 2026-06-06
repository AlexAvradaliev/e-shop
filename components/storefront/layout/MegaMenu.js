import styles from "./MegaMenu.module.css";

export default function MegaMenu() {
  const departments = [
    "Fresh deals",
    "Electronics",
    "Home essentials",
    "Beauty",
    "Best sellers",
  ];

  return (
    <nav className={styles.mega} aria-label="Departments">
      <div className={styles.inner}>
        {departments.map((department) => (
          <a href={`/categories/${department.toLowerCase().replaceAll(" ", "-")}`} key={department}>
            {department}
          </a>
        ))}
      </div>
    </nav>
  );
}
