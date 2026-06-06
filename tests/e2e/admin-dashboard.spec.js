import { expect, test } from "@playwright/test";

test.describe("Admin dashboard", () => {
  test("opens admin dashboard", async ({ page }) => {
    await page.goto("/admin");

    await expect(
      page.getByRole("heading", { name: "Admin dashboard" })
    ).toBeVisible();

    await expect(
      page.getByRole("link", { name: "Open Products" })
    ).toHaveAttribute("href", "/admin/products");
  });
});
