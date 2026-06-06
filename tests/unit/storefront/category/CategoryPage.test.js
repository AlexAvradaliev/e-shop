import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CategoryPage from "@/components/storefront/category/CategoryPage.js";

describe("CategoryPage", () => {
  it("renders category page sections", () => {
    render(<CategoryPage />);

    expect(screen.getByRole("heading", { name: "Fresh deals" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Filters" })).toBeInTheDocument();
    expect(screen.getByText("3 products")).toBeInTheDocument();
    expect(screen.getByText("Wireless Keyboard")).toBeInTheDocument();
    expect(screen.getByText("Page 1 of 3")).toBeInTheDocument();
  });
});
