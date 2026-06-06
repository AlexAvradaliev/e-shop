import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "@/components/storefront/layout/Header.js";

describe("Header", () => {
  it("renders header links", () => {
    render(<Header />);

    const banner = screen.getByRole("banner");

    expect(within(banner).getByRole("link", { name: "E-Shop" })).toHaveAttribute("href", "/");
    expect(within(banner).getByRole("link", { name: "Cart" })).toHaveAttribute("href", "/cart");
    expect(within(banner).getByRole("link", { name: "Wishlist" })).toHaveAttribute("href", "/wishlist");
  });

  it("opens and closes mobile menu", async () => {
    const user = userEvent.setup();

    render(<Header />);

    await user.click(screen.getByRole("button", { name: "Menu" }));
    expect(screen.getByRole("dialog", { name: "Mobile menu" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Close" }));
    expect(screen.queryByRole("dialog", { name: "Mobile menu" })).not.toBeInTheDocument();
  });

  it("opens search overlay", async () => {
    const user = userEvent.setup();

    render(<Header />);

    const banner = screen.getByRole("banner");

    await user.click(within(banner).getByRole("button", { name: "Search" }));
    expect(screen.getByRole("dialog", { name: "Search overlay" })).toBeInTheDocument();
  });

  it("closes search overlay", async () => {
    const user = userEvent.setup();

    render(<Header />);

    const banner = screen.getByRole("banner");

    await user.click(within(banner).getByRole("button", { name: "Search" }));
    expect(screen.getByRole("dialog", { name: "Search overlay" })).toBeInTheDocument();

    await user.click(
      within(screen.getByRole("dialog", { name: "Search overlay" })).getByRole("button", { name: "Close" })
    );

    expect(screen.queryByRole("dialog", { name: "Search overlay" })).not.toBeInTheDocument();
  });
});
