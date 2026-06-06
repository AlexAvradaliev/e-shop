import { expect, test } from "@playwright/test";

test.describe("Storefront account orders", () => {
  test("opens account orders page", async ({ page }) => {
    await page.goto("/account/orders");

    await expect(page.getByRole("heading", { name: "My orders" })).toBeVisible();
    await expect(page.getByText("Alex Customer")).toBeVisible();
    await expect(page.getByText("ORD-001")).toBeVisible();
    await expect(page.getByRole("link", { name: "View order" }).first()).toBeVisible();
  });
});
