import AdminButtonLink from "@/components/admin/ui/AdminButtonLink.js";
import AdminPageShell from "@/components/admin/ui/AdminPageShell.js";
import styles from "./page.module.css";

export default function AdminDashboardPage() {
  const sections = [
    {
      title: "Products",
      description: "Manage catalog products, prices and publication state.",
      href: "/admin/products",
    },
    {
      title: "Categories",
      description: "Organize the storefront departments.",
      href: "/admin/categories",
    },
    {
      title: "Brands",
      description: "Manage product brands.",
      href: "/admin/brands",
    },
    {
      title: "Orders",
      description: "Track customer orders and fulfillment.",
      href: "/admin/orders",
    },
    {
      title: "Coupons",
      description: "Create and manage discount codes.",
      href: "/admin/coupons",
    },
    {
      title: "Inventory",
      description: "Monitor stock and reservations.",
      href: "/admin/inventory",
    },
    {
      title: "Users",
      description: "Review customers and account status.",
      href: "/admin/users",
    },
  ];

  return (
    <AdminPageShell
      title="Admin dashboard"
      description="Manage the e-commerce platform from one place."
      action={<AdminButtonLink href="/">Open storefront</AdminButtonLink>}
    >
      <section className={styles.grid} aria-label="Admin sections">
        {sections.map((section) => (
          <article className={styles.card} key={section.href}>
            <h2 className={styles.cardTitle}>{section.title}</h2>
            <p className={styles.cardDescription}>{section.description}</p>
            <a className={styles.cardLink} href={section.href}>
              Open {section.title}
            </a>
          </article>
        ))}
      </section>
    </AdminPageShell>
  );
}
