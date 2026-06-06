import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import SearchPage from "@/components/storefront/search/SearchPage.js";

describe("SearchPage", () => {
  it("renders search page", () => {
    render(<SearchPage />);

    expect(screen.getByRole("heading", { name: "Find products" })).toBeInTheDocument();
    expect(screen.getByLabelText("Search products")).toBeInTheDocument();
    expect(screen.getByText("Wireless Keyboard")).toBeInTheDocument();
  });
});
