// needed resources
const express = require("express");
const router = new express.Router();
const invController = require("../controllers/invController");


// route to build product pags by id
router.get("/type/:classificationId", invController.buildbyID)


module.exports = router;
