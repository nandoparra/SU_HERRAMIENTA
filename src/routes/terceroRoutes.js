const express = require("express");
const terceroController = require("../controllers/terceroController");
const router = express.Router();

router.get("/", terceroController.crear);
router.post("/store", terceroController.store)
module.exports = router;