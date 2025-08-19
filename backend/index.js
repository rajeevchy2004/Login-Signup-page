const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Routers
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');

// Load environment variables
require('dotenv').config();

// Connect to MongoDB
require('./Models/db');

const app = express();
const PORT = process.env.PORT || 8080;

// Health check route
app.get('/ping', (req, res) => {
    res.send('PONG');
});

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
