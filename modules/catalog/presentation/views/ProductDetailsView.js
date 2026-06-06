import ProductGallery
  from "../components/ProductGallery";

import ProductInfo
  from "../components/ProductInfo";

export default function ProductDetailsView({
  product,
}) {
  return (
    <main
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "1fr 1fr",
          gap: "40px",
        }}
      >
        <ProductGallery
          images={product.images}
          productName={product.name}
        />

        <ProductInfo
          product={product}
        />
      </div>
    </main>
  );
}