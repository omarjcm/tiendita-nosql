const model = require('./modelo')

function agregarFacturar( factura ) {
    const objeto = new model( factura )
    objeto.save()
}

function obtenerFacturas( filtroFacturar ) {
    let filtro = {}
    if (filtroFacturar) {
        filtro = { codigo: filtroFacturar }
    }
    const objeto = model.find( filtro )
    return objeto
}

function actualizarFacturar( factura ) {
    const objeto = model.findOne( {codigo: factura.codigo} )
    objeto.nombre = factura.nombre
    objeto.valor = factura.valor
    objeto.ref_proveedor = factura.ref_proveedor
    const resultado = objeto.save()
    return resultado
}

function eliminarFacturar( codigo ) {
    return model.deleteOne({codigo: codigo})
}

module.exports = {
    agregar: agregarFacturar,
    obtener: obtenerFacturas,
    actualizar: actualizarFacturar,
    eliminar: eliminarFacturar,
}