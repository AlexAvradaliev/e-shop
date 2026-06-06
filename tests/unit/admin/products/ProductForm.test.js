import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductForm from "@/components/admin/products/ProductForm.js";

describe("ProductForm", () => {
  it("renders empty create form defaults", () => {
    render(
      <ProductForm
        onSubmit={vi.fn()}
      />
    );

    expect(screen.getByLabelText("Name")).toHaveValue("");
    expect(screen.getByLabelText("Slug")).toHaveValue("");
    expect(screen.getByLabelText("Description")).toHaveValue("");
    expect(screen.getByLabelText("Price")).toHaveValue(null);
    expect(screen.getByLabelText("SKU")).toHaveValue("");
    expect(screen.getByLabelText("Stock")).toHaveValue(null);
    expect(screen.getByLabelText("Status")).toHaveValue("DRAFT");
    expect(screen.getByLabelText("Category ID")).toHaveValue("");
    expect(screen.getByLabelText("Brand ID")).toHaveValue("");
  });

  it("renders initial product values", () => {
    render(
      <ProductForm
        initialProduct={{
          name: "Keyboard",
          slug: "keyboard",
          description: "Mechanical keyboard",
          price: 100,
          sku: "KB-001",
          stock: 5,
          status: "ACTIVE",
          categoryId: "category-1",
          brandId: "brand-1",
        }}
        onSubmit={vi.fn()}
      />
    );

    expect(screen.getByLabelText("Name")).toHaveValue("Keyboard");
    expect(screen.getByLabelText("Slug")).toHaveValue("keyboard");
    expect(screen.getByLabelText("Description")).toHaveValue(
      "Mechanical keyboard"
    );
    expect(screen.getByLabelText("Price")).toHaveValue(100);
    expect(screen.getByLabelText("SKU")).toHaveValue("KB-001");
    expect(screen.getByLabelText("Stock")).toHaveValue(5);
    expect(screen.getByLabelText("Status")).toHaveValue("ACTIVE");
    expect(screen.getByLabelText("Category ID")).toHaveValue("category-1");
    expect(screen.getByLabelText("Brand ID")).toHaveValue("brand-1");
  });

  it("submits product data", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    render(
      <ProductForm
        onSubmit={onSubmit}
      />
    );

    await user.type(screen.getByLabelText("Name"), "Keyboard");
    await user.type(screen.getByLabelText("Slug"), "keyboard");
    await user.type(
      screen.getByLabelText("Description"),
      "Mechanical keyboard"
    );
    await user.type(screen.getByLabelText("Price"), "100");
    await user.type(screen.getByLabelText("SKU"), "KB-001");
    await user.type(screen.getByLabelText("Stock"), "5");
    await user.selectOptions(screen.getByLabelText("Status"), "ACTIVE");
    await user.type(screen.getByLabelText("Category ID"), "category-1");
    await user.type(screen.getByLabelText("Brand ID"), "brand-1");

    await user.click(screen.getByRole("button", { name: "Save product" }));

    expect(onSubmit).toHaveBeenCalledWith({
      name: "Keyboard",
      slug: "keyboard",
      description: "Mechanical keyboard",
      price: 100,
      sku: "KB-001",
      stock: 5,
      status: "ACTIVE",
      categoryId: "category-1",
      brandId: "brand-1",
    });
  });
});
