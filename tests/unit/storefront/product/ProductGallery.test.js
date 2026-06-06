import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductGallery from "@/components/storefront/product/ProductGallery.js";

describe("ProductGallery", () => {
  it("renders gallery", () => {
    render(<ProductGallery productName="Wireless Keyboard" />);

    expect(screen.getByLabelText("Wireless Keyboard gallery")).toBeInTheDocument();
    expect(screen.getByLabelText("Wireless Keyboard image")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Image 1" })).toBeInTheDocument();
  });
});
