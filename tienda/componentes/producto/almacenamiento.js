const model = require('./modelo')

function agregarProducto( producto ) {
    const objeto = new model( producto )
    objeto.save()
}

function obtenerProductos( filtroProducto ) {
    let filtro = {}
    if (filtroProducto) {
        filtro = { codigo: filtroProducto }
    }
    const objeto = model.find( filtro )
    return objeto
}

function actualizarProducto( producto ) {
    const objeto = model.findOne( {codigo: producto.codigo} )
    objeto.nombre = producto.nombre
    objeto.valor = producto.valor
    objeto.ref_proveedor = producto.ref_proveedor
    const resultado = objeto.save()
    return resultado
}

function eliminarProducto( codigo ) {
    return model.deleteOne({codigo: codigo})
}

module.exports = {
    agregar: agregarProducto,
    obtener: obtenerProductos,
    actualizar: actualizarProducto,
    eliminar: eliminarProducto,
}