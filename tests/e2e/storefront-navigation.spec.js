import { expect, test } from "@playwright/test";

test.describe("Storefront navigation", () => {
  test("opens home and header navigation", async ({ page }) => {
    await page.goto("/");

    const header = page.getByRole("banner");

    await expect(header.getByRole("link", { name: "E-Shop" })).toBeVisible();
    await expect(header.getByRole("link", { name: "Cart" })).toBeVisible();
    await expect(page.getByRole("navigation", { name: "Departments" })).toBeVisible();
  });

  test("shows header search action", async ({ page }) => {
    await page.goto("/");

    const header = page.getByRole("banner");

    await expect(header.getByRole("button", { name: "Search" })).toBeVisible();
  });
});
