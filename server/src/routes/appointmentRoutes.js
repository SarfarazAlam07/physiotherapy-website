const express = require("express");
const router = express.Router();
const { sendAppointment } = require("../controllers/appointmentController");

// POST /api/appointment
router.post("/", sendAppointment);

module.exports = router;