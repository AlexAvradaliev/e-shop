import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ReviewCard from "@/components/storefront/reviews/ReviewCard.js";

describe("ReviewCard", () => {
  it("renders review card", () => {
    render(
      <ReviewCard
        review={{
          id: "review-1",
          author: "Marie",
          rating: 5,
          comment: "Great value.",
          createdAt: "2026-01-15",
        }}
      />
    );

    expect(screen.getByText("Marie")).toBeInTheDocument();
    expect(screen.getByText("5/5")).toBeInTheDocument();
    expect(screen.getByText("Great value.")).toBeInTheDocument();
    expect(screen.getByText("2026-01-15")).toBeInTheDocument();
  });
});
