import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchOverlay from "@/components/storefront/layout/SearchOverlay.js";

describe("SearchOverlay", () => {
  it("submits search and closes", async () => {
    const user = userEvent.setup();
    const onSearch = vi.fn();
    const onClose = vi.fn();

    render(<SearchOverlay onSearch={onSearch} onClose={onClose} />);

    await user.type(screen.getByLabelText("Search products"), "keyboard");
    await user.click(screen.getByRole("button", { name: "Search" }));

    expect(onSearch).toHaveBeenCalledWith("keyboard");

    await user.click(screen.getByRole("button", { name: "Close" }));
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("works with default search handler", async () => {
    const user = userEvent.setup();

    render(<SearchOverlay onClose={() => {}} />);

    await user.type(screen.getByLabelText("Search products"), "mouse");
    await user.click(screen.getByRole("button", { name: "Search" }));

    expect(screen.getByLabelText("Search products")).toHaveValue("mouse");
  });
});
