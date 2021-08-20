const storage = require('./almacenamiento')

function agregarEmpleado( empleado ) {
    return new Promise((resolve, reject) => {
        storage.agregar( empleado )
        resolve( empleado )
    })
}

function obtenerEmpleados( filtroEmpleado ) {
    return new Promise((resolve, reject) => {
        resolve( storage.obtener( filtroEmpleado ) )
    })
}

function actualizarEmpleado( empleado ) {
    return new Promise((resolve, reject) => {
        storage.actualizar( empleado )
        resolve( empleado )
    })
}

function eliminarEmpleado( cedula ) {
    return new Promise((resolve, reject) => {
        storage.eliminar( cedula )
        resolve( cedula )
    })
}

module.exports = {
    agregarEmpleado,
    obtenerEmpleados,
    actualizarEmpleado,
    eliminarEmpleado,
}