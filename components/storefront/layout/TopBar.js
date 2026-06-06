import styles from "./TopBar.module.css";

export default function TopBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <span>Free delivery from €49</span>
        <a href="/account">My account</a>
      </div>
    </div>
  );
}
