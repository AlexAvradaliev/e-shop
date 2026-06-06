import Link from "next/link";

export default function CategorySidebar({
  categories,
}) {
  return (
    <aside
      style={{
        width: "250px",
      }}
    >
      <h3>Categories</h3>

      <ul>
        <li>
          <Link href="/products">
            All
          </Link>
        </li>

        {categories.map((category) => (
          <li key={category.id}>
            <Link
              href={`/products?category=${category.slug}`}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}