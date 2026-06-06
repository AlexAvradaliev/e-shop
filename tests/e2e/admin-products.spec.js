import { expect, test } from "@playwright/test";

test.describe("Admin products", () => {
  test("opens products page and navigates to new product page", async ({ page }) => {
    await page.goto("/admin/products");

    await expect(
      page.getByRole("heading", { name: "Products" })
    ).toBeVisible();

    await expect(
      page.getByText("No products found.")
    ).toBeVisible();

    await page.getByRole("link", { name: "New product" }).click();

    await expect(
      page.getByRole("heading", { name: "New product" })
    ).toBeVisible();

    await expect(
      page.getByRole("form", { name: "Product form" })
    ).toBeVisible();
  });

  test("fills product form fields", async ({ page }) => {
    await page.goto("/admin/products/new");

    await page.getByLabel("Name").fill("Keyboard");
    await page.getByLabel("Slug").fill("keyboard");
    await page.getByLabel("Description").fill("Mechanical keyboard");
    await page.getByLabel("Price").fill("100");
    await page.getByLabel("SKU").fill("KB-001");
    await page.getByLabel("Stock").fill("5");
    await page.getByLabel("Status").selectOption("ACTIVE");
    await page.getByLabel("Category ID").fill("category-1");
    await page.getByLabel("Brand ID").fill("brand-1");

    await expect(page.getByLabel("Name")).toHaveValue("Keyboard");
    await expect(page.getByLabel("Slug")).toHaveValue("keyboard");
    await expect(page.getByLabel("Description")).toHaveValue(
      "Mechanical keyboard"
    );
    await expect(page.getByLabel("Price")).toHaveValue("100");
    await expect(page.getByLabel("SKU")).toHaveValue("KB-001");
    await expect(page.getByLabel("Stock")).toHaveValue("5");
    await expect(page.getByLabel("Status")).toHaveValue("ACTIVE");
    await expect(page.getByLabel("Category ID")).toHaveValue("category-1");
    await expect(page.getByLabel("Brand ID")).toHaveValue("brand-1");
  });
});
