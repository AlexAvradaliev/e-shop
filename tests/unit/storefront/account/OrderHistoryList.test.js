import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import OrderHistoryList from "@/components/storefront/account/OrderHistoryList.js";

describe("OrderHistoryList", () => {
  it("renders empty state", () => {
    render(<OrderHistoryList orders={[]} />);

    expect(screen.getByText("No orders found.")).toBeInTheDocument();
  });

  it("renders orders", () => {
    render(
      <OrderHistoryList
        orders={[
          {
            id: "order-1",
            orderNumber: "ORD-001",
            status: "PAID",
            total: "74.96",
            placedAt: "2026-01-01",
            itemsCount: 3,
          },
        ]}
      />
    );

    expect(screen.getByText("ORD-001")).toBeInTheDocument();
    expect(screen.getByText("PAID")).toBeInTheDocument();
    expect(screen.getByText("€74.96")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View order" })).toHaveAttribute(
      "href",
      "/account/orders/order-1"
    );
  });
});
