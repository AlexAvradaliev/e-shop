import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import FilterSidebar from "@/components/storefront/category/FilterSidebar.js";

describe("FilterSidebar", () => {
  it("renders filters", () => {
    render(
      <FilterSidebar
        filters={[
          { id: "promo", label: "Promotions" },
        ]}
      />
    );

    expect(screen.getByRole("heading", { name: "Filters" })).toBeInTheDocument();
    expect(screen.getByLabelText("Promotions")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Apply filters" })).toBeInTheDocument();
  });
});
