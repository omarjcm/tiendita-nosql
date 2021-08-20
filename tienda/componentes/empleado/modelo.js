const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reqString = {
    type: String,
    required: true,
}

const empleadoSchema = new Schema({
    cedula: reqString,
    nombre: reqString,
    apellido: reqString,
    usuario: reqString,
    clave: reqString
})

const model = mongoose.model('Empleado', empleadoSchema)
module.exports = model