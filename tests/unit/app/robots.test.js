import { describe, expect, it } from "vitest";
import robots from "@/app/robots.js";

describe("robots", () => {
  it("returns robots config", () => {
    expect(robots()).toEqual({
      rules: {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/api",
        ],
      },
      sitemap: "https://example.com/sitemap.xml",
    });
  });
});
