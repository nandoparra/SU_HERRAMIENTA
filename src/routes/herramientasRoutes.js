const express = require("express");
const herramientasController = require("../controllers/herramientasController");
const router = express.Router();

router.get("/", herramientasController.findAll);
module.exports = router;