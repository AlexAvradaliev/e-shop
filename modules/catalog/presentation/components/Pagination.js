import Link from "next/link";

export default function Pagination({
  page,
  pages,
  search,
}) {
  if (pages <= 1) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginTop: "40px",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {page > 1 && (
        <Link
          href={`/products?page=${page - 1}&q=${search}`}
        >
          Previous
        </Link>
      )}

      {Array.from(
        { length: pages },
        (_, i) => i + 1
      ).map((number) => (
        <Link
          key={number}
          href={`/products?page=${number}&q=${search}`}
          style={{
            fontWeight:
              number === page
                ? "bold"
                : "normal",
          }}
        >
          {number}
        </Link>
      ))}

      {page < pages && (
        <Link
          href={`/products?page=${page + 1}&q=${search}`}
        >
          Next
        </Link>
      )}
    </div>
  );
}