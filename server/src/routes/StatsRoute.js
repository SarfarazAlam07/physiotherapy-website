const express = require("express");
const router = express.Router();
const Stat = require("../models/StatsModel");
// GET: Sabhi stats ko database se fetch karein
router.get("/", async (req, res) => {
  try {
    const stats = await Stat.find({});
    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json({ message: "Error fetching stats", error });
  }
});

// POST: Ek naya stat create karein
router.post("/", async (req, res) => {
  const { label, value } = req.body;

  // Basic validation
  if (!label || value === undefined) {
    return res.status(400).json({ message: "Label and value are required" });
  }

  const newStat = new Stat({
    label,
    value,
  });

  try {
    const savedStat = await newStat.save();
    res.status(201).json(savedStat); // 201 Created status
  } catch (error) {
    // Duplicate label error ko handle karein
    if (error.code === 11000) {
      return res.status(409).json({ message: "This label already exists." });
    }
    res.status(400).json({ message: "Error creating stat", error });
  }
});

module.exports = router;
