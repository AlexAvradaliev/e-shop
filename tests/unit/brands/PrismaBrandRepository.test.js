import { describe, it, expect, vi } from "vitest";

vi.mock(
  "@/server/db/prisma",
  () => ({
    prisma: {
      brand: {
        findUnique: vi.fn(),
        findMany: vi.fn(),
        upsert: vi.fn(),
        update: vi.fn(),
        delete: vi.fn(),
      },
    },
  })
);

import { prisma } from "@/server/db/prisma";
import { PrismaBrandRepository } from "@/modules/brand/infrastructure/repositories/PrismaBrandRepository";

describe("PrismaBrandRepository", () => {
  it("findById returns brand", async () => {
    const brand = {
      id: "1",
      name: "Apple",
      slug: "apple",
    };

    prisma.brand.findUnique.mockResolvedValue(
      brand
    );

    const repository =
      new PrismaBrandRepository();

    const result =
      await repository.findById(
        "1"
      );

    expect(result).toEqual(
      brand
    );
  });
  it("findBySlug returns brand", async () => {
  const brand = {
    id: "1",
    name: "Apple",
    slug: "apple",
  };

  prisma.brand.findUnique.mockResolvedValue(
    brand
  );

  const repository =
    new PrismaBrandRepository();

  const result =
    await repository.findBySlug(
      "apple"
    );

  expect(result).toEqual(
    brand
  );
});

it("findAll returns brands", async () => {
  const brands = [
    {
      id: "1",
      name: "Apple",
      slug: "apple",
    },
  ];

  prisma.brand.findMany.mockResolvedValue(
    brands
  );

  const repository =
    new PrismaBrandRepository();

  const result =
    await repository.findAll();

  expect(result).toEqual(
    brands
  );
});

it("save creates brand", async () => {
  const brand = {
    id: "1",
    name: "Apple",
    slug: "apple",
  };

  prisma.brand.upsert.mockResolvedValue(
    brand
  );

  const repository =
    new PrismaBrandRepository();

  const result =
    await repository.save(
      brand
    );

  expect(result).toEqual(
    brand
  );
});

it("update updates brand", async () => {
  const brand = {
    id: "1",
    name: "Apple",
    slug: "apple",
  };

  prisma.brand.update.mockResolvedValue(
    brand
  );

  const repository =
    new PrismaBrandRepository();

  const result =
    await repository.update(
      "1",
      brand
    );

  expect(result).toEqual(
    brand
  );
});

it("delete removes brand", async () => {
  prisma.brand.delete.mockResolvedValue(
    {
      id: "1",
    }
  );

  const repository =
    new PrismaBrandRepository();

  const result =
    await repository.delete(
      "1"
    );

  expect(result.id).toBe(
    "1"
  );
});
});