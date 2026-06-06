import { expect, test } from "@playwright/test";

test.describe("Storefront product", () => {
  test("opens product page", async ({ page }) => {
    await page.goto("/products/wireless-keyboard");

    await expect(
      page.getByRole("heading", { name: "Wireless Keyboard" })
    ).toBeVisible();

    await expect(page.getByText("SKU: KB-001")).toBeVisible();
    await expect(page.getByText("€29.99")).toBeVisible();
    await expect(page.getByRole("button", { name: "Add to cart" })).toBeVisible();
    await expect(page.getByText("Related products")).toBeVisible();
  });
});
