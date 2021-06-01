const beveragesRouter = require('./beverages');

module.exports = (app) => {
  app.use('/beverages', beveragesRouter);
};
