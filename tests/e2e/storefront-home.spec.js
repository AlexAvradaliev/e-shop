import { expect, test } from "@playwright/test";

test.describe("Storefront home", () => {
  test("opens home page", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "Smart shopping for everyday essentials" })
    ).toBeVisible();

    await expect(
      page.getByRole("link", { name: "Shop products" })
    ).toBeVisible();

    await expect(
      page.getByText("Shop by category")
    ).toBeVisible();

    await expect(
      page.getByText("Featured products")
    ).toBeVisible();

    await expect(
      page.getByText("Get weekly deals in your inbox")
    ).toBeVisible();
  });
});
