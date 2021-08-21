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

const facturaDetalleSchema = new Schema({
    ref_producto: {
        type: Schema.ObjectId,
        ref: 'Producto',
    },
    cantidad: reqNumber,
    cantidad_x_valor: reqNumber,
}, {
    timestamps: true,
})

const facturaSchema = new Schema({
    codigo: reqString,
    ref_empleado: {
        type: Schema.ObjectId,
        ref: 'Empleado',
    },
    ref_cliente: {
        type: Schema.ObjectId,
        ref: 'Cliente',
    },
    valor_total: reqNumber,
    ref_factura_detalle: [facturaDetalleSchema]
}, {
    timestamps: true,
})

const model = mongoose.model('Factura', facturaSchema)
module.exports = model