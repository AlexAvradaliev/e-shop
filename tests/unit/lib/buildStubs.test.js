import { describe, expect, it } from "vitest";
import { logAudit } from "@/lib/audit.js";
import { handleServerError } from "@/lib/error-handler.js";
import {
  sendPasswordResetEmail,
  sendVerificationEmail,
} from "@/lib/mail.js";
import {
  forgotPasswordLimiter,
  loginLimiter,
  otpLimiter,
  otpVerifyLimiter,
} from "@/lib/rate-limit.js";

describe("build stubs", () => {
  it("logs audit events", async () => {
    await expect(logAudit({ action: "test" })).resolves.toEqual({ ok: true });
  });

  it("handles errors", () => {
    expect(handleServerError(new Error("Boom"))).toEqual({
      success: false,
      error: "Boom",
    });

    expect(handleServerError("Boom")).toEqual({
      success: false,
      error: "Unknown server error",
    });
  });

  it("sends mail stubs", async () => {
    await expect(sendVerificationEmail({})).resolves.toEqual({ success: true });
    await expect(sendPasswordResetEmail({})).resolves.toEqual({ success: true });
  });

  it("allows all limiter checks", async () => {
    await expect(forgotPasswordLimiter.limit()).resolves.toEqual({ success: true });
    await expect(otpLimiter.limit()).resolves.toEqual({ success: true });
    await expect(otpVerifyLimiter.limit()).resolves.toEqual({ success: true });
    await expect(loginLimiter.limit()).resolves.toEqual({ success: true });
  });
});
