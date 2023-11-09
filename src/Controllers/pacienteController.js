const pacienteModel = require("../Models/pacienteModel.js")

const postPatient = async(req, res) => {
    const postedPatient = await pacienteModel.postPatient(req.body)
    res.status(200).send({message: "Paciente registrado"})
}

const deletePatient = async(req, res) => {
    const deletedPatient = await pacienteModel.deletePatient(req.params.id)
    res.status(200).send({message: "Paciente deletado"})
}

const getPatient = async(req, res) => {
    const gotPatient = await pacienteModel.getPatient(req.params.id)
    res.status(200).json(gotPatient[0])
}

const updatePatient = async(req, res) => {
    const updatedPatient = await pacienteModel.updatePatient(req.params.id, req.body)
    res.status(200).send({message: "Dados atualizados"})
}

module.exports = {
    postPatient,
    deletePatient,
    getPatient,
    updatePatient
}