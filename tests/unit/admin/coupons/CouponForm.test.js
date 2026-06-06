import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CouponForm from "@/components/admin/coupons/CouponForm.js";

describe("CouponForm", () => {
  it("renders empty create form defaults", () => {
    render(
      <CouponForm
        onSubmit={vi.fn()}
      />
    );

    expect(screen.getByLabelText("Code")).toHaveValue("");
    expect(screen.getByLabelText("Type")).toHaveValue("PERCENTAGE");
    expect(screen.getByLabelText("Value")).toHaveValue(null);
    expect(screen.getByLabelText("Active")).toHaveValue("true");
  });

  it("renders initial coupon values", () => {
    render(
      <CouponForm
        initialCoupon={{
          code: "OFF5",
          type: "FIXED",
          value: 5,
          isActive: false,
        }}
        onSubmit={vi.fn()}
      />
    );

    expect(screen.getByLabelText("Code")).toHaveValue("OFF5");
    expect(screen.getByLabelText("Type")).toHaveValue("FIXED");
    expect(screen.getByLabelText("Value")).toHaveValue(5);
    expect(screen.getByLabelText("Active")).toHaveValue("false");
  });

  it("submits coupon data", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    render(
      <CouponForm
        onSubmit={onSubmit}
      />
    );

    await user.type(screen.getByLabelText("Code"), "SAVE10");
    await user.selectOptions(screen.getByLabelText("Type"), "PERCENTAGE");
    await user.type(screen.getByLabelText("Value"), "10");
    await user.selectOptions(screen.getByLabelText("Active"), "false");

    await user.click(screen.getByRole("button", { name: "Save coupon" }));

    expect(onSubmit).toHaveBeenCalledWith({
      code: "SAVE10",
      type: "PERCENTAGE",
      value: 10,
      isActive: false,
    });
  });
});
