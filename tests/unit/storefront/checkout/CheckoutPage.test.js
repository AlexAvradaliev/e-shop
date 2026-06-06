import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CheckoutPage from "@/components/storefront/checkout/CheckoutPage.js";

describe("CheckoutPage", () => {
  it("renders checkout page", () => {
    render(<CheckoutPage />);

    expect(screen.getByRole("heading", { name: "Checkout" })).toBeInTheDocument();
    expect(screen.getByText("Delivery information")).toBeInTheDocument();
    expect(screen.getByText("Summary")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Pay with Stripe" })).toBeInTheDocument();
  });
});
