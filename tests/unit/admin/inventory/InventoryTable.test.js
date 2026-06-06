import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import InventoryTable from "@/components/admin/inventory/InventoryTable.js";

describe("InventoryTable", () => {
  it("renders empty state", () => {
    render(
      <InventoryTable
        items={[]}
      />
    );

    expect(screen.getByText("No inventory items found.")).toBeInTheDocument();
  });

  it("renders inventory items", () => {
    render(
      <InventoryTable
        items={[
          {
            productId: "product-1",
            productName: "Keyboard",
            sku: "KB-001",
            available: 12,
            reserved: 2,
          },
          {
            productId: "product-2",
            productName: "Mouse",
            sku: "MS-001",
            available: 0,
            reserved: 1,
          },
        ]}
      />
    );

    expect(screen.getByText("Keyboard")).toBeInTheDocument();
    expect(screen.getByText("KB-001")).toBeInTheDocument();
    expect(screen.getByText("12")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("Mouse")).toBeInTheDocument();
    expect(screen.getByText("MS-001")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("IN STOCK")).toBeInTheDocument();
    expect(screen.getByText("OUT OF STOCK")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Manage" })[0]).toHaveAttribute(
      "href",
      "/admin/inventory/product-1"
    );
  });
});
