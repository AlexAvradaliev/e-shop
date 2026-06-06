import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddToCartButton from "@/components/storefront/product/AddToCartButton.js";

describe("AddToCartButton", () => {
  it("adds product to cart", async () => {
    const user = userEvent.setup();
    const onAdd = vi.fn();

    render(<AddToCartButton productId="product-1" onAdd={onAdd} />);

    await user.click(screen.getByRole("button", { name: "Add to cart" }));

    expect(onAdd).toHaveBeenCalledWith("product-1");
  });

  it("works with default handler", async () => {
    const user = userEvent.setup();

    render(<AddToCartButton productId="product-1" />);

    await user.click(screen.getByRole("button", { name: "Add to cart" }));

    expect(screen.getByRole("button", { name: "Add to cart" })).toBeInTheDocument();
  });
});
