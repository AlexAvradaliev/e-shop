import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductGrid from "@/components/storefront/category/ProductGrid.js";

describe("ProductGrid", () => {
  it("renders empty state", () => {
    render(<ProductGrid products={[]} />);

    expect(screen.getByText("No products found.")).toBeInTheDocument();
  });

  it("renders products", () => {
    render(
      <ProductGrid
        products={[
          {
            id: "product-1",
            name: "Wireless Keyboard",
            price: "29.99",
            badge: "Best price",
            href: "/products/wireless-keyboard",
            stockLabel: "In stock",
          },
        ]}
      />
    );

    expect(screen.getByRole("link", { name: "Wireless Keyboard" })).toBeInTheDocument();
  });
});
