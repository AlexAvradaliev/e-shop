import {
  describe,
  it,
  expect,
} from "vitest";

import { login } from "@/stores/auth/login";
import { toggleFavorite } from "@/stores/products/favorites";

describe("Auth User Flow", () => {
  it("login then add favorite", () => {
    const auth =
      login(
        "user@test.com",
        "password123"
      );

    expect(auth.success)
      .toBe(true);

    const favorites =
      toggleFavorite(
        [],
        "product-1"
      );

    expect(favorites)
      .toContain(
        "product-1"
      );
  });
});