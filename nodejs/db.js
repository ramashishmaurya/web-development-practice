const mongoose = require("mongoose");

const mongoURL = "mongodb://127.0.0.1:27017/hotels";

// ✅ No options needed in latest version
mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB server ✅");
});

db.on("disconnected", () => {
  console.log("Disconnected from MongoDB server ⚠️");
});

db.on("error", (error) => {
  console.error("MongoDB connection error ❌:", error);
});

module.exports = db;