
import { PrismaClient } from '@prisma/client';

// todo: instantiate client in a separate file so we dont have to do it in every service
const prisma = new PrismaClient();

async function getShop(id: number) {
  const shops = await prisma.shop.findFirst({
    where: {id},
    include: {products: true}});
  return shops;
}

async function createShop(name: string, description: string, userId: string, imageUrl: string) {
  const shop = await prisma.shop.create({
    data: {
      name,
      imageUrl,
      description,
      userId,
    },
  });
  return shop;
}

async function getAllShops() {
  const shops = await prisma.shop.findMany({
    include: {products: true},
  });
  return shops;
}


export default {getShop, createShop, getAllShops};