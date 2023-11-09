const equipeModel = require("../Models/equipeModel.js")

const postDoctor = async(req, res) => {

    const postedDoctor = await equipeModel.postDoctor(req.body)
    res.status(200).json({message: "Medico registrado!"})
}

const deleteDoctor = async (req, res) => {

    const deletedDoctor = await equipeModel.deleteDoctor(req.params.crm)
    res.status(200).json({message: "Medico retirado da equipe!"})
}

const getDoctor = async (req, res) => {

    const gotDoctor = await equipeModel.getDoctor(req.params.crm)
    res.status(200).json(gotDoctor[0])
}

const updateDoctor = async (req, res) => {

    const updatedDoctor = await equipeModel.updateDoctor(req.params.crm, req.body)
    res.status(200).json({message: "Perfil medico editado!"})
}

module.exports = {
postDoctor,
deleteDoctor,
getDoctor,
updateDoctor
}