import Link from "next/link";

export function ProductGrid({ products }) {
  return (
    <div
      style={{
        display: "grid",
        gap: "24px",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(280px,1fr))",
      }}
    >
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.slug}`}
        >
          <div>
            <h3>{product.name}</h3>

            <p>{product.price} €</p>

            <p>
              {product.isAvailable()
                ? "In Stock"
                : "Out Of Stock"}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}