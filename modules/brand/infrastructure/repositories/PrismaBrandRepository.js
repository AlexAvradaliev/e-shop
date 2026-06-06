import { prisma } from "@/server/db/prisma";

export class PrismaBrandRepository {
  async findById(id) {
    return prisma.brand.findUnique({
      where: { id },
    });
  }

  async findBySlug(slug) {
    return prisma.brand.findUnique({
      where: { slug },
    });
  }

  async findAll() {
    return prisma.brand.findMany({
      orderBy: {
        name: "asc",
      },
    });
  }

  async save(brand) {
    return prisma.brand.upsert({
      where: {
        id: brand.id,
      },

      update: {
        name: brand.name,
        slug: brand.slug,
      },

      create: {
        id: brand.id,
        name: brand.name,
        slug: brand.slug,
      },
    });
  }

  async update(id, data) {
    return prisma.brand.update({
      where: { id },
      data: {
        name: data.name,
        slug: data.slug,
      },
    });
  }

  async delete(id) {
    return prisma.brand.delete({
      where: { id },
    });
  }
}