import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import StorefrontLayout from "@/components/storefront/layout/StorefrontLayout.js";

describe("StorefrontLayout", () => {
  it("renders header footer and children", () => {
    render(
      <StorefrontLayout>
        <main>Page content</main>
      </StorefrontLayout>
    );

    expect(screen.getByRole("link", { name: "E-Shop" })).toBeInTheDocument();
    expect(screen.getByText("Page content")).toBeInTheDocument();
    expect(screen.getByText("Modern online shopping experience inspired by supermarket e-commerce.")).toBeInTheDocument();
  });
});
