require('dotenv').config();
const express = require('express');

const { PORT } = process.env;

const app = express();

require('./routes')(app);

// server setup
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
