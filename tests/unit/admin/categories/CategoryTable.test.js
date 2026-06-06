import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CategoryTable from "@/components/admin/categories/CategoryTable.js";

describe("CategoryTable", () => {
  it("renders empty state", () => {
    render(
      <CategoryTable
        categories={[]}
        onDelete={vi.fn()}
      />
    );

    expect(screen.getByText("No categories found.")).toBeInTheDocument();
  });

  it("renders categories", () => {
    render(
      <CategoryTable
        categories={[
          {
            id: "category-1",
            name: "Keyboards",
            slug: "keyboards",
          },
        ]}
        onDelete={vi.fn()}
      />
    );

    expect(screen.getByText("Keyboards")).toBeInTheDocument();
    expect(screen.getByText("keyboards")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Edit" })).toHaveAttribute(
      "href",
      "/admin/categories/category-1/edit"
    );
  });

  it("deletes category", async () => {
    const user = userEvent.setup();
    const onDelete = vi.fn();

    render(
      <CategoryTable
        categories={[
          {
            id: "category-1",
            name: "Keyboards",
            slug: "keyboards",
          },
        ]}
        onDelete={onDelete}
      />
    );

    await user.click(screen.getByRole("button", { name: "Delete" }));

    expect(onDelete).toHaveBeenCalledWith("category-1");
  });
});
