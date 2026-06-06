import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import HeroBanner from "@/components/storefront/home/HeroBanner.js";

describe("HeroBanner", () => {
  it("renders hero content", () => {
    render(<HeroBanner />);

    expect(
      screen.getByRole("heading", {
        name: "Smart shopping for everyday essentials",
      })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Shop products" })).toHaveAttribute(
      "href",
      "/products"
    );
    expect(screen.getByRole("link", { name: "See deals" })).toHaveAttribute(
      "href",
      "/categories/fresh-deals"
    );
  });
});
