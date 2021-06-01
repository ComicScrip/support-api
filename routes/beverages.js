const beveragesRouter = require('express').Router();
veragesRouter.get('/', (req, res) => {
  res.send(beverages);
});

module.exports = beveragesRouter;
