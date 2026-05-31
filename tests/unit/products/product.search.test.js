import {
  describe,
  it,
  expect,
} from "vitest";

import {
  searchProducts,
} from "@/stores/products/search";

const products = [
  {
    id: "1",
    name: "iPhone 15",
  },
  {
    id: "2",
    name: "Samsung Galaxy S24",
  },
  {
    id: "3",
    name: "MacBook Pro",
  },
];

describe("Product Search", () => {
  it("finds product by exact name", () => {
    const result =
      searchProducts(
        products,
        "iPhone 15"
      );

    expect(result)
      .toHaveLength(1);
  });

  it("finds product by partial name", () => {
    const result =
      searchProducts(
        products,
        "Galaxy"
      );

    expect(result)
      .toHaveLength(1);
  });

  it("ignores case", () => {
    const result =
      searchProducts(
        products,
        "iphone"
      );

    expect(result)
      .toHaveLength(1);
  });

  it("returns empty array when no match exists", () => {
    const result =
      searchProducts(
        products,
        "Nokia"
      );

    expect(result)
      .toEqual([]);
  });

  it("returns all products for empty search", () => {
    const result =
      searchProducts(
        products,
        ""
      );

    expect(result)
      .toHaveLength(3);
  });
});