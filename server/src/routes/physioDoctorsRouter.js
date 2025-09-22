const express = require("express");
const PhysioDoctor= require("../models/physioDoctorsModel");

const router = express.Router();

// Add new doctor data
router.post("/", async (req, res) => {
  try {
    const newDoctor = new PhysioDoctor(req.body);
    await newDoctor.save();
    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all doctors
router.get("/", async (req, res) => {
  try {
    const doctors = await PhysioDoctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
