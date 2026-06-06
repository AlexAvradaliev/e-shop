import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CategoryForm from "@/components/admin/categories/CategoryForm.js";

describe("CategoryForm", () => {
  it("renders empty create form defaults", () => {
    render(
      <CategoryForm
        onSubmit={vi.fn()}
      />
    );

    expect(screen.getByLabelText("Name")).toHaveValue("");
    expect(screen.getByLabelText("Slug")).toHaveValue("");
  });

  it("renders initial category values", () => {
    render(
      <CategoryForm
        initialCategory={{
          name: "Keyboards",
          slug: "keyboards",
        }}
        onSubmit={vi.fn()}
      />
    );

    expect(screen.getByLabelText("Name")).toHaveValue("Keyboards");
    expect(screen.getByLabelText("Slug")).toHaveValue("keyboards");
  });

  it("submits category data", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    render(
      <CategoryForm
        onSubmit={onSubmit}
      />
    );

    await user.type(screen.getByLabelText("Name"), "Keyboards");
    await user.type(screen.getByLabelText("Slug"), "keyboards");

    await user.click(screen.getByRole("button", { name: "Save category" }));

    expect(onSubmit).toHaveBeenCalledWith({
      name: "Keyboards",
      slug: "keyboards",
    });
  });
});
