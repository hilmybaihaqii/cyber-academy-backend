// app.js
const express = require('express');
const moduleRoutes = require('./routes/routes'); // Import the route.js file

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Use the routes defined in route.js
app.use('/api', moduleRoutes);  // API routes will be prefixed with /api

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
