import { expect, test } from "@playwright/test";

test.describe("Storefront SEO", () => {
  test("renders organization json ld on home page", async ({ page }) => {
    await page.goto("/");

    const jsonLdText = await page
      .locator('script[type="application/ld+json"]')
      .first()
      .evaluate((element) => element.textContent);

    const jsonLd = JSON.parse(jsonLdText);

    expect(jsonLd["@type"]).toBe("Organization");
    expect(jsonLd.name).toBe("E-Shop V2");
  });
});
