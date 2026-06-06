import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductCard from "@/components/storefront/category/ProductCard.js";

describe("ProductCard", () => {
  it("renders product card", () => {
    render(
      <ProductCard
        product={{
          id: "product-1",
          name: "Wireless Keyboard",
          price: "29.99",
          badge: "Best price",
          href: "/products/wireless-keyboard",
          stockLabel: "In stock",
        }}
      />
    );

    expect(screen.getByText("Best price")).toBeInTheDocument();
    expect(screen.getByText("In stock")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Wireless Keyboard" })).toHaveAttribute(
      "href",
      "/products/wireless-keyboard"
    );
    expect(screen.getByText("€29.99")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Add to cart" })).toBeInTheDocument();
  });
});
