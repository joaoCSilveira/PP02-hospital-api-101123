const db = require("./dbConnection.js")

const postPatient = async(body) => {

    const {nome} = body
    const {idade} = body
    const {cpf} = body
    const {enfermidade} = body
    const {urgente} = body

    const postPatient = (await db).execute("INSERT INTO paciente (nome, idade, cpf, enfermidade, urgente) VALUES (?, ?, ?, ?, ?)", [nome, idade, cpf, enfermidade, urgente])
    return postPatient
}

const deletePatient = async(id) => {

    const deletePatient = (await db).execute("DELETE FROM paciente WHERE ID_paciente = ?", [id])
    return deletePatient
}

const getPatient = async(id) => {

    const getPatient = (await db).execute("SELECT * FROM paciente WHERE ID_paciente = ?", [id])
    return getPatient
}

const updatePatient = async(id, body) => {

    const {nome} = body
    const {idade} = body
    const {cpf} = body
    const {enfermidade} = body
    const {urgente} = body

    const updatePatient = (await db).execute("UPDATE paciente SET nome = ?, idade = ?, cpf = ?, enfermidade = ?, urgente = ? WHERE ID_paciente = ?", [nome, idade, cpf, enfermidade, urgente, id])
    return updatePatient
}

module.exports = {
    postPatient,
    deletePatient,
    getPatient,
    updatePatient
}