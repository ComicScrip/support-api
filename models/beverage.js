const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const findMany = () => prisma.beverage.findMany();

const addBeverage = ({ name, type, price }) =>
  prisma.beverage.create({ data: { name, type, price } });

module.exports = { findMany, addBeverage };
