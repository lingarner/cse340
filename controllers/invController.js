

const invModel = require("../models/inventory-model");
const utilities = require("../utilities");

const invCont = {};

invCont.buildByClassification = async function (req, res, next) {
    const classificationId = req.params.classificationId;
    let data = await invModel.getVehiclesByClassificationId(classificationId);
    let nav = await utilities.getNav();
    const className = data[0].classification_name

    res.render("./inventory/classification-view", {
        title: className + "vehicles",
        nav,
        message: null,
        data,
    })
}

invCont.buildByInv_id = async function (req, res, next) {
    const inv_id = req.params.inv_id;
    let data = await invModel.getVehiclesByInv_id(inv_id);
    let page = await utilities.getVehiclePage(data);
    const vehicleModel = data.rows[0].inv_model;
    const vehicleMake = data.rows[0].inv_make;

    res.render("./inventory/vehicle-detail", {
        title: vehicleMake + " " + vehicleModel,
        page,
        message: null,
        data,
    })
}

module.exports = invCont;