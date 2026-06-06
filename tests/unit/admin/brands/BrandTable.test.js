import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BrandTable from "@/components/admin/brands/BrandTable.js";

describe("BrandTable", () => {
  it("renders empty state", () => {
    render(
      <BrandTable
        brands={[]}
        onDelete={vi.fn()}
      />
    );

    expect(screen.getByText("No brands found.")).toBeInTheDocument();
  });

  it("renders brands", () => {
    render(
      <BrandTable
        brands={[
          {
            id: "brand-1",
            name: "Logitech",
            slug: "logitech",
          },
        ]}
        onDelete={vi.fn()}
      />
    );

    expect(screen.getByText("Logitech")).toBeInTheDocument();
    expect(screen.getByText("logitech")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Edit" })).toHaveAttribute(
      "href",
      "/admin/brands/brand-1/edit"
    );
  });

  it("deletes brand", async () => {
    const user = userEvent.setup();
    const onDelete = vi.fn();

    render(
      <BrandTable
        brands={[
          {
            id: "brand-1",
            name: "Logitech",
            slug: "logitech",
          },
        ]}
        onDelete={onDelete}
      />
    );

    await user.click(screen.getByRole("button", { name: "Delete" }));

    expect(onDelete).toHaveBeenCalledWith("brand-1");
  });
});
