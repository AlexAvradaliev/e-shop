import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CategoryHeader from "@/components/storefront/category/CategoryHeader.js";

describe("CategoryHeader", () => {
  it("renders category header", () => {
    render(
      <CategoryHeader
        name="Fresh deals"
        description="Weekly offers."
      />
    );

    expect(screen.getByText("Store department")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Fresh deals" })).toBeInTheDocument();
    expect(screen.getByText("Weekly offers.")).toBeInTheDocument();
  });
});
