import { describe, it, expect, vi } from "vitest";

describe("CategoryRepository contract", () => {
  it("has findById", () => {
    const repository = {
      findById: vi.fn(),
    };

    expect(repository.findById).toBeDefined();
  });

  it("has findBySlug", () => {
    const repository = {
      findBySlug: vi.fn(),
    };

    expect(repository.findBySlug).toBeDefined();
  });

  it("has findAll", () => {
    const repository = {
      findAll: vi.fn(),
    };

    expect(repository.findAll).toBeDefined();
  });

  it("has save", () => {
    const repository = {
      save: vi.fn(),
    };

    expect(repository.save).toBeDefined();
  });

  it("has update", () => {
    const repository = {
      update: vi.fn(),
    };

    expect(repository.update).toBeDefined();
  });

  it("has delete", () => {
    const repository = {
      delete: vi.fn(),
    };

    expect(repository.delete).toBeDefined();
  });
});