const model = require('./modelo')

function agregarCliente( cliente ) {
    const objeto = new model( cliente )
    objeto.save()
}

function obtenerClientes( filtroCliente ) {
    let filtro = {}
    if (filtroCliente) {
        filtro = { cedula: filtroCliente }
    }
    const objeto = model.find( filtro )
    return objeto
}

function actualizarCliente( cliente ) {
    const objeto = model.findOne( {cedula: cliente.cedula} )
    objeto.nombre = cliente.nombre
    cedula.apellido = cliente.apellido
    objeto.ref_ciudad = cliente.ciudad
    const resultado = objeto.save()
    return resultado
}

function eliminarCliente( cedula ) {
    return model.deleteOne({cedula: cedula})
}

module.exports = {
    agregar: agregarCliente,
    obtener: obtenerClientes,
    actualizar: actualizarCliente,
    eliminar: eliminarCliente,
}