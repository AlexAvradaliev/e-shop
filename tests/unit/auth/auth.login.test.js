import {
  describe,
  it,
  expect,
} from "vitest";

import {
  login,
} from "@/stores/auth/login";

describe(
  "Auth Login",
  () => {
    it(
      "logs user in",
      () => {
        const result =
          login(
            "admin@test.com",
            "12345678"
          );

        expect(
          result.success
        ).toBe(true);
      }
    );

    it(
      "rejects invalid email",
      () => {
        const result =
          login(
            "bad",
            "12345678"
          );

        expect(
          result.success
        ).toBe(false);
      }
    );

    it(
      "rejects short password",
      () => {
        const result =
          login(
            "admin@test.com",
            "123"
          );

        expect(
          result.success
        ).toBe(false);
      }
    );

    it(
      "returns message",
      () => {
        const result =
          login(
            "bad",
            "123"
          );

        expect(
          result.message
        ).toBeDefined();
      }
    );

    it(
      "handles empty values",
      () => {
        const result =
          login("", "");

        expect(
          result.success
        ).toBe(false);
      }
    );
  }
);