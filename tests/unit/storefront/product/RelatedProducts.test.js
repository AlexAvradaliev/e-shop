import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import RelatedProducts from "@/components/storefront/product/RelatedProducts.js";

describe("RelatedProducts", () => {
  it("renders related products", () => {
    render(
      <RelatedProducts
        products={[
          {
            id: "product-2",
            name: "Bluetooth Mouse",
            price: "19.99",
            href: "/products/bluetooth-mouse",
          },
        ]}
      />
    );

    expect(screen.getByText("Related products")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Bluetooth Mouse" })).toHaveAttribute(
      "href",
      "/products/bluetooth-mouse"
    );
    expect(screen.getByText("€19.99")).toBeInTheDocument();
  });
});
