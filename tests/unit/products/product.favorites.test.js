import {
  describe,
  it,
  expect,
} from "vitest";

import {
  toggleFavorite,
} from "@/stores/products/favorites";

describe(
  "Product Favorites",
  () => {
    it(
      "adds favorite",
      () => {
        expect(
          toggleFavorite(
            [],
            "1"
          )
        ).toEqual(["1"]);
      }
    );

    it(
      "removes favorite",
      () => {
        expect(
          toggleFavorite(
            ["1"],
            "1"
          )
        ).toEqual([]);
      }
    );

    it(
      "keeps existing favorites",
      () => {
        expect(
          toggleFavorite(
            ["1", "2"],
            "3"
          )
        ).toEqual([
          "1",
          "2",
          "3",
        ]);
      }
    );

    it(
      "does not duplicate favorite",
      () => {
        const result =
          toggleFavorite(
            ["1"],
            "1"
          );

        expect(
          result
        ).toHaveLength(0);
      }
    );

    it(
      "handles empty list",
      () => {
        expect(
          toggleFavorite(
            [],
            "99"
          )
        ).toEqual(["99"]);
      }
    );
  }
);