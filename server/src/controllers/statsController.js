const Stat = require("../models/StatsModel");

// @desc    Get all stats
// @route   GET /api/stats
const getStats = async (req, res) => {
  try {
    const stats = await Stat.find({});
    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json({ message: "Error fetching stats", error: error.message });
  }
};

// @desc    Create a stat
// @route   POST /api/stats
const createStat = async (req, res) => {
  const { label, value } = req.body;

  if (!label || value === undefined) {
    return res.status(400).json({ message: "Label and value are required" });
  }

  try {
    const newStat = new Stat({ label, value });
    const savedStat = await newStat.save();
    res.status(201).json(savedStat);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: "This label already exists." });
    }
    res.status(400).json({ message: "Error creating stat", error: error.message });
  }
};

module.exports = { getStats, createStat };