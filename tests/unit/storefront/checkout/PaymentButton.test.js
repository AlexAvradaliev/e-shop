import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PaymentButton from "@/components/storefront/checkout/PaymentButton.js";

describe("PaymentButton", () => {
  it("handles payment click", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<PaymentButton onClick={onClick} />);

    await user.click(screen.getByRole("button", { name: "Pay with Stripe" }));

    expect(onClick).toHaveBeenCalledOnce();
  });
  it("works with default click handler", async () => {
  const user = userEvent.setup();

  render(<PaymentButton />);

  await user.click(
    screen.getByRole("button", {
      name: "Pay with Stripe",
    })
  );

  expect(
    screen.getByRole("button", {
      name: "Pay with Stripe",
    })
  ).toBeInTheDocument();
});
});
