import { expect, test } from "@playwright/test";

test.describe("Admin coupons", () => {
  test("opens coupons page and navigates to new coupon page", async ({ page }) => {
    await page.goto("/admin/coupons");

    await expect(
      page.getByRole("heading", { name: "Coupons" })
    ).toBeVisible();

    await expect(
      page.getByText("No coupons found.")
    ).toBeVisible();

    await page.getByRole("link", { name: "New coupon" }).click();

    await expect(
      page.getByRole("heading", { name: "New coupon" })
    ).toBeVisible();

    await expect(
      page.getByRole("form", { name: "Coupon form" })
    ).toBeVisible();
  });

  test("fills coupon form fields", async ({ page }) => {
    await page.goto("/admin/coupons/new");

    await page.getByLabel("Code").fill("SAVE10");
    await page.getByLabel("Type").selectOption("PERCENTAGE");
    await page.getByLabel("Value").fill("10");
    await page.getByLabel("Active").selectOption("false");

    await expect(page.getByLabel("Code")).toHaveValue("SAVE10");
    await expect(page.getByLabel("Type")).toHaveValue("PERCENTAGE");
    await expect(page.getByLabel("Value")).toHaveValue("10");
    await expect(page.getByLabel("Active")).toHaveValue("false");
  });
});
