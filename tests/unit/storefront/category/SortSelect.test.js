import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SortSelect from "@/components/storefront/category/SortSelect.js";

describe("SortSelect", () => {
  it("renders default value", () => {
    render(<SortSelect />);

    expect(screen.getByLabelText("Sort by")).toHaveValue("relevance");
  });

  it("changes sort value", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <SortSelect
        value="relevance"
        onChange={onChange}
      />
    );

    await user.selectOptions(screen.getByLabelText(/sort/i), "price-asc");

    expect(onChange).toHaveBeenCalledWith("price-asc");
  });

  it("changes to price-desc", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <SortSelect
        value="price-asc"
        onChange={onChange}
      />
    );

    await user.selectOptions(screen.getByLabelText(/sort/i), "price-desc");

    expect(onChange).toHaveBeenCalledWith("price-desc");
  });

  it("changes to newest", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <SortSelect
        value="price-desc"
        onChange={onChange}
      />
    );

    await user.selectOptions(screen.getByLabelText(/sort/i), "newest");

    expect(onChange).toHaveBeenCalledWith("newest");
  });

  it("works with default handler", async () => {
    const user = userEvent.setup();

    render(<SortSelect value="price-asc" />);

    await user.selectOptions(screen.getByLabelText(/sort/i), "price-desc");

    expect(screen.getByLabelText(/sort/i)).toHaveValue("price-asc");
  });
});
