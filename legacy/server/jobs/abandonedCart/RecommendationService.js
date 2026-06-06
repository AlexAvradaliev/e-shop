export class RecommendationService {
  static async getRelated(
    product
  ) {
    return await prisma.product.findMany({
      where: {
        category:
          product.category,
      },

      take: 4,
    });
  }
}