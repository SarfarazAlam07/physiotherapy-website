const mongoose = require("mongoose");

const statSchema = new mongoose.Schema(
  {
    label: {
      type: String,
    },
    value: {
      type: Number,
    },
  },
  { timestamps: true } // Automatically 'createdAt' aur 'updatedAt' fields add kar dega
);

const Stat = mongoose.model("Stat", statSchema);

module.exports = Stat;