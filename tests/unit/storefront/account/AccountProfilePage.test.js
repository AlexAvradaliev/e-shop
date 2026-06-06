import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import AccountProfilePage from "@/components/storefront/account/AccountProfilePage.js";

describe("AccountProfilePage", () => {
  it("renders account profile page", () => {
    render(<AccountProfilePage />);

    expect(screen.getByRole("heading", { name: "Account overview" })).toBeInTheDocument();
    expect(screen.getByText("Alex Customer")).toBeInTheDocument();
    expect(screen.getByText("Shortcuts")).toBeInTheDocument();
  });
});
