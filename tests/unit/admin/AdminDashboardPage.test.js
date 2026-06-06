import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import AdminDashboardPage from "@/app/admin/page.js";

describe("AdminDashboardPage", () => {
  it("renders admin dashboard sections", () => {
    render(<AdminDashboardPage />);

    expect(screen.getByRole("heading", { name: "Admin dashboard" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Open storefront" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "Open Products" })).toHaveAttribute("href", "/admin/products");
    expect(screen.getByRole("link", { name: "Open Categories" })).toHaveAttribute("href", "/admin/categories");
    expect(screen.getByRole("link", { name: "Open Brands" })).toHaveAttribute("href", "/admin/brands");
    expect(screen.getByRole("link", { name: "Open Orders" })).toHaveAttribute("href", "/admin/orders");
    expect(screen.getByRole("link", { name: "Open Coupons" })).toHaveAttribute("href", "/admin/coupons");
    expect(screen.getByRole("link", { name: "Open Inventory" })).toHaveAttribute("href", "/admin/inventory");
    expect(screen.getByRole("link", { name: "Open Users" })).toHaveAttribute("href", "/admin/users");
  });
});
