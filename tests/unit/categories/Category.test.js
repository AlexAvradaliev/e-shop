import { describe, it, expect } from "vitest";
import { Category } from "@/modules/category/domain/Category";

describe("Category", () => {
  it("creates category entity", () => {
    const category = new Category({
      id: "1",
      name: "Phones",
      slug: "phones",
    });

    expect(category.id).toBe("1");
    expect(category.name).toBe("Phones");
    expect(category.slug).toBe("phones");
  });
});