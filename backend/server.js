// Bring in the dependencies!
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const {
  routeNotFound,
  errorHandler,
} = require('./middlewares/error.middleware');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

app.get('/', (req, res) => res.send('API is up and running!'));

// Handle errors
app.use(routeNotFound);
app.use(errorHandler);

// Start up the server
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
