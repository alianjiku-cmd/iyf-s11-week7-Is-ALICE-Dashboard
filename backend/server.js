require("dotenv").config({ path: __dirname + "/.env" });

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI;

console.log("Loaded DB_URI:", DB_URI);

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3002",
    credentials: true,
  })
);

if (!DB_URI) {
  console.error("❌ DB_URI is missing. Check your .env file.");
  process.exit(1);
}

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
});

app.get("/", (req, res) => {
  res.json({
    message: "Alice Dashboard Backend API is running",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    env: process.env.NODE_ENV || "development",
  });
});

app.get("/api/dashboard", (req, res) => {
  res.json({
    message: "Dashboard data placeholder",
  });
});

app.listen(PORT, () => {
  console.log(
    `🚀 Server running on http://localhost:${PORT} in ${
      process.env.NODE_ENV || "development"
    } mode`
  );
});
