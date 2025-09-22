const mongoose = require("mongoose");

const physioDoctorSchema = new mongoose.Schema({
  mainTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  specialist: {
    name: { type: String, required: true },
    title: { type: String, required: true },
    bio: { type: String, required: true },
    image: { type: String }, // image ka path ya URL
  },
  mainImage: {
    type: String, // image ka path ya URL
  },
}, { timestamps: true });


module.exports = mongoose.model("PhysioDoctor", physioDoctorSchema);
