import { describe, expect, it } from "vitest";
import StorefrontSeo from "@/components/storefront/seo/StorefrontSeo.js";
import { render } from "@testing-library/react";

describe("StorefrontSeo", () => {
  it("renders organization json ld", () => {
    render(<StorefrontSeo />);

    const script = document.querySelector('script[type="application/ld+json"]');

    expect(script).toBeInTheDocument();
    expect(script.textContent).toContain("Organization");
  });
});
