
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const shop1 = await prisma.shop.create({
    data: {
      name: 'Shop 1',
      description: 'hehe',

    },
  });

  const shop2 = await prisma.shop.create({
    data: {
      name: 'Shop 2',
      description: 'hehe',
      
    },
  });

  await prisma.product.create({
    data: {
      name: 'Product 1',
      price: 10.99,
      description: 'hehe',
      shop: {
        connect: {
          id: shop1.id,
        },
      },
    },
  });

  await prisma.product.create({
    data: {
      name: 'Product 2',
      price: 20.99,
      description: 'hehe',
      shop: {
        connect: {
          id: shop2.id,
        },
      },
    },
  });

}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
