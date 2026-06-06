const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const category = await prisma.category.create({
    data: {
      name: "Electronics",
      slug: "electronics",
    },
  });

  await prisma.product.createMany({
    data: [
      {
        name: "iPhone 15",
        slug: "iphone-15",
        description: "Apple smartphone",
        price: 999.99,
        sku: "IPHONE15",
        stock: 20,
        status: "ACTIVE",
        categoryId: category.id,
      },

      {
        name: "Samsung Galaxy S25",
        slug: "samsung-galaxy-s25",
        description: "Samsung flagship",
        price: 899.99,
        sku: "S25",
        stock: 15,
        status: "ACTIVE",
        categoryId: category.id,
      },

      {
        name: "MacBook Pro",
        slug: "macbook-pro",
        description: "Apple laptop",
        price: 2499.99,
        sku: "MBP2026",
        stock: 10,
        status: "ACTIVE",
        categoryId: category.id,
      },
    ],
  });

  console.log("Seed completed");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });