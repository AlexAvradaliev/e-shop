import { expect, test } from "@playwright/test";

test.describe("Storefront home sections", () => {
  test("shows best sellers and new arrivals", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "Best sellers" })).toBeVisible();
    await expect(page.getByText("Family Coffee Pack")).toBeVisible();
    await expect(page.getByRole("heading", { name: "New arrivals" })).toBeVisible();
    await expect(page.getByText("Smart LED Lamp")).toBeVisible();
  });
});
