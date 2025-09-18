const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    // Agar Atlas URI available hai to usse connect karo, warna local DB se
    const mongoURI = process.env.MONGO_URI ;

    console.log("🔗 Using Mongo URI:", mongoURI);
    await mongoose.connect(mongoURI);

    console.log(`✅ Connected to MongoDB`.bgGreen.white);
  } catch (error) {
    console.error(`❌ Error connecting DB: ${error.message}`.bgRed.white);
    process.exit(1);
  }
};

module.exports = connectDB;
