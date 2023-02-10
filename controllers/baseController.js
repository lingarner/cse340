const utilities = require("../utilities")
const baseController = {}

baseController.buildHome = async function(reg, res) {
const nav = await utilities.getNav()
res.render("index", { title: "Home", nav })
}


module.exports = baseController;