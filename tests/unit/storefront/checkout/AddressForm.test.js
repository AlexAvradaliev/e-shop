import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddressForm from "@/components/storefront/checkout/AddressForm.js";

describe("AddressForm", () => {
  it("submits address", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    render(<AddressForm onSubmit={onSubmit} />);

    await user.type(screen.getByLabelText("Full name"), "Alex Customer");
    await user.type(screen.getByLabelText("Email"), "alex@example.com");
    await user.type(screen.getByLabelText("Address"), "1 Main Street");
    await user.type(screen.getByLabelText("City"), "Paris");
    await user.type(screen.getByLabelText("Postal code"), "75001");

    await user.click(screen.getByRole("button", { name: "Save delivery information" }));

    expect(onSubmit).toHaveBeenCalledWith({
      fullName: "Alex Customer",
      email: "alex@example.com",
      address: "1 Main Street",
      city: "Paris",
      postalCode: "75001",
    });
  });
  it("works with default submit handler", async () => {
  const user = userEvent.setup();

  render(<AddressForm />);

  await user.click(
    screen.getByRole("button", {
      name: "Save delivery information",
    })
  );

  expect(
    screen.getByRole("button", {
      name: "Save delivery information",
    })
  ).toBeInTheDocument();
});
});
