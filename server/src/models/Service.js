const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    topic: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    fullDescription: {
      type: String,
      required: true,
    },
    specs: {
      Athletes: { type: String },
      Prevention: { type: String },
      Recovery: { type: String },
      Performance: { type: String },
      Experience: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);
