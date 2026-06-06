import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import LoginPage from "@/components/storefront/auth/LoginPage.js";

describe("LoginPage", () => {
  it("renders login page", () => {
    render(<LoginPage />);

    expect(screen.getByRole("heading", { name: "Sign in" })).toBeInTheDocument();
    expect(screen.getByRole("form", { name: "Login form" })).toBeInTheDocument();
  });
});
