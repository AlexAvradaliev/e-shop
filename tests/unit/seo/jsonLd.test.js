import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  JsonLdScript,
  createOrganizationJsonLd,
  createProductJsonLd,
} from "@/lib/seo/jsonLd.js";

describe("jsonLd", () => {
  it("creates organization json ld", () => {
    expect(createOrganizationJsonLd()).toEqual({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "E-Shop V2",
      url: "https://example.com",
      logo: "https://example.com/icon-512.png",
    });
  });

  it("creates product json ld for in-stock product", () => {
    expect(
      createProductJsonLd({
        name: "Keyboard",
        sku: "KB-001",
        description: "Wireless keyboard",
        price: "29.99",
        inStock: true,
      })
    ).toEqual({
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Keyboard",
      sku: "KB-001",
      description: "Wireless keyboard",
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: "29.99",
        availability: "https://schema.org/InStock",
      },
    });
  });

  it("creates product json ld for out-of-stock product", () => {
    expect(
      createProductJsonLd({
        name: "Keyboard",
        sku: "KB-001",
        description: "Wireless keyboard",
        price: "29.99",
        inStock: false,
      }).offers.availability
    ).toBe("https://schema.org/OutOfStock");
  });

  it("renders json ld script", () => {
    render(
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "E-Shop V2",
        }}
      />
    );

    const script = document.querySelector('script[type="application/ld+json"]');

    expect(script).toBeInTheDocument();
    expect(script.textContent).toContain("E-Shop V2");
  });
});
