const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet"); // Security headers ke liye
require("colors");

// Config
dotenv.config();
const connectDB = require("./src/config/db");

// Routes Imports
const serviceRoutes = require("./src/routes/ServiceRouter");
const physioDoctorsRouter = require("./src/routes/physioDoctorsRouter");
const statsRoutes = require("./src/routes/StatsRoute");
const appointmentRoutes = require("./src/routes/appointmentRoutes");

// Initialize App
const app = express();
const PORT = process.env.PORT || 4040;

// Connect to Database
connectDB();

// --- Middleware ---

// 1. Security Headers
app.use(helmet());

// 2. CORS (Cross-Origin Resource Sharing)
// Production me 'origin' ko apne frontend domain se replace karna
// server/server.js

app.use(cors({
  origin: "*",  // <-- Star (*) ka matlab sab allowed
  credentials: true
}));

// 3. Body Parser
app.use(express.json()); // Parses incoming JSON requests

// --- Routes ---
app.use("/api/services", serviceRoutes);
app.use("/api/doctors", physioDoctorsRouter);
app.use("/api/stats", statsRoutes);
app.use("/api/appointment", appointmentRoutes);

// Base Route
app.get("/", (req, res) => {
  res.send({ message: "🚀 API is running securely!" });
});

// --- Error Handling Middleware ---
// Agar koi route match nahi hua (404)
app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// Global Error Handler
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`.bgCyan.white);
});
