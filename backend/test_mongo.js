require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/User");

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch(err => console.error("❌ MongoDB Connection Failed", err));

// Insert a test user
const testUser = new User({ name: "Test User", email: "test@example.com", password: "123456" });

testUser.save()
    .then(() => console.log("✅ Test User Saved Successfully"))
    .catch(err => console.error("❌ Failed to Save Test User", err));
