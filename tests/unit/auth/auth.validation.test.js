import {
  describe,
  it,
  expect,
} from "vitest";

import {
  validateEmail,
  validatePassword,
} from "@/stores/auth/validation";

describe(
  "Auth Validation",
  () => {
    it(
      "accepts valid email",
      () => {
        expect(
          validateEmail(
            "john@test.com"
          )
        ).toBe(true);
      }
    );

    it(
      "rejects invalid email",
      () => {
        expect(
          validateEmail(
            "john"
          )
        ).toBe(false);
      }
    );

    it(
      "accepts strong password",
      () => {
        expect(
          validatePassword(
            "12345678"
          )
        ).toBe(true);
      }
    );

    it(
      "rejects short password",
      () => {
        expect(
          validatePassword(
            "123"
          )
        ).toBe(false);
      }
    );

    it(
      "rejects empty password",
      () => {
        expect(
          validatePassword("")
        ).toBe(false);
      }
    );
  }
);