import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import AuthLayout from "@/components/storefront/auth/AuthLayout.js";

describe("AuthLayout", () => {
  it("renders layout content", () => {
    render(
      <AuthLayout title="Sign in" description="Access your account.">
        <p>Form content</p>
      </AuthLayout>
    );

    expect(screen.getByRole("heading", { name: "Sign in" })).toBeInTheDocument();
    expect(screen.getByText("Access your account.")).toBeInTheDocument();
    expect(screen.getByText("Form content")).toBeInTheDocument();
  });
});
