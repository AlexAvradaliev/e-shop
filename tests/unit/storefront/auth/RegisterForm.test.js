import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterForm from "@/components/storefront/auth/RegisterForm.js";

describe("RegisterForm", () => {
  it("submits register data", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    render(<RegisterForm onSubmit={onSubmit} />);

    await user.type(screen.getByLabelText("Name"), "Alex Customer");
    await user.type(screen.getByLabelText("Email"), "alex@example.com");
    await user.type(screen.getByLabelText("Password"), "secret123");
    await user.type(screen.getByLabelText("Confirm password"), "secret123");
    await user.click(screen.getByRole("button", { name: "Create account" }));

    expect(onSubmit).toHaveBeenCalledWith({
      name: "Alex Customer",
      email: "alex@example.com",
      password: "secret123",
      confirmPassword: "secret123",
    });
  });

  it("works with default submit handler", async () => {
    const user = userEvent.setup();

    render(<RegisterForm />);

    await user.click(screen.getByRole("button", { name: "Create account" }));

    expect(screen.getByRole("button", { name: "Create account" })).toBeInTheDocument();
  });
});
