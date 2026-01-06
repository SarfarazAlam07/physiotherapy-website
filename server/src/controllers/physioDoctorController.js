const PhysioDoctor = require("../models/physioDoctorsModel");

// @desc    Get all doctors
// @route   GET /api/doctors
// @access  Public
const getDoctors = async (req, res) => {
  try {
    const doctors = await PhysioDoctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Add a new doctor
// @route   POST /api/doctors
// @access  Private (Future implementation)
const createDoctor = async (req, res) => {
  try {
    const newDoctor = new PhysioDoctor(req.body);
    await newDoctor.save();
    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getDoctors, createDoctor };