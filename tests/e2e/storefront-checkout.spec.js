import { expect, test } from "@playwright/test";

test.describe("Storefront checkout", () => {
  test("fills checkout form", async ({ page }) => {
    await page.goto("/checkout");

    await expect(
      page.getByRole("heading", { name: "Checkout" })
    ).toBeVisible();

    await page.getByLabel("Full name").fill("Alex Customer");
    await page.getByLabel("Email").fill("alex@example.com");
    await page.getByLabel("Address").fill("1 Main Street");
    await page.getByLabel("City").fill("Paris");
    await page.getByLabel("Postal code").fill("75001");

    await expect(page.getByLabel("Full name")).toHaveValue("Alex Customer");
    await expect(page.getByLabel("Email")).toHaveValue("alex@example.com");
    await expect(page.getByLabel("Address")).toHaveValue("1 Main Street");
    await expect(page.getByLabel("City")).toHaveValue("Paris");
    await expect(page.getByLabel("Postal code")).toHaveValue("75001");

    await expect(page.getByRole("button", { name: "Pay with Stripe" })).toBeVisible();
  });
});
