import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export const forgotPasswordLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(5, "15 m"),
});

export const otpLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(3, "10 m"),
});

export const loginLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(5, "10 m"),
});

export const otpVerifyLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(5, "15 m"),
});