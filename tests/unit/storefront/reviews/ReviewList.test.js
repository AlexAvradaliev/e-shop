import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ReviewList from "@/components/storefront/reviews/ReviewList.js";

describe("ReviewList", () => {
  it("renders empty state", () => {
    render(<ReviewList reviews={[]} />);

    expect(screen.getByText("No reviews yet.")).toBeInTheDocument();
  });

  it("renders reviews", () => {
    render(
      <ReviewList
        reviews={[
          {
            id: "review-1",
            author: "Marie",
            rating: 5,
            comment: "Great value.",
            createdAt: "2026-01-15",
          },
        ]}
      />
    );

    expect(screen.getByText("Marie")).toBeInTheDocument();
  });
});
