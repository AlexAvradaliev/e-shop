import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import SearchResults from "@/components/storefront/search/SearchResults.js";

describe("SearchResults", () => {
  it("renders empty state", () => {
    render(<SearchResults results={[]} />);

    expect(screen.getByText("No search results found.")).toBeInTheDocument();
  });

  it("renders results", () => {
    render(
      <SearchResults
        results={[
          {
            id: "product-1",
            name: "Wireless Keyboard",
            price: "29.99",
            href: "/products/wireless-keyboard",
          },
        ]}
      />
    );

    expect(screen.getByRole("link", { name: "Wireless Keyboard" })).toHaveAttribute(
      "href",
      "/products/wireless-keyboard"
    );
    expect(screen.getByText("€29.99")).toBeInTheDocument();
  });
});
