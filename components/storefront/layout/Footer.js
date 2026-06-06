import FooterColumns from "./FooterColumns.js";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <h2 className={styles.logo}>E-Shop</h2>
          <p className={styles.text}>
            Modern online shopping experience inspired by supermarket e-commerce.
          </p>
        </div>

        <FooterColumns />
      </div>
    </footer>
  );
}
