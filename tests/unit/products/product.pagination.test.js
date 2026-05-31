import {
  describe,
  it,
  expect,
} from "vitest";

import {
  paginateProducts,
} from "@/stores/products/pagination";

const products = Array.from(
  { length: 25 },
  (_, i) => ({
    id: String(i + 1),
  })
);

describe(
  "Product Pagination",
  () => {
    it(
      "returns first page",
      () => {
        const result =
          paginateProducts(
            products,
            1,
            10
          );

        expect(
          result
        ).toHaveLength(10);

        expect(
          result[0].id
        ).toBe("1");
      }
    );

    it(
      "returns second page",
      () => {
        const result =
          paginateProducts(
            products,
            2,
            10
          );

        expect(
          result[0].id
        ).toBe("11");
      }
    );

    it(
      "returns last page",
      () => {
        const result =
          paginateProducts(
            products,
            3,
            10
          );

        expect(
          result
        ).toHaveLength(5);
      }
    );

    it(
      "returns empty array for invalid page",
      () => {
        expect(
          paginateProducts(
            products,
            99,
            10
          )
        ).toEqual([]);
      }
    );

    it(
      "handles empty products",
      () => {
        expect(
          paginateProducts(
            [],
            1,
            10
          )
        ).toEqual([]);
      }
    );
  }
);