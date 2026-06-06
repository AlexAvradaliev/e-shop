import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import UserDetails from "@/components/admin/users/UserDetails.js";

describe("UserDetails", () => {
  it("renders user details", () => {
    render(
      <UserDetails
        user={{
          id: "user-1",
          name: "Alex Customer",
          email: "alex@example.com",
          role: "USER",
          status: "ACTIVE",
          ordersCount: 3,
          createdAt: "2026-01-01",
        }}
      />
    );

    expect(screen.getByText("Alex Customer")).toBeInTheDocument();
    expect(screen.getByText("ACTIVE")).toBeInTheDocument();
    expect(screen.getByText("Email: alex@example.com")).toBeInTheDocument();
    expect(screen.getByText("Role: USER")).toBeInTheDocument();
    expect(screen.getByText("Orders: 3")).toBeInTheDocument();
    expect(screen.getByText("Registered: 2026-01-01")).toBeInTheDocument();
  });

  it("renders fallback name", () => {
    render(
      <UserDetails
        user={{
          id: "user-1",
          name: "",
          email: "alex@example.com",
          role: "USER",
          status: "ACTIVE",
          ordersCount: 0,
          createdAt: "2026-01-01",
        }}
      />
    );

    expect(screen.getByText("Unnamed user")).toBeInTheDocument();
  });
});
