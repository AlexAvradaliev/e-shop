import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductReviewsSection from "@/components/storefront/reviews/ProductReviewsSection.js";

describe("ProductReviewsSection", () => {
  it("renders product reviews section", () => {
    render(<ProductReviewsSection />);

    expect(screen.getByText("Customer feedback")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Product reviews" })).toBeInTheDocument();
    expect(screen.getByText("Marie")).toBeInTheDocument();
    expect(screen.getByRole("form", { name: "Review form" })).toBeInTheDocument();
  });
});
