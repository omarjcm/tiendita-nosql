const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reqString = {
    type: String,
    required: true,
}

const paisSchema = new Schema({
    nombre: reqString,
})

const ciudadSchema = new Schema({
    nombre: reqString,
    ref_pais: paisSchema,
})

const clienteSchema = new Schema({
    cedula: reqString,
    nombre: reqString,
    apellido: reqString,
    ref_ciudad: ciudadSchema,
})

const model = mongoose.model('Cliente', clienteSchema)
module.exports = model