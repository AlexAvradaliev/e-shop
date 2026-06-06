import { expect, test } from "@playwright/test";

test.describe("Admin brands", () => {
  test("opens brands page and navigates to new brand page", async ({ page }) => {
    await page.goto("/admin/brands");

    await expect(
      page.getByRole("heading", { name: "Brands" })
    ).toBeVisible();

    await expect(
      page.getByText("No brands found.")
    ).toBeVisible();

    await page.getByRole("link", { name: "New brand" }).click();

    await expect(
      page.getByRole("heading", { name: "New brand" })
    ).toBeVisible();

    await expect(
      page.getByRole("form", { name: "Brand form" })
    ).toBeVisible();
  });

  test("fills brand form fields", async ({ page }) => {
    await page.goto("/admin/brands/new");

    await page.getByLabel("Name").fill("Logitech");
    await page.getByLabel("Slug").fill("logitech");

    await expect(page.getByLabel("Name")).toHaveValue("Logitech");
    await expect(page.getByLabel("Slug")).toHaveValue("logitech");
  });
});
