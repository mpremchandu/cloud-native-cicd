const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Main application route
app.get('/', (req, res) => {
    res.json({
        status: "Success",
        message: "Welcome to your Cloud-Native App Platform!",
        environment: process.env.NODE_ENV || "development"
    });
});

// Liveness/Readiness probe endpoint for Kubernetes
app.get('/health', (req, res) => {
    res.status(200).json({ status: "UP" });
});

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});
