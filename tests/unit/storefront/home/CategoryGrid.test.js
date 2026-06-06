import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CategoryGrid from "@/components/storefront/home/CategoryGrid.js";

describe("CategoryGrid", () => {
  it("renders categories", () => {
    render(
      <CategoryGrid
        categories={[
          {
            id: "category-1",
            name: "Fresh deals",
            href: "/categories/fresh-deals",
          },
        ]}
      />
    );

    expect(screen.getByText("Shop by category")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Fresh deals/i })).toHaveAttribute(
      "href",
      "/categories/fresh-deals"
    );
  });
});
