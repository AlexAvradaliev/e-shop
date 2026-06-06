import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CartPage from "@/components/storefront/cart/CartPage.js";

describe("CartPage", () => {
  it("renders cart page", () => {
    render(<CartPage />);

    expect(screen.getByRole("heading", { name: "Your cart" })).toBeInTheDocument();
    expect(screen.getByText("Wireless Keyboard")).toBeInTheDocument();
    expect(screen.getByText("Order summary")).toBeInTheDocument();
  });
});
