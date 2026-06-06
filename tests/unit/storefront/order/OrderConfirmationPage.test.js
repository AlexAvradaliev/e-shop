import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import OrderConfirmationPage from "@/components/storefront/order/OrderConfirmationPage.js";

describe("OrderConfirmationPage", () => {
  it("renders success state", () => {
    render(<OrderConfirmationPage status="success" />);

    expect(screen.getByRole("heading", { name: "Thank you for your order" })).toBeInTheDocument();
    expect(screen.getByText(/ORD-001/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View orders" })).toHaveAttribute(
      "href",
      "/account/orders"
    );
  });

  it("renders cancel state", () => {
    render(<OrderConfirmationPage status="cancel" />);

    expect(screen.getByRole("heading", { name: "Checkout was cancelled" })).toBeInTheDocument();
    expect(screen.getByText(/basket is still available/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Back to cart" })).toHaveAttribute(
      "href",
      "/cart"
    );
  });
});
