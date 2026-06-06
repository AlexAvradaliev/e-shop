import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import UserTable from "@/components/admin/users/UserTable.js";

describe("UserTable", () => {
  it("renders empty state", () => {
    render(
      <UserTable
        users={[]}
      />
    );

    expect(screen.getByText("No users found.")).toBeInTheDocument();
  });

  it("renders users", () => {
    render(
      <UserTable
        users={[
          {
            id: "user-1",
            name: "Alex Customer",
            email: "alex@example.com",
            role: "USER",
            status: "ACTIVE",
            ordersCount: 3,
          },
          {
            id: "user-2",
            name: "",
            email: "admin@example.com",
            role: "ADMIN",
            status: "BLOCKED",
            ordersCount: 0,
          },
        ]}
      />
    );

    expect(screen.getByText("Alex Customer")).toBeInTheDocument();
    expect(screen.getByText("alex@example.com")).toBeInTheDocument();
    expect(screen.getByText("USER")).toBeInTheDocument();
    expect(screen.getByText("ACTIVE")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("Unnamed user")).toBeInTheDocument();
    expect(screen.getByText("admin@example.com")).toBeInTheDocument();
    expect(screen.getByText("ADMIN")).toBeInTheDocument();
    expect(screen.getByText("BLOCKED")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "View" })[0]).toHaveAttribute(
      "href",
      "/admin/users/user-1"
    );
  });
});
