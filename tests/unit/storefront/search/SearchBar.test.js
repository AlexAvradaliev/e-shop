import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "@/components/storefront/search/SearchBar.js";

describe("SearchBar", () => {
  it("submits query", async () => {
    const user = userEvent.setup();
    const onSearch = vi.fn();

    render(<SearchBar onSearch={onSearch} />);

    await user.type(screen.getByLabelText("Search products"), "keyboard");
    await user.click(screen.getByRole("button", { name: "Search" }));

    expect(onSearch).toHaveBeenCalledWith("keyboard");
  });

  it("works with default search handler", async () => {
    const user = userEvent.setup();

    render(<SearchBar />);

    await user.type(screen.getByLabelText("Search products"), "mouse");
    await user.click(screen.getByRole("button", { name: "Search" }));

    expect(screen.getByLabelText("Search products")).toHaveValue("mouse");
  });
});
