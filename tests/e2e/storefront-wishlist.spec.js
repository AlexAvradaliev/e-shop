import { expect, test } from "@playwright/test";

test.describe("Storefront wishlist", () => {
  test("opens wishlist page", async ({ page }) => {
    await page.goto("/wishlist");

    await expect(page.getByRole("heading", { name: "Wishlist" })).toBeVisible();
    await expect(page.getByText("Wireless Keyboard")).toBeVisible();
    await expect(page.getByRole("link", { name: "View product" }).first()).toBeVisible();
    await expect(page.getByRole("button", { name: "Remove" }).first()).toBeVisible();
  });
});
