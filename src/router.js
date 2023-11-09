const express = require("express")
const pacienteController = require("./Controllers/pacienteController.js")
const equipeController = require("./Controllers/equipeController.js")
const authentication = require("./Middlewares/authentication.js")

const router = express.Router()

router.post("/hospital/cadastrar/paciente", authentication.authPost, pacienteController.postPatient)
router.delete("/hospital/deletar/paciente/:id", pacienteController.deletePatient)
router.get("/hospital/visualizar/paciente/:id", pacienteController.getPatient)
router.put("/hospital/editar/paciente/:id", pacienteController.updatePatient)
router.post("/hospital/cadastrar/medico", equipeController.postDoctor)
router.delete("/hospital/deletar/medico/:crm", equipeController.deleteDoctor)
router.get("/hospital/visualizar/medico/:crm", equipeController.getDoctor)
router.put("/hospital/editar/medico/:crm", equipeController.updateDoctor)

module.exports = router