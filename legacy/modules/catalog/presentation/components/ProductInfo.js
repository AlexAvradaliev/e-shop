export default function ProductInfo({
  product,
}) {
  return (
    <div>
      <h1>
        {product.name}
      </h1>

      <p>
        Category:
        {" "}
        {product.category?.name}
      </p>

      <p>
        Price:
        {" "}
        €
        {product.price.toString()}
      </p>

      <p>
        Stock:
        {" "}
        {product.stock}
      </p>

      <p>
        {product.description}
      </p>
    </div>
  );
}