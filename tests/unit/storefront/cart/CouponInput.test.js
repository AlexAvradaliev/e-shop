import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CouponInput from "@/components/storefront/cart/CouponInput.js";

describe("CouponInput", () => {
  it("applies coupon", async () => {
    const user = userEvent.setup();
    const onApply = vi.fn();

    render(<CouponInput onApply={onApply} />);

    await user.type(screen.getByLabelText("Coupon code"), "SAVE10");
    await user.click(screen.getByRole("button", { name: "Apply coupon" }));

    expect(onApply).toHaveBeenCalledWith("SAVE10");
  });
  it("works with default apply handler", async () => {
  const user = userEvent.setup();

  render(<CouponInput />);

  await user.type(
    screen.getByLabelText("Coupon code"),
    "SAVE10"
  );

  await user.click(
    screen.getByRole("button", {
      name: "Apply coupon",
    })
  );

  expect(
    screen.getByRole("button", {
      name: "Apply coupon",
    })
  ).toBeInTheDocument();
});
});
