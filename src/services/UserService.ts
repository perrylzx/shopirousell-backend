

import { PrismaClient } from '@prisma/client';

// todo: instantiate client in a separate file so we dont have to do it in every service
const prisma = new PrismaClient();



async function createUser(id: string) {
  const existingUser = await prisma.user.findFirst({ where: { id }, include: { shops: {include: {products: true}} } });
  if (existingUser) {
    return existingUser;
  }
  const createdUser = await prisma.user.create({ data: { id } });
  return createdUser;
}

async function getUser(id: string) {
  const createdUser = await prisma.user.findFirst({where: {id}, include: {shops: {include: {products: true}}}});
  return createdUser;
}

export default {createUser, getUser};