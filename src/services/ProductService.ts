
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getAllProducts() {
  const products = await prisma.product.findMany();
  return products;
}

async function createProduct(shopId: number, description: string, name: string, price: number) {
  const product = await prisma.product.create({
    data: {
      name,
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