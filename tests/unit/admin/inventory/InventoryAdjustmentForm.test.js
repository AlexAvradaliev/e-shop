import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InventoryAdjustmentForm from "@/components/admin/inventory/InventoryAdjustmentForm.js";

describe("InventoryAdjustmentForm", () => {
  it("renders default values", () => {
    render(
      <InventoryAdjustmentForm
        productId="product-1"
        onSubmit={vi.fn()}
      />
    );

    expect(screen.getByLabelText("Operation")).toHaveValue("ADJUST");
    expect(screen.getByLabelText("Quantity")).toHaveValue(null);
    expect(screen.getByLabelText("Reason")).toHaveValue("");
  });

  it("submits inventory adjustment", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    render(
      <InventoryAdjustmentForm
        productId="product-1"
        onSubmit={onSubmit}
      />
    );

    await user.selectOptions(screen.getByLabelText("Operation"), "RESERVE");
    await user.type(screen.getByLabelText("Quantity"), "3");
    await user.type(screen.getByLabelText("Reason"), "Customer checkout");

    await user.click(
      screen.getByRole("button", { name: "Save inventory change" })
    );

    expect(onSubmit).toHaveBeenCalledWith({
      productId: "product-1",
      operation: "RESERVE",
      quantity: 3,
      reason: "Customer checkout",
    });
  });
});
