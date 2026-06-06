import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import QuantitySelector from "@/components/storefront/cart/QuantitySelector.js";

describe("QuantitySelector", () => {
  it("renders value", () => {
    render(<QuantitySelector value={2} />);

    expect(screen.getByLabelText("Quantity")).toHaveValue(2);
  });

  it("changes quantity", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<QuantitySelector value={0} onChange={onChange} />);

    await user.clear(screen.getByLabelText("Quantity"));
    await user.type(screen.getByLabelText("Quantity"), "3");

    expect(onChange).toHaveBeenLastCalledWith(3);
  });
  it("works with default change handler", async () => {
  const user = userEvent.setup();

  render(<QuantitySelector value={1} />);

  const input = screen.getByLabelText("Quantity");

  await user.clear(input);
  await user.type(input, "2");

  expect(input).toBeInTheDocument();
});
});
