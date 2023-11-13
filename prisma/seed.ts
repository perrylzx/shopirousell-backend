
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();
  await prisma.shop.deleteMany();
  await prisma.user.deleteMany();
  
  const user1 = await prisma.user.create({
    data: {
      id: '1',
    },
  });


  const shop1 = await prisma.shop.create({
    data: {
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/shopirousell.appspot.com/o/images%2Fcfe58a205dccf74868b258bd5d0452fa.jpg?alt=media&token=19423d13-4919-4695-948d-2b9935ea92d1',
      name: 'Shop 1',
      userId: user1.id,
      description: 'hehe',
    },
  });


  const productNames = [
    'Laptop',
    'Smartphone',
    'Headphones',
    'Camera',
    'Gaming Console',
    'Tablet',
    'Smart Watch',
    'Fitness Tracker',
    'Printer',
    'Scanner',
    'External Hard Drive',
    'Monitor',
    'Keyboard',
    'Mouse',
    'Speakers',
    'Microphone',
    'Projector',
    'Drone',
    'Smart Home Device',
    'Vacuum Cleaner',
    'Air Purifier',
    'Blender',
    'Coffee Maker',
    'Toaster',
    'Microwave',
    'Refrigerator',
    'Washing Machine',
    'Dryer',
    'Dishwasher',
    'Oven',
    'Cooktop',
    'Range Hood',
    'Air Conditioner',
    'Heater',
    'Fan',
    'Electric Toothbrush',
    'Hair Dryer',
    'Hair Straightener',
    'Curling Iron',
    'Shaver',
    'Razor',
    'Electric Scooter',
    'Electric Bike',
    'Hoverboard',
    'Skateboard',
    'Snowboard',
    'Ski',
    'Tent',
    'Sleeping Bag',
    'Backpack',
    'Hiking Boots',
  ];

  const productDescriptions = [
    'Brand new',
    'Used',
    'Refurbished',
    'Open box',
    'Like new',
    'Good condition',
    'Fair condition',
    'For parts or not working',
  ];


  for (let i = 0; i < 50; i++) {
    const productName = productNames[Math.floor(Math.random() * productNames.length)];
    const productDescription = productDescriptions[Math.floor(Math.random() * productDescriptions.length)];
    const productPrice = Math.floor(Math.random() * 10000) + 1;

    await prisma.product.create({
      data: {
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/shopirousell.appspot.com/o/images%2Fcfe58a205dccf74868b258bd5d0452fa.jpg?alt=media&token=19423d13-4919-4695-948d-2b9935ea92d1',
        name: productName,
        price: productPrice,
        description: productDescription,
        shopId: shop1.id,
      },
    });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
