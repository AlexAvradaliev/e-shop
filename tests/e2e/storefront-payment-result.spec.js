import { expect, test } from "@playwright/test";

test.describe("Storefront payment result", () => {
  test("opens checkout success page", async ({ page }) => {
    await page.goto("/checkout/success");

    await expect(page.getByRole("heading", { name: "Thank you for your order" })).toBeVisible();
    await expect(page.getByRole("link", { name: "View orders" })).toHaveAttribute(
      "href",
      "/account/orders"
    );
  });

  test("opens checkout cancel page", async ({ page }) => {
    await page.goto("/checkout/cancel");

    await expect(page.getByRole("heading", { name: "Checkout was cancelled" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Back to cart" })).toHaveAttribute(
      "href",
      "/cart"
    );
  });
});
