import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import AccountQuickLinks from "@/components/storefront/account/AccountQuickLinks.js";

describe("AccountQuickLinks", () => {
  it("renders account links", () => {
    render(<AccountQuickLinks />);

    expect(screen.getByRole("link", { name: /My orders/i })).toHaveAttribute(
      "href",
      "/account/orders"
    );
    expect(screen.getByRole("link", { name: /Wishlist/i })).toHaveAttribute(
      "href",
      "/wishlist"
    );
    expect(screen.getByRole("link", { name: /Cart/i })).toHaveAttribute(
      "href",
      "/cart"
    );
  });
});
