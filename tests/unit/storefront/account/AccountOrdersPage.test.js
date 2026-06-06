import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import AccountOrdersPage from "@/components/storefront/account/AccountOrdersPage.js";

describe("AccountOrdersPage", () => {
  it("renders account orders page", () => {
    render(<AccountOrdersPage />);

    expect(screen.getByRole("heading", { name: "My orders" })).toBeInTheDocument();
    expect(screen.getByText("Alex Customer")).toBeInTheDocument();
    expect(screen.getByText("ORD-001")).toBeInTheDocument();
  });
});
