import { expect, test } from "@playwright/test";

test.describe("Storefront search", () => {
  test("opens search page and shows results", async ({ page }) => {
    await page.goto("/search");

    await expect(
      page.getByRole("heading", { name: "Find products" })
    ).toBeVisible();

    const searchForm = page.getByRole("form", { name: "Search form" });

    await expect(
      searchForm.getByLabel("Search products")
    ).toBeVisible();

    await expect(
      searchForm.getByRole("button", { name: "Search" })
    ).toBeVisible();

    await expect(page.getByText("Wireless Keyboard")).toBeVisible();
    await expect(page.getByText("Bluetooth Mouse")).toBeVisible();
  });
});
