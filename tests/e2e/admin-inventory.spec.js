import { expect, test } from "@playwright/test";

test.describe("Admin inventory", () => {
  test("opens inventory page", async ({ page }) => {
    await page.goto("/admin/inventory");

    await expect(
      page.getByRole("heading", { name: "Inventory" })
    ).toBeVisible();

    await expect(
      page.getByText("No inventory items found.")
    ).toBeVisible();
  });

  test("opens inventory product page and fills adjustment form", async ({ page }) => {
    await page.goto("/admin/inventory/product-1");

    await expect(
      page.getByRole("heading", { name: "Manage inventory" })
    ).toBeVisible();

    await expect(
      page.getByRole("form", { name: "Inventory adjustment form" })
    ).toBeVisible();

    await page.getByLabel("Operation").selectOption("RESERVE");
    await page.getByLabel("Quantity").fill("3");
    await page.getByLabel("Reason").fill("Customer checkout");

    await expect(page.getByLabel("Operation")).toHaveValue("RESERVE");
    await expect(page.getByLabel("Quantity")).toHaveValue("3");
    await expect(page.getByLabel("Reason")).toHaveValue("Customer checkout");
  });
});
