import {
  describe,
  it,
  expect,
} from "vitest";

import {
  filterProducts,
} from "@/stores/products/filters";

const products = [
  {
    id: "1",
    category: "phones",
    price: 500,
    stock: 10,
  },
  {
    id: "2",
    category: "laptops",
    price: 1500,
    stock: 0,
  },
  {
    id: "3",
    category: "phones",
    price: 800,
    stock: 5,
  },
];

describe("Product Filters", () => {
  it("filters by category", () => {
    const result =
      filterProducts(products, {
        category:
          "phones",
      });

    expect(result)
      .toHaveLength(2);
  });

  it("filters by minimum price", () => {
    const result =
      filterProducts(products, {
        minPrice:
          700,
      });

    expect(result)
      .toHaveLength(2);
  });

  it("filters by maximum price", () => {
    const result =
      filterProducts(products, {
        maxPrice:
          600,
      });

    expect(result)
      .toHaveLength(1);
  });

  it("filters only in-stock products", () => {
    const result =
      filterProducts(products, {
        inStock:
          true,
      });

    expect(result)
      .toHaveLength(2);
  });

  it("combines multiple filters", () => {
    const result =
      filterProducts(products, {
        category:
          "phones",
        minPrice:
          700,
      });

    expect(result)
      .toHaveLength(1);
  });
});