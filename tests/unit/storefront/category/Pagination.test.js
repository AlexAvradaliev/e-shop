import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Pagination from "@/components/storefront/category/Pagination.js";

describe("Pagination", () => {
  it("renders pagination", () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={3}
      />
    );

    expect(screen.getByText("Page 1 of 3")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Previous" })).toHaveAttribute("href", "?page=1");
    expect(screen.getByRole("link", { name: "Next" })).toHaveAttribute("href", "?page=2");
  });
});
