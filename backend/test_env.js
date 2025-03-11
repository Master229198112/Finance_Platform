require('dotenv').config();
console.log("MongoDB URI:", process.env.MONGO_URI);
console.log("Port:", process.env.PORT);
console.log("JWT Secret:", process.env.JWT_SECRET);
