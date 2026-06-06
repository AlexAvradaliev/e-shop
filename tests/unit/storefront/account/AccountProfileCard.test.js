import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import AccountProfileCard from "@/components/storefront/account/AccountProfileCard.js";

describe("AccountProfileCard", () => {
  it("renders profile data", () => {
    render(
      <AccountProfileCard
        user={{
          name: "Alex Customer",
          email: "alex@example.com",
          role: "USER",
          createdAt: "2026-01-01",
        }}
      />
    );

    expect(screen.getByText("Alex Customer")).toBeInTheDocument();
    expect(screen.getByText("alex@example.com")).toBeInTheDocument();
    expect(screen.getByText("USER")).toBeInTheDocument();
    expect(screen.getByText("2026-01-01")).toBeInTheDocument();
  });
});
