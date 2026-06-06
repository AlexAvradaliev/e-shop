import { describe, it, expect } from "vitest";
import { Brand } from "@/modules/brand/domain/Brand";

describe("Brand", () => {
  it("creates brand entity", () => {
    const brand = new Brand({
      id: "1",
      name: "Apple",
      slug: "apple",
    });

    expect(brand.id).toBe("1");
    expect(brand.name).toBe("Apple");
    expect(brand.slug).toBe("apple");
  });
}); 