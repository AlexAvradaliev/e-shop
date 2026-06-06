export function ProductDetailsPage({
  product,
}) {
  return (
    <main>
      <h1>{product.name}</h1>

      <p>{product.description}</p>

      <strong>
        {product.price.toString()} €
      </strong>
    </main>
  );
}