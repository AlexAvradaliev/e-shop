import { expect, test } from "@playwright/test";

test.describe("Storefront account profile", () => {
  test("opens account overview page", async ({ page }) => {
    await page.goto("/account");

    await expect(page.getByRole("heading", { name: "Account overview" })).toBeVisible();
    await expect(page.getByText("Alex Customer")).toBeVisible();
    await expect(page.getByText("alex@example.com")).toBeVisible();

    const main = page.getByRole("main");
    await expect(main.getByRole("link", { name: /My orders/i })).toBeVisible();
    await expect(main.getByRole("link", { name: /Wishlist/i })).toBeVisible();
  });
});
