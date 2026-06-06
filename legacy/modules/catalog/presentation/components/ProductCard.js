import Link from "next/link";

export default function ProductCard({
  product,
}) {
  return (
    <article
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      <h2>{product.name}</h2>

      <p>
        €{product.price.toString()}
      </p>

      <Link
        href={`/products/${product.slug}`}
      >
        View Product
      </Link>
    </article>
  );
}