import { describe, it, expect } from "vitest";
import { Order } from "@/modules/order/domain/Order";

describe("Order", () => {
  it("creates order entity", () => {
    const order = new Order({
      id: "1",
      userId: "user1",
      orderNumber: "ORD-001",
      status: "PENDING",
      paymentStatus: "PENDING",
      subtotal: 100,
      shipping: 10,
      total: 110,
    });

    expect(order.id).toBe("1");
    expect(order.userId).toBe("user1");
    expect(order.orderNumber).toBe("ORD-001");
    expect(order.status).toBe("PENDING");
    expect(order.paymentStatus).toBe("PENDING");
    expect(order.total).toBe(110);
  });

  it("throws when total is negative", () => {
    expect(() => {
      new Order({
        id: "1",
        orderNumber: "ORD-001",
        status: "PENDING",
        paymentStatus: "PENDING",
        subtotal: 100,
        shipping: 10,
        total: -1,
      });
    }).toThrow(
      "Order total cannot be negative"
    );
  });
});
