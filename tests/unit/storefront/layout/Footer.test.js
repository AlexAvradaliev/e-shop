import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "@/components/storefront/layout/Footer.js";

describe("Footer", () => {
  it("renders footer", () => {
    render(<Footer />);

    expect(screen.getByText("E-Shop")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Deals" })).toHaveAttribute(
      "href",
      "/categories/fresh-deals"
    );
    expect(screen.getByRole("link", { name: "Checkout" })).toHaveAttribute(
      "href",
      "/checkout"
    );
  });
});
