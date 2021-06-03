const beveragesRouter = require('express').Router();
const Beverage = require('../models/beverage');

beveragesRouter.get('/', async (req, res) => {
  res.send(await Beverage.findMany());
});

beveragesRouter.post('/', async (req, res) => {
  const { name, type, price } = req.body;
  res.send(await Beverage.addBeverage({ name, type, price }));
});

module.exports = beveragesRouter;
