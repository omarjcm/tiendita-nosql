const storage = require('./almacenamiento')

function agregarFactura( factura ) {
    return new Promise((resolve, reject) => {
        storage.agregar( factura )
        resolve( factura )
    })
}

function obtenerFacturas( filtroFactura ) {
    return new Promise((resolve, reject) => {
        resolve( storage.obtener( filtroFactura ) )
    })
}

function actualizarFactura( factura ) {
    return new Promise((resolve, reject) => {
        storage.actualizar( factura )
        resolve( factura )
    })
}

function eliminarFactura( codigo ) {
    return new Promise((resolve, reject) => {
        storage.eliminar( codigo )
        resolve( codigo )
    })
}

module.exports = {
    agregarFactura,
    obtenerFacturas,
    actualizarFactura,
    eliminarFactura,
}