import { expect, test } from "@playwright/test";

test.describe("Storefront cart", () => {
  test("opens cart page and applies coupon", async ({ page }) => {
    await page.goto("/cart");

    await expect(
      page.getByRole("heading", { name: "Your cart" })
    ).toBeVisible();

    await expect(page.getByText("Wireless Keyboard")).toBeVisible();
    await expect(page.getByText("Order summary")).toBeVisible();

    await page.getByLabel("Coupon code").fill("SAVE10");
    await expect(page.getByLabel("Coupon code")).toHaveValue("SAVE10");

    await expect(
      page.getByRole("link", { name: "Continue to checkout" })
    ).toHaveAttribute("href", "/checkout");
  });
});
