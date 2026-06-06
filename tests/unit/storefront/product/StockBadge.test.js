import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import StockBadge from "@/components/storefront/product/StockBadge.js";

describe("StockBadge", () => {
  it("renders stock label", () => {
    render(<StockBadge label="In stock" />);

    expect(screen.getByText("In stock")).toBeInTheDocument();
  });
});
