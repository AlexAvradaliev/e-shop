import { expect, test } from "@playwright/test";

test.describe("Storefront auth", () => {
  test("opens login page and fills form", async ({ page }) => {
    await page.goto("/login");

    await expect(page.getByRole("heading", { name: "Sign in" })).toBeVisible();

    await page.getByLabel("Email").fill("alex@example.com");
    await page.getByLabel("Password").fill("secret123");

    await expect(page.getByLabel("Email")).toHaveValue("alex@example.com");
    await expect(page.getByLabel("Password")).toHaveValue("secret123");
    await expect(page.getByRole("link", { name: "Create account" })).toHaveAttribute(
      "href",
      "/register"
    );
  });

  test("opens register page and fills form", async ({ page }) => {
    await page.goto("/register");

    await expect(page.getByRole("heading", { name: "Create account" })).toBeVisible();

    await page.getByLabel("Name").fill("Alex Customer");
    await page.getByLabel("Email").fill("alex@example.com");
    await page.getByLabel(/^Password$/).fill("secret123");
    await page.getByLabel("Confirm password").fill("secret123");

    await expect(page.getByLabel("Name")).toHaveValue("Alex Customer");
    await expect(page.getByRole("link", { name: "Sign in" })).toHaveAttribute(
      "href",
      "/login"
    );
  });
});
