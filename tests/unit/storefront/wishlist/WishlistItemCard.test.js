import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WishlistItemCard from "@/components/storefront/wishlist/WishlistItemCard.js";

describe("WishlistItemCard", () => {
  const item = {
    id: "wishlist-1",
    name: "Wireless Keyboard",
    price: "29.99",
    href: "/products/wireless-keyboard",
  };

  it("renders wishlist item", () => {
    render(<WishlistItemCard item={item} />);

    expect(screen.getByRole("link", { name: "Wireless Keyboard" })).toHaveAttribute(
      "href",
      "/products/wireless-keyboard"
    );
    expect(screen.getByText("€29.99")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View product" })).toHaveAttribute(
      "href",
      "/products/wireless-keyboard"
    );
  });

  it("removes wishlist item", async () => {
    const user = userEvent.setup();
    const onRemove = vi.fn();

    render(<WishlistItemCard item={item} onRemove={onRemove} />);

    await user.click(screen.getByRole("button", { name: "Remove" }));

    expect(onRemove).toHaveBeenCalledWith("wishlist-1");
  });

  it("works with default remove handler", async () => {
    const user = userEvent.setup();

    render(<WishlistItemCard item={item} />);

    await user.click(screen.getByRole("button", { name: "Remove" }));

    expect(screen.getByRole("button", { name: "Remove" })).toBeInTheDocument();
  });
});
