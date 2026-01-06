const express = require("express");
const router = express.Router();
const { getDoctors, createDoctor } = require("../controllers/physioDoctorController");

router.get("/", getDoctors);
router.post("/", createDoctor);

module.exports = router;