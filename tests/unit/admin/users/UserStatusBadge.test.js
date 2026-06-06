import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import UserStatusBadge from "@/components/admin/users/UserStatusBadge.js";

describe("UserStatusBadge", () => {
  it("renders default active status", () => {
    render(<UserStatusBadge />);

    expect(screen.getByText("ACTIVE")).toBeInTheDocument();
  });

  it("renders provided status", () => {
    render(<UserStatusBadge status="BLOCKED" />);

    expect(screen.getByText("BLOCKED")).toBeInTheDocument();
  });
});
