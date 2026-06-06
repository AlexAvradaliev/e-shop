import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductPrice from "@/components/storefront/product/ProductPrice.js";

describe("ProductPrice", () => {
  it("renders price with old price", () => {
    render(<ProductPrice price="29.99" oldPrice="39.99" />);

    expect(screen.getByText("€29.99")).toBeInTheDocument();
    expect(screen.getByText("€39.99")).toBeInTheDocument();
  });

  it("renders price without old price", () => {
    render(<ProductPrice price="29.99" />);

    expect(screen.getByText("€29.99")).toBeInTheDocument();
    expect(screen.queryByText("€39.99")).not.toBeInTheDocument();
  });
});
