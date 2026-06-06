import styles from "./AccountQuickLinks.module.css";

export default function AccountQuickLinks() {
  const links = [
    {
      href: "/account/orders",
      label: "My orders",
      description: "Track previous orders and delivery status.",
    },
    {
      href: "/wishlist",
      label: "Wishlist",
      description: "Review your saved products.",
    },
    {
      href: "/cart",
      label: "Cart",
      description: "Continue your shopping basket.",
    },
  ];

  return (
    <section className={styles.card} aria-label="Account quick links">
      <p className={styles.eyebrow}>Shortcuts</p>

      <div className={styles.links}>
        {links.map((link) => (
          <a className={styles.link} href={link.href} key={link.href}>
            <span className={styles.label}>{link.label}</span>
            <span className={styles.description}>{link.description}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
