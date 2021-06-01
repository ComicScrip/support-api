const express = require('express');
const PORT = 5000;

const app = express();

// server setup
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
