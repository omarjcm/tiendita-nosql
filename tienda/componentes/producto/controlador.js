const storage = require('./almacenamiento')

function agregarProducto( producto ) {
    return new Promise((resolve, reject) => {
        storage.agregar( producto )
        resolve( producto )
    })
}

function obtenerProductos( filtroProducto ) {
    return new Promise((resolve, reject) => {
        resolve( storage.obtener( filtroProducto ) )
    })
}

function actualizarProducto( codigo, nombre, valor, proveedores ) {
    return new Promise((resolve, reject) => {
        let producto = {
            codigo: codigo,
            nombre: nombre,
            valor: valor,
            ref_proveedor: proveedores
        }
        storage.actualizar( producto )
        resolve( producto )
    })
}

function eliminarProducto( codigo ) {
    return new Promise((resolve, reject) => {
        storage.eliminar( codigo )
        resolve( codigo )
    })
}

module.exports = {
    agregarProducto,
    obtenerProductos,
    actualizarProducto,
    eliminarProducto,
}