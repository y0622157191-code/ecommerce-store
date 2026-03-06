// server.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// API endpoints example
app.get('/', (req, res) => {
    res.send('Welcome to the E-commerce API!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
