import { expect, test } from "@playwright/test";

test.describe("Storefront reviews", () => {
  test("shows product reviews and fills review form", async ({ page }) => {
    await page.goto("/products/wireless-keyboard");

    await expect(page.getByRole("heading", { name: "Product reviews" })).toBeVisible();
    await expect(page.getByText("Marie")).toBeVisible();

    await page.getByLabel("Name").fill("Customer");
    await page.getByLabel("Rating").selectOption("4");
    await page.getByLabel("Comment").fill("Very good product.");

    await expect(page.getByLabel("Name")).toHaveValue("Customer");
    await expect(page.getByLabel("Rating")).toHaveValue("4");
    await expect(page.getByLabel("Comment")).toHaveValue("Very good product.");
  });
});
