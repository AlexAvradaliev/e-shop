import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import WishlistGrid from "@/components/storefront/wishlist/WishlistGrid.js";

describe("WishlistGrid", () => {
  it("renders empty state", () => {
    render(<WishlistGrid items={[]} />);

    expect(screen.getByText("Your wishlist is empty.")).toBeInTheDocument();
  });

  it("renders wishlist items", () => {
    render(
      <WishlistGrid
        items={[
          {
            id: "wishlist-1",
            name: "Wireless Keyboard",
            price: "29.99",
            href: "/products/wireless-keyboard",
          },
        ]}
      />
    );

    expect(screen.getByText("Wireless Keyboard")).toBeInTheDocument();
  });
});
