const storage = require('./almacenamiento')

function agregarCliente( cliente ) {
    return new Promise((resolve, reject) => {
        storage.agregar( cliente )
        resolve( cliente )
    })
}

function obtenerClientes( filtroCliente ) {
    return new Promise((resolve, reject) => {
        resolve( storage.obtener( filtroCliente ) )
    })
}

function actualizarCliente( nombre, abreviatura ) {
    return new Promise((resolve, reject) => {
        let carrera = {
            nombre: nombre,
            abreviatura: abreviatura
        }
        storage.actualizar( carrera )
        resolve( carrera )
    })
}

function eliminarCliente( abreviatura ) {
    return new Promise((resolve, reject) => {
        storage.eliminar( abreviatura )
        resolve( abreviatura )
    })
}

module.exports = {
    agregarCliente,
    obtenerClientes,
    actualizarCliente,
    eliminarCliente,
}