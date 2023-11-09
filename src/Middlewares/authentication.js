const db = require("../Models/dbConnection.js")

const authPost = async(req, res, next) => {
    if(req.body.nome === undefined){
        res.status(400).json({message: "Deve-se registrar um nome!"})
    }
    if(req.body.nome === ""){
        res.status(400).json({message: "O nome deve ser diferente de inexistente!"})
    }
    if(req.body.cpf === undefined){
        res.status(400).json({message: "Deve-se registrat um cpf!"})
    }
    if(req.body.cpf === ""){
        res.status(400).json({message: "O cpf deve ser diferente de inexistente!"})
    }
    if(req.body.idade === undefined){
        res.status(400).json({message: "Deve-se registrat uma idade!"})
    }
    if(req.body.idade === ""){
        res.status(400).json({message: "A idade deve ser diferente de inexistente!"})
    }
    if(req.body.enfermidade === undefined){
        res.status(400).json({message: "Deve-se registrar uma enfermidade!"})
    }
    if(req.body.enfermidade === ""){
        res.status(400).json({message: "A enfermidade deve ser diferente de inexistente!"})
    }
    if(req.body.urgente === undefined){
        res.status(400).json({message: "Deve-se registrar a urgencia!"})
    }
    if(req.body.urgente === ""){
        res.status(400).json({message: "A urgencia deve ser diferente de inexistente!"})
    }
    next()
}
module.exports = {
    authPost
}