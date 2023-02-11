const invModel = require("../models/inventory-model")
const Util = {}


// Constructs the nav HTML unordered list

Util.buildNav = function (data) {
    let list = "<ul>"
    list += '<li><a href="/" titile="Home page">Home</a></li>'
    data.rows.forEach ((row) => {
        list += "<li>"
        list +=
            '<a href="/inv/type/' +
            row.classification_id +
            '" title = "See our inventory of ' +
            row.classification_name +
            ' vehicles">' +
            row.classification_name +
            "</a>"
        list += "</li>"
    })
    list += "</ul>"
    return list
};

// builds nav bar
Util.getNav = async function (req, res, next) {
    let data = await invModel.getClassifications()
    nav = Util.buildNav(data)
    return nav
};




const product = {};

// builds product page template
product.buildDisplay = async function(data){
    let container = "<div>"
    container += '<img><a href="/" title="Home page">Home</a></li>'
    data.rows.forEach ((row) => {
        container += "<li>"
        conatiner +=
            '<a href="/inv/type/' +
            row.classification_id +
            '" title = "See our inventory of ' +
            row.classification_name +
            ' vehicles">' +
            row.classification_name +
            "</a>"
        container += "</li>"
    })
    container += "</div>"
    return container
}



// builds product page
product.getInfo = async function(req, res, next){
    let data = await invModel.getVehicleInformation()
    info = product.buildDisplay(data)
    return info
};


module.exports = Util




