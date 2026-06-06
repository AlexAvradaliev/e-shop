import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import FeaturedProducts from "@/components/storefront/home/FeaturedProducts.js";

describe("FeaturedProducts", () => {
  it("renders products", () => {
    render(
      <FeaturedProducts
        products={[
          {
            id: "product-1",
            name: "Wireless Keyboard",
            price: "29.99",
            badge: "Best price",
            href: "/products/wireless-keyboard",
          },
        ]}
      />
    );

    expect(screen.getByText("Featured products")).toBeInTheDocument();
    expect(screen.getByText("Best price")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Wireless Keyboard" })).toHaveAttribute(
      "href",
      "/products/wireless-keyboard"
    );
    expect(screen.getByText("€29.99")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Add to cart" })).toBeInTheDocument();
  });
});
