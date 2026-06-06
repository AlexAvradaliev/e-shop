import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import WishlistPage from "@/components/storefront/wishlist/WishlistPage.js";

describe("WishlistPage", () => {
  it("renders wishlist page", () => {
    render(<WishlistPage />);

    expect(screen.getByRole("heading", { name: "Wishlist" })).toBeInTheDocument();
    expect(screen.getByText("Wireless Keyboard")).toBeInTheDocument();
  });
});
