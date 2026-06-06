import { expect, test } from "@playwright/test";

test.describe("Admin categories", () => {
  test("opens categories page and navigates to new category page", async ({ page }) => {
    await page.goto("/admin/categories");

    await expect(
      page.getByRole("heading", { name: "Categories" })
    ).toBeVisible();

    await expect(
      page.getByText("No categories found.")
    ).toBeVisible();

    await page.getByRole("link", { name: "New category" }).click();

    await expect(
      page.getByRole("heading", { name: "New category" })
    ).toBeVisible();

    await expect(
      page.getByRole("form", { name: "Category form" })
    ).toBeVisible();
  });

  test("fills category form fields", async ({ page }) => {
    await page.goto("/admin/categories/new");

    await page.getByLabel("Name").fill("Keyboards");
    await page.getByLabel("Slug").fill("keyboards");

    await expect(page.getByLabel("Name")).toHaveValue("Keyboards");
    await expect(page.getByLabel("Slug")).toHaveValue("keyboards");
  });
});
