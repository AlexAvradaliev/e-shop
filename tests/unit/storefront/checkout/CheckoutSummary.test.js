import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CheckoutSummary from "@/components/storefront/checkout/CheckoutSummary.js";

describe("CheckoutSummary", () => {
  it("renders checkout summary", () => {
    render(<CheckoutSummary subtotal={69.97} shipping={4.99} total={74.96} />);

    expect(screen.getByText("Summary")).toBeInTheDocument();
    expect(screen.getByText("€69.97")).toBeInTheDocument();
    expect(screen.getByText("€4.99")).toBeInTheDocument();
    expect(screen.getByText("€74.96")).toBeInTheDocument();
  });
});
