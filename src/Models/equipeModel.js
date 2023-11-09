const db = require("./dbConnection.js")

const postDoctor = async (body) => {
    
    const {crm} = body
    const {nome_medico} = body
    const {especialidade} = body
    const {turno} = body

    const postDoctor = (await db).execute("INSERT INTO equipe (CRM, nome_medico, especialidade, turno) VALUES (?, ?, ?, ?)", [crm, nome_medico, especialidade, turno])
    return postDoctor
}

const deleteDoctor = async (crm) => {

    const deleteDoctor = (await db).execute("DELETE FROM equipe WHERE CRM = ?", [crm])
    return deleteDoctor
}

const getDoctor = async (crm) => {

    const getDoctor = (await db).execute("SELECT * FROM equipe WHERE CRM = ?", [crm])
    return getDoctor
}

const updateDoctor = async (id, body) => {

    const {nome_medico} = body
    const {especialidade} = body
    const {turno} = body

    const updateDoctor = (await db).execute("UPDATE equipe SET nome_medico = ?, especialidade = ?, turno = ? WHERE CRM = ?", [nome_medico, especialidade, turno, id])
    return updateDoctor

}
module.exports = {
    postDoctor,
    deleteDoctor,
    getDoctor,
    updateDoctor
}