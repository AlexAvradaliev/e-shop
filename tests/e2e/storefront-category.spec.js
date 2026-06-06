import { expect, test } from "@playwright/test";

test.describe("Storefront category", () => {
  test("opens category page", async ({ page }) => {
    await page.goto("/categories/fresh-deals");

    await expect(
      page.getByRole("heading", { name: "Fresh deals" })
    ).toBeVisible();

    await expect(
      page.getByRole("heading", { name: "Filters" })
    ).toBeVisible();

    await expect(page.getByText("3 products")).toBeVisible();

    await expect(
      page.getByRole("link", { name: "Wireless Keyboard" })
    ).toBeVisible();

    await expect(page.getByText("Page 1 of 3")).toBeVisible();
  });

  test("uses filters and sort", async ({ page }) => {
    await page.goto("/categories/fresh-deals");

    await page.getByLabel("Promotions").check();
    await page.getByLabel("Sort by").selectOption("price-asc");

    await expect(page.getByLabel("Promotions")).toBeChecked();
    await expect(page.getByLabel("Sort by")).toHaveValue("price-asc");
  });
});
