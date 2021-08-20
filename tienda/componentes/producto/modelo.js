const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reqString = {
    type: String,
    required: true,
}

const reqNumber = {
    type: Number,
    required: true,
}

const proveedorSchema = new Schema({
    nombre: reqString,
    domicilio: reqString,
})

const productoSchema = new Schema({
    codigo: reqString,
    nombre: reqString,
    valor: reqNumber,
    ref_proveedor: [proveedorSchema],
})

const model = mongoose.model('Producto', productoSchema)
module.exports = model