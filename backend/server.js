require("./models/User");
require("./models/Investment");
require("./models/Loan");
require("./models/Taxation");

const express = require('express');
const connectDB = require("./config/db");
require('dotenv').config(); // Load environment variables

const app = express();
connectDB();  // Initialize Database Connection

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Finance API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
