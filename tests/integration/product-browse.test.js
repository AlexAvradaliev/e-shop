import {
  describe,
  it,
  expect,
} from "vitest";

import { searchProducts } from "@/stores/products/search";
import { filterProducts } from "@/stores/products/filters";
import { sortProducts } from "@/stores/products/sorting";

const products = [
  {
    id: "1",
    name: "iPhone",
    category: "phones",
    price: 1000,
    stock: 10,
  },
  {
    id: "2",
    name: "Galaxy",
    category: "phones",
    price: 800,
    stock: 5,
  },
  {
    id: "3",
    name: "ThinkPad",
    category: "laptops",
    price: 1500,
    stock: 4,
  },
];

describe("Product Browse Flow", () => {
  it("search filter sort flow", () => {
  let result =
    searchProducts(
      products,
      "iphone"
    );

  result =
    filterProducts(result, {
      category: "phones",
    });

  result =
    sortProducts(
      result,
      "price-asc"
    );

  expect(result)
    .toHaveLength(1);

  expect(result[0].price)
    .toBe(1000);
});
});