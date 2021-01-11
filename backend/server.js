// Bring in the dependencies!
const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

app.get('/', (req, res) => res.send('API is up and running!'));

// Start up the server
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
