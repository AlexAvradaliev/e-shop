import styles from "./FooterColumns.module.css";

export default function FooterColumns() {
  const columns = [
    {
      title: "Shop",
      links: [
        { href: "/categories/fresh-deals", label: "Deals" },
        { href: "/search", label: "Search" },
        { href: "/wishlist", label: "Wishlist" },
      ],
    },
    {
      title: "Account",
      links: [
        { href: "/login", label: "Login" },
        { href: "/register", label: "Register" },
        { href: "/account/orders", label: "Orders" },
      ],
    },
    {
      title: "Help",
      links: [
        { href: "/cart", label: "Cart" },
        { href: "/checkout", label: "Checkout" },
        { href: "/account", label: "Account" },
      ],
    },
  ];

  return (
    <div className={styles.columns}>
      {columns.map((column) => (
        <section className={styles.column} key={column.title}>
          <h3>{column.title}</h3>
          {column.links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </section>
      ))}
    </div>
  );
}
