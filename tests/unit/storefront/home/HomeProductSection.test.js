import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import HomeProductSection from "@/components/storefront/home/HomeProductSection.js";

describe("HomeProductSection", () => {
  it("renders product section", () => {
    render(
      <HomeProductSection
        eyebrow="Customer favorites"
        title="Best sellers"
        products={[
          {
            id: "best-1",
            name: "Family Coffee Pack",
            price: "8.99",
            href: "/products/family-coffee-pack",
          },
        ]}
      />
    );

    expect(screen.getByText("Customer favorites")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Best sellers" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Family Coffee Pack" })).toHaveAttribute(
      "href",
      "/products/family-coffee-pack"
    );
    expect(screen.getByText("€8.99")).toBeInTheDocument();
  });
});
