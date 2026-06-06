import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BrandForm from "@/components/admin/brands/BrandForm.js";

describe("BrandForm", () => {
  it("renders empty create form defaults", () => {
    render(
      <BrandForm
        onSubmit={vi.fn()}
      />
    );

    expect(screen.getByLabelText("Name")).toHaveValue("");
    expect(screen.getByLabelText("Slug")).toHaveValue("");
  });

  it("renders initial brand values", () => {
    render(
      <BrandForm
        initialBrand={{
          name: "Logitech",
          slug: "logitech",
        }}
        onSubmit={vi.fn()}
      />
    );

    expect(screen.getByLabelText("Name")).toHaveValue("Logitech");
    expect(screen.getByLabelText("Slug")).toHaveValue("logitech");
  });

  it("submits brand data", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    render(
      <BrandForm
        onSubmit={onSubmit}
      />
    );

    await user.type(screen.getByLabelText("Name"), "Logitech");
    await user.type(screen.getByLabelText("Slug"), "logitech");

    await user.click(screen.getByRole("button", { name: "Save brand" }));

    expect(onSubmit).toHaveBeenCalledWith({
      name: "Logitech",
      slug: "logitech",
    });
  });
});
