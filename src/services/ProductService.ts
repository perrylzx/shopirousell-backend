
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getAllProducts() {
  const products = await prisma.product.findMany({orderBy: {createdAt: 'desc'}});
  return products;
}

async function createProduct(shopId: number, description: string, name: string, price: number, imageUrl: string) {
  const product = await prisma.product.create({
    data: {
      name,
      imageUrl,
      shopId,
      description,
      price,
    },
  });
  return product;
}


export default {
  getAllProducts,
  createProduct,
};