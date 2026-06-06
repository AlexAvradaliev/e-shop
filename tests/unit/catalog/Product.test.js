import { describe, expect, it } from "vitest";
import { Product } from "@/modules/catalog/domain/Product";

describe("Product Entity", () => {
  it("creates valid product", () => {
    const product = new Product({
      id: "1",
      name: "iPhone 17",
      slug: "iphone-17",
      sku: "APL-001",
      price: 1000,
      stock: 10,
      categoryId: "cat1",
    });

    expect(product.name).toBe("iPhone 17");
  });

  it("throws when stock is negative", () => {
    expect(() => {
      new Product({
        id: "1",
        name: "Phone",
        slug: "phone",
        sku: "SKU1",
        price: 100,
        stock: -1,
        categoryId: "cat1",
      });
    }).toThrow();
  });

  it("decreases stock", () => {
    const product = new Product({
      id: "1",
      name: "Phone",
      slug: "phone",
      sku: "SKU1",
      price: 100,
      stock: 10,
      categoryId: "cat1",
    });

    product.decreaseStock(3);

    expect(product.stock).toBe(7);
  });

  it("throws when decreasing more than stock", () => {
  const product = new Product({
    id: "1",
    name: "Test",
    slug: "test",
    price: 100,
    sku: "SKU1",
    stock: 5,
    status: "ACTIVE",
    categoryId: "cat1",
  });

  expect(() => {
    product.decreaseStock(10);
  }).toThrow();
});

it("throws when quantity is zero", () => {
  const product = new Product({
    id: "1",
    name: "Test",
    slug: "test",
    price: 100,
    sku: "SKU1",
    stock: 5,
    status: "ACTIVE",
    categoryId: "cat1",
  });

  expect(() => {
    product.decreaseStock(0);
  }).toThrow();
});
});