export default function ProductGallery({
  images,
  productName,
}) {
  if (!images?.length) {
    return (
      <div>
        No image available
      </div>
    );
  }

  return (
    <div>
      <img
        src={images[0].url}
        alt={productName}
        width={500}
      />
    </div>
  );
}