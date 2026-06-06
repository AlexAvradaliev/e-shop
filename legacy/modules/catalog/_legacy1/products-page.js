import Link from "next/link";

export function ProductsPage({
  products,
}) {
  return (
    <div className="container">
      <h1>Products</h1>

      <div>
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
          >
            {product.name}
          </Link>
        ))}
      </div>
    </div>
  );
}