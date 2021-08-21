const model = require('./modelo')

function agregarFactura( factura ) {
    const objeto = new model( factura )
    objeto.save()
}

function obtenerFacturas( filtroFactura ) {
    return new Promise((resolve, reject) => {
        let filtro = {}
        if (filtroFactura != null) {
            filtro = { codigo: filtroFactura }
        }
        model.find( filtro )
            .populate('ref_cliente')
            .populate('ref_empleado')
            .populate('ref_factura_detalle.ref_producto')
            .exec((error, data) => {
                if (error) {
                    reject(error)
                    return false
                }
                resolve(data)
            })
    })
}

async function actualizarFactura( factura ) {
    const objeto = await model.findOne( {codigo: factura.codigo} )
    objeto.valor_total = factura.valor_total
    objeto.ref_empleado = factura.ref_empleado
    objeto.ref_cliente = factura.ref_cliente
    objeto.ref_factura_detalle = factura.ref_factura_detalle
    const resultado = await objeto.save()
    return resultado
}

function eliminarFactura( codigo ) {
    return model.deleteOne({codigo: codigo})
}

module.exports = {
    agregar: agregarFactura,
    obtener: obtenerFacturas,
    actualizar: actualizarFactura,
    eliminar: eliminarFactura,
}