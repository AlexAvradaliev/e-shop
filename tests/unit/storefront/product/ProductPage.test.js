import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductPage from "@/components/storefront/product/ProductPage.js";

describe("ProductPage", () => {
  it("renders product page", () => {
    render(<ProductPage />);

    expect(screen.getByRole("heading", { name: "Wireless Keyboard" })).toBeInTheDocument();
    expect(screen.getByText("€29.99")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Product reviews" })).toBeInTheDocument();
    expect(screen.getByText("Related products")).toBeInTheDocument();
  });
});
