import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/server/db/prisma", () => ({
  prisma: {
    category: {
      findUnique: vi.fn(),
       upsert: vi.fn(),
       update: vi.fn(),
       delete: vi.fn(),
       findMany: vi.fn(),
    },
  },
}));

import { prisma } from "@/server/db/prisma";
import { PrismaCategoryRepository } from "@/modules/category/infrastructure/repositories/PrismaCategoryRepository";

describe("PrismaCategoryRepository", () => {
  let repository;

  beforeEach(() => {
    repository =
      new PrismaCategoryRepository();

    vi.clearAllMocks();
  });

  it("findById returns category", async () => {
    const category = {
      id: "1",
      name: "Phones",
      slug: "phones",
    };

    prisma.category.findUnique.mockResolvedValue(
      category
    );

    const result =
      await repository.findById("1");

    expect(result).toEqual(category);

    expect(
      prisma.category.findUnique
    ).toHaveBeenCalledWith({
      where: {
        id: "1",
      },
    });
  });
  it("findBySlug returns category", async () => {
  const category = {
    id: "1",
    name: "Phones",
    slug: "phones",
  };

  prisma.category.findUnique.mockResolvedValue(
    category
  );

  const result =
    await repository.findBySlug(
      "phones"
    );

  expect(result).toEqual(category);

  expect(
    prisma.category.findUnique
  ).toHaveBeenCalledWith({
    where: {
      slug: "phones",
    },
  });
});

it("save creates category", async () => {
  const category = {
    id: "1",
    name: "Phones",
    slug: "phones",
  };

  prisma.category.upsert.mockResolvedValue(
    category
  );

  const result =
    await repository.save(
      category
    );

  expect(result).toEqual(
    category
  );

  expect(
    prisma.category.upsert
  ).toHaveBeenCalled();
});
it("update updates category", async () => {
  const category = {
    id: "1",
    name: "Updated",
    slug: "updated",
  };

  prisma.category.update.mockResolvedValue(
    category
  );

  const result =
    await repository.update(
      "1",
      {
        name: "Updated",
        slug: "updated",
      }
    );

  expect(result).toEqual(
    category
  );

  expect(
    prisma.category.update
  ).toHaveBeenCalledWith({
    where: {
      id: "1",
    },
    data: {
      name: "Updated",
      slug: "updated",
    },
  });
});
it("delete removes category", async () => {
  prisma.category.delete.mockResolvedValue({
    id: "1",
  });

  await repository.delete("1");

  expect(
    prisma.category.delete
  ).toHaveBeenCalledWith({
    where: {
      id: "1",
    },
  });
});
it("findAll returns categories", async () => {
  const categories = [
    {
      id: "1",
      name: "Phones",
      slug: "phones",
    },
    {
      id: "2",
      name: "Laptops",
      slug: "laptops",
    },
  ];

  prisma.category.findMany.mockResolvedValue(
    categories
  );

  const result =
    await repository.findAll();

  expect(result).toEqual(
    categories
  );

  expect(
    prisma.category.findMany
  ).toHaveBeenCalled();
});
});