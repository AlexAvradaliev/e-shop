import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import RegisterPage from "@/components/storefront/auth/RegisterPage.js";

describe("RegisterPage", () => {
  it("renders register page", () => {
    render(<RegisterPage />);

    expect(screen.getByRole("heading", { name: "Create account" })).toBeInTheDocument();
    expect(screen.getByRole("form", { name: "Register form" })).toBeInTheDocument();
  });
});
