import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductInfo from "@/components/storefront/product/ProductInfo.js";

describe("ProductInfo", () => {
  it("renders product information", () => {
    render(
      <ProductInfo
        product={{
          id: "product-1",
          name: "Wireless Keyboard",
          sku: "KB-001",
          price: "29.99",
          oldPrice: "39.99",
          badge: "Best price",
          stockLabel: "In stock",
          description: "Compact keyboard.",
        }}
      />
    );

    expect(screen.getByRole("heading", { name: "Wireless Keyboard" })).toBeInTheDocument();
    expect(screen.getByText("SKU: KB-001")).toBeInTheDocument();
    expect(screen.getByText("Best price")).toBeInTheDocument();
    expect(screen.getByText("In stock")).toBeInTheDocument();
    expect(screen.getByText("Compact keyboard.")).toBeInTheDocument();
  });
});
