const express = require("express");
const ordenesservicioController = require("../controllers/ordenesservicioController");
const router = express.Router();

router.get("/", ordenesservicioController.create);
module.exports = router;