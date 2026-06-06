import styles from "./Navigation.module.css";

export default function Navigation() {
  const links = [
    { href: "/categories/fresh-deals", label: "Deals" },
    { href: "/categories/electronics", label: "Electronics" },
    { href: "/categories/home-essentials", label: "Home" },
    { href: "/search", label: "Search" },
  ];

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      {links.map((link) => (
        <a href={link.href} key={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}
