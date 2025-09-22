const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
require("colors");


// Routes import
const serviceRoutes = require('./src/routes/ServiceRouter');
const physioDoctorsRouter = require('./src/routes/physioDoctorsRouter');
dotenv.config();
const connectDB = require("./src/config/db");

const app = express();


// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
connectDB();

// Use Routes
app.use("/api/services", serviceRoutes);
app.use("/api/doctors", physioDoctorsRouter);


// Routes
app.get("/", (req, res) => {
  res.send("🚀 Server running & DB connected!");
});

// Start server
const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`.bgCyan.white);
  console.log(`http://localhost:${PORT}`.bgWhite.black);
});