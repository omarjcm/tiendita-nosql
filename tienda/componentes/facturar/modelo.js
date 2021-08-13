const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reqDate = {
    type: Date,
    required: true,
}

const reqString = {
    type: String,
    required: true,
}

const reqNumber = {
    type: Number,
    required: true,
}

const facturarSchema = new Schema({
    ref_cliente: {
        type: Schema.ObjectId,
        ref: 'Cliente',
    },
    fecha_emision: reqDate,
}, {
    timestamps: true,
})


const facturaDetalleSchema = new Schema({
    ref_factura: facturarSchema,
    ref_producto: {
        type: Schema.ObjectId,
        ref: 'Producto',
    },
    cantidad: reqNumber,
    valor: reqNumber,
    valor_detalle: reqNumber,
}, {
    timestamps: true,
})

const model = mongoose.model('Facturar', facturarSchema)
module.exports = model