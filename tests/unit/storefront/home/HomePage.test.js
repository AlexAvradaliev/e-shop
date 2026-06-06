import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "@/components/storefront/home/HomePage.js";

describe("HomePage", () => {
  it("renders storefront home sections", () => {
    render(<HomePage />);

    expect(screen.getByText("Online supermarket")).toBeInTheDocument();
    expect(screen.getByText("Shop by category")).toBeInTheDocument();
    expect(screen.getByText("Featured products")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Best sellers" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "New arrivals" })).toBeInTheDocument();
    expect(screen.getByText("Limited offer")).toBeInTheDocument();
    expect(screen.getByText("Get weekly deals in your inbox")).toBeInTheDocument();
  });
});
