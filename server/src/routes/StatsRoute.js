const express = require("express");
const router = express.Router();
const { getStats, createStat } = require("../controllers/statsController");

router.get("/", getStats);
router.post("/", createStat);

module.exports = router;