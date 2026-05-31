import {
  describe,
  it,
  expect,
} from "vitest";

import {
  sortProducts,
} from "@/stores/products/sorting";

const products = [
  {
    id: "1",
    name: "B Product",
    price: 300,
  },
  {
    id: "2",
    name: "A Product",
    price: 100,
  },
  {
    id: "3",
    name: "C Product",
    price: 200,
  },
];

describe("Product Sorting", () => {
  it("sorts by price ascending", () => {
    const result =
      sortProducts(
        products,
        "price-asc"
      );

    expect(result[0].price)
      .toBe(100);
  });

  it("sorts by price descending", () => {
    const result =
      sortProducts(
        products,
        "price-desc"
      );

    expect(result[0].price)
      .toBe(300);
  });

  it("sorts by name ascending", () => {
    const result =
      sortProducts(
        products,
        "name-asc"
      );

    expect(result[0].name)
      .toBe("A Product");
  });

  it("returns original list for unknown sort", () => {
    const result =
      sortProducts(
        products,
        "unknown"
      );

    expect(result)
      .toHaveLength(3);
  });
  it("returns original order for unknown sort", () => {
  const products = [
    {
      id: "1",
      name: "B",
      price: 200,
    },
    {
      id: "2",
      name: "A",
      price: 100,
    },
  ];

  const result = sortProducts(
    products,
    "unknown-sort"
  );

  expect(result).toEqual(products);
});
it("returns original order for unknown sort type", () => {
  const products = [
    { name: "B", price: 20 },
    { name: "A", price: 10 },
  ];

  const result = sortProducts(
    products,
    "unknown-sort"
  );

  expect(result).toEqual(products);
});
it("sorts by name descending", () => {
  const result = sortProducts(
    products,
    "name-desc"
  );

  expect(result[0].name)
    .toBe("C Product");
});
});