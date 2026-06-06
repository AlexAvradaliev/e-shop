import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CouponTable from "@/components/admin/coupons/CouponTable.js";

describe("CouponTable", () => {
  it("renders empty state", () => {
    render(
      <CouponTable
        coupons={[]}
        onDelete={vi.fn()}
      />
    );

    expect(screen.getByText("No coupons found.")).toBeInTheDocument();
  });

  it("renders coupons", () => {
    render(
      <CouponTable
        coupons={[
          {
            id: "coupon-1",
            code: "SAVE10",
            type: "PERCENTAGE",
            value: 10,
            isActive: true,
          },
          {
            id: "coupon-2",
            code: "OFF5",
            type: "FIXED",
            value: 5,
            isActive: false,
          },
        ]}
        onDelete={vi.fn()}
      />
    );

    expect(screen.getByText("SAVE10")).toBeInTheDocument();
    expect(screen.getByText("PERCENTAGE")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("OFF5")).toBeInTheDocument();
    expect(screen.getByText("FIXED")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("Yes")).toBeInTheDocument();
    expect(screen.getByText("No")).toBeInTheDocument();
  });

  it("deletes coupon", async () => {
    const user = userEvent.setup();
    const onDelete = vi.fn();

    render(
      <CouponTable
        coupons={[
          {
            id: "coupon-1",
            code: "SAVE10",
            type: "PERCENTAGE",
            value: 10,
            isActive: true,
          },
        ]}
        onDelete={onDelete}
      />
    );

    await user.click(screen.getByRole("button", { name: "Delete" }));

    expect(onDelete).toHaveBeenCalledWith("coupon-1");
  });
});
