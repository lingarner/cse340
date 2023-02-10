// needed resources
const express = require("express");
const router = new express.Router();
const invController = require("../controllers/invController");
  
// route to build inventory by classification
router.get("/type/:classificationId", invController.buildByClassification);
module.exports = router;
