const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const beverages = [
    { name: 'Starbuck deluxe coffee', type: 'soft', price: 8 },
    { name: 'Leffe', type: 'beer', price: 5 },
  ];

  await prisma.beverage.createMany({ data: beverages });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
