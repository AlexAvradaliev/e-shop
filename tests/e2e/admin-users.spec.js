import { expect, test } from "@playwright/test";

test.describe("Admin users", () => {
  test("opens users page", async ({ page }) => {
    await page.goto("/admin/users");

    await expect(
      page.getByRole("heading", { name: "Users" })
    ).toBeVisible();

    await expect(
      page.getByText("No users found.")
    ).toBeVisible();
  });

  test("opens user details page", async ({ page }) => {
    await page.goto("/admin/users/user-1");

    await expect(
      page.getByRole("heading", { name: "User details" })
    ).toBeVisible();

    await expect(
      page.getByText("Alex Customer")
    ).toBeVisible();

    await expect(
      page.getByText("Email: alex@example.com")
    ).toBeVisible();

    await expect(
      page.getByText("Role: USER")
    ).toBeVisible();
  });
});
