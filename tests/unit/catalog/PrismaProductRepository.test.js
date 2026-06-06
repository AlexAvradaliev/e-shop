import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/server/db/prisma", () => ({
  prisma: {
    product: {
      findUnique: vi.fn(),
      update: vi.fn(),
      upsert: vi.fn(),
      findMany: vi.fn(),
      count: vi.fn(),
      delete: vi.fn(),
    },
  },
}));

import { prisma } from "@/server/db/prisma";
import { PrismaProductRepository } from "@/modules/catalog/infrastructure/repositories/PrismaProductRepository";
describe("PrismaProductRepository", () => {
  let repository;

  beforeEach(() => {
    repository =
      new PrismaProductRepository();

    vi.clearAllMocks();
  });

  it("findById returns product", async () => {
    const product = {
      id: "1",
      name: "iPhone",
    };

    prisma.product.findUnique.mockResolvedValue(
      product
    );

    const result =
      await repository.findById("1");

    expect(result).toEqual(product);

    expect(
      prisma.product.findUnique
    ).toHaveBeenCalledWith({
      where: {
        id: "1",
      },
    });
  });

  it("findBySlug returns product", async () => {
    const product = {
      id: "1",
      slug: "iphone",
    };

    prisma.product.findUnique.mockResolvedValue(
      product
    );

    const result =
      await repository.findBySlug(
        "iphone"
      );

    expect(result).toEqual(product);
  });

  it("update updates product", async () => {
    const updated = {
      id: "1",
      name: "Updated",
    };

    prisma.product.update.mockResolvedValue(
      updated
    );

    const result =
      await repository.update(
        "1",
        {
          name: "Updated",
        }
      );

    expect(result).toEqual(
      updated
    );

    expect(
      prisma.product.update
    ).toHaveBeenCalled();
  });
  it("findBySlug returns null when product does not exist", async () => {
  prisma.product.findUnique.mockResolvedValue(
    null
  );

  const result =
    await repository.findBySlug(
      "missing-product"
    );

  expect(result).toBeNull();
});
it("save creates product", async () => {
  const product = {
    id: "1",
    name: "iPhone",
    slug: "iphone",
    price: 1000,
    sku: "APL-001",
    stock: 5,
    status: "ACTIVE",
    categoryId: "cat1",
    brandId: null,
  };

  prisma.product.upsert.mockResolvedValue(
    product
  );

  const result =
    await repository.save(product);

  expect(result).toEqual(product);

  expect(
    prisma.product.upsert
  ).toHaveBeenCalled();
});
it("findAll returns products and pagination", async () => {
  prisma.product.findMany.mockResolvedValue([
    {
      id: "1",
      name: "iPhone",
      slug: "iphone",
      description: null,
      price: 1000,
      sku: "APL-001",
      stock: 5,
      status: "ACTIVE",
    },
  ]);

  prisma.product.count.mockResolvedValue(
    1
  );

  const result =
    await repository.findAll();

  expect(
    result.products
  ).toHaveLength(1);

  expect(
    result.pagination.total
  ).toBe(1);
});
it("findAll applies category filter", async () => {
  prisma.product.findMany.mockResolvedValue([]);
  prisma.product.count.mockResolvedValue(0);

  await repository.findAll({
    category: "phones",
  });

  expect(
    prisma.product.findMany
  ).toHaveBeenCalledWith(
    expect.objectContaining({
      where: expect.objectContaining({
        category: {
          slug: "phones",
        },
      }),
    })
  );
});
it("findAll applies brand filter", async () => {
  prisma.product.findMany.mockResolvedValue([]);
  prisma.product.count.mockResolvedValue(0);

  await repository.findAll({
    brand: "apple",
  });

  expect(
    prisma.product.findMany
  ).toHaveBeenCalledWith(
    expect.objectContaining({
      where: expect.objectContaining({
        brand: {
          slug: "apple",
        },
      }),
    })
  );
});
it("findBySlug returns null when product does not exist", async () => {
  prisma.product.findUnique.mockResolvedValue(
    null
  );

  const result =
    await repository.findBySlug(
      "missing-product"
    );

  expect(result).toBeNull();
});
it("findAll applies search category and brand filters", async () => {
  prisma.product.findMany.mockResolvedValue([]);
  prisma.product.count.mockResolvedValue(0);

  await repository.findAll({
    search: "iphone",
    category: "phones",
    brand: "apple",
  });

  expect(
    prisma.product.findMany
  ).toHaveBeenCalledWith(
    expect.objectContaining({
      where: expect.objectContaining({
        status: "ACTIVE",

        OR: expect.any(Array),

        category: {
          slug: "phones",
        },

        brand: {
          slug: "apple",
        },
      }),
    })
  );
});
it("findBySlug returns null when product does not exist", async () => {
  prisma.product.findUnique.mockResolvedValue(
    null
  );

  const result =
    await repository.findBySlug(
      "missing"
    );

  expect(result).toBeNull();
});
it("delete removes product", async () => {
  prisma.product.delete.mockResolvedValue({
    id: "1",
  });

  const result =
    await repository.delete("1");

  expect(result).toEqual({
    id: "1",
  });

  expect(
    prisma.product.delete
  ).toHaveBeenCalledWith({
    where: {
      id: "1",
    },
  });
});
});