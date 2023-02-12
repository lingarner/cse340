const pool = require("../database");

async function getClassifications(){
    return await pool.query("SELECT * FROM public.classification ORDER BY classification_name");
}

async function getVehiclesByClassificationId(classificationId)
{
    try {
        const data = await pool.query("SELECT * FROM public.inventory AS i JOIN public.classification AS c ON i.classification_id = c.classification_id WHERE i.classification_id = $1",
        [classificationId])
        return data.rows
    } catch (error) {
        console.error('getclassificationbyid error' + error)
    }
}

async function getVehiclesByInv_id(inv_id)
{
    try{
        const data = await pool.query("SELECT * FROM public.inventory WHERE inv_id= $1", [inv_id])
        return data
    }
    catch (error){
        console.error("getvehiclebyinv_id" + error)
    }
}


module.exports = {getClassifications, getVehiclesByClassificationId, getVehiclesByInv_id};
