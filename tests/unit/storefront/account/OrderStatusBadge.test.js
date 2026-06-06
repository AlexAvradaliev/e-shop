import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import OrderStatusBadge from "@/components/storefront/account/OrderStatusBadge.js";

describe("OrderStatusBadge", () => {
  it("renders status", () => {
    render(<OrderStatusBadge status="PAID" />);

    expect(screen.getByText("PAID")).toBeInTheDocument();
  });
});
