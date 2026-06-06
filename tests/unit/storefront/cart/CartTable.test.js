import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CartTable from "@/components/storefront/cart/CartTable.js";

describe("CartTable", () => {
  it("renders empty cart", () => {
    render(<CartTable items={[]} />);

    expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
  });

  it("renders cart items", () => {
    render(
      <CartTable
        items={[
          {
            id: "item-1",
            name: "Wireless Keyboard",
            price: 29.99,
            quantity: 2,
          },
        ]}
      />
    );

    expect(screen.getByText("Wireless Keyboard")).toBeInTheDocument();
    expect(screen.getByText("€29.99")).toBeInTheDocument();
    expect(screen.getByText("€59.98")).toBeInTheDocument();
  });
});
