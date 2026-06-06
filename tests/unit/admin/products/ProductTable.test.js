import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductTable from "@/components/admin/products/ProductTable.js";

describe("ProductTable", () => {
  it("renders empty state", () => {
    render(
      <ProductTable
        products={[]}
        onDelete={vi.fn()}
      />
    );

    expect(screen.getByText("No products found.")).toBeInTheDocument();
  });

  it("renders products", () => {
    render(
      <ProductTable
        products={[
          {
            id: "product-1",
            name: "Keyboard",
            sku: "KB-001",
            price: 100,
            stock: 5,
            status: "ACTIVE",
          },
        ]}
        onDelete={vi.fn()}
      />
    );

    expect(screen.getByText("Keyboard")).toBeInTheDocument();
    expect(screen.getByText("KB-001")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("ACTIVE")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Edit" })).toHaveAttribute(
      "href",
      "/admin/products/product-1/edit"
    );
  });

  it("deletes product", async () => {
    const user = userEvent.setup();
    const onDelete = vi.fn();

    render(
      <ProductTable
        products={[
          {
            id: "product-1",
            name: "Keyboard",
            sku: "KB-001",
            price: 100,
            stock: 5,
            status: "ACTIVE",
          },
        ]}
        onDelete={onDelete}
      />
    );

    await user.click(screen.getByRole("button", { name: "Delete" }));

    expect(onDelete).toHaveBeenCalledWith("product-1");
  });
});
