import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CartSummary from "@/components/storefront/cart/CartSummary.js";

describe("CartSummary", () => {
  it("renders cart summary", () => {
    render(<CartSummary subtotal={69.97} shipping={4.99} total={74.96} />);

    expect(screen.getByText("Order summary")).toBeInTheDocument();
    expect(screen.getByText("€69.97")).toBeInTheDocument();
    expect(screen.getByText("€4.99")).toBeInTheDocument();
    expect(screen.getByText("€74.96")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Continue to checkout" })).toHaveAttribute(
      "href",
      "/checkout"
    );
  });
});
