const express = require("express")
const pacienteController = require("./Controllers/pacienteController.js")
const authentication = require("./Middlewares/authentication.js")

const router = express.Router()

router.post("/hospital/cadastrar/paciente", authentication.authPost, pacienteController.postPatient)
router.delete("/hospital/deletar/paciente/:id", pacienteController.deletePatient)
router.get("/hospital/visualizar/paciente/:id", pacienteController.getPatient)
router.put("/hospital/editar/paciente/:id", pacienteController.updatePatient)

module.exports = router