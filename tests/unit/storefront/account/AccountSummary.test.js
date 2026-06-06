import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import AccountSummary from "@/components/storefront/account/AccountSummary.js";

describe("AccountSummary", () => {
  it("renders account summary", () => {
    render(<AccountSummary name="Alex Customer" email="alex@example.com" ordersCount={2} />);

    expect(screen.getByText("Alex Customer")).toBeInTheDocument();
    expect(screen.getByText("alex@example.com")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("orders")).toBeInTheDocument();
  });
});
