import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap.js";

describe("sitemap", () => {
  it("returns sitemap entries", () => {
    const entries = sitemap();

    expect(entries).toHaveLength(4);
    expect(entries[0].url).toBe("https://example.com");
    expect(entries[1].url).toBe("https://example.com/categories/fresh-deals");
    expect(entries[2].url).toBe("https://example.com/products/wireless-keyboard");
    expect(entries[3].url).toBe("https://example.com/search");
  });
});
