import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import NewsletterSignup from "@/components/storefront/home/NewsletterSignup.js";

describe("NewsletterSignup", () => {
  it("renders newsletter form", () => {
    render(<NewsletterSignup />);

    expect(screen.getByText("Get weekly deals in your inbox")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("you@example.com")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Subscribe" })).toBeInTheDocument();
  });
});
