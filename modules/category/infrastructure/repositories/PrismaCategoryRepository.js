import { prisma } from "@/server/db/prisma";
import { Category } from "../../domain/Category";

export class PrismaCategoryRepository {
  async findAll() {
    const categories =
      await prisma.category.findMany({
        orderBy: {
          name: "asc",
        },
      });

    return categories.map(
      (category) =>
        new Category({
          id: category.id,
          name: category.name,
          slug: category.slug,
          description:
            category.description,
        })
    );
  }
   async findById(id) {
    return prisma.category.findUnique({
      where: {
        id,
      },
    });
  }
  async findBySlug(slug) {
  return prisma.category.findUnique({
    where: {
      slug,
    },
  });
}
async save(category) {
  return prisma.category.upsert({
    where: {
      id: category.id,
    },

    update: {
      name: category.name,
      slug: category.slug,
    },

    create: {
      id: category.id,
      name: category.name,
      slug: category.slug,
    },
  });
}
async update(id, data) {
  return prisma.category.update({
    where: {
      id,
    },

    data: {
      name: data.name,
      slug: data.slug,
    },
  });
}
async delete(id) {
  return prisma.category.delete({
    where: {
      id,
    },
  });
}

}
