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

// Parse JSON from body
app.use(express.json());

// Mount routes
app.use('/api/users', require('./routes/user.routes'));
app.use('/api/orders', require('./routes/order.routes'));

// Handle errors
app.use(routeNotFound);
app.use(errorHandler);

// Start up the server
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
