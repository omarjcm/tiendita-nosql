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

function actualizarFactura( nombre, abreviatura ) {
    return new Promise((resolve, reject) => {
        let carrera = {
            nombre: nombre,
            abreviatura: abreviatura
        }
        storage.actualizar( carrera )
        resolve( carrera )
    })
}

function eliminarFactura( abreviatura ) {
    return new Promise((resolve, reject) => {
        storage.eliminar( abreviatura )
        resolve( abreviatura )
    })
}

module.exports = {
    agregarFactura,
    obtenerFacturas,
    actualizarFactura,
    eliminarFactura,
}