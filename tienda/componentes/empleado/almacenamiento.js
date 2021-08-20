const model = require('./modelo')

function agregarEmpleado( empleado ) {
    const objeto = new model( empleado )
    objeto.save()
}

function obtenerEmpleados( filtroEmpleado ) {
    let filtro = {}
    if (filtroEmpleado) {
        filtro = { cedula: filtroEmpleado }
    }
    const objeto = model.find( filtro )
    return objeto
}

async function actualizarEmpleado( empleado ) {
    const objeto = await model.findOne( {cedula: empleado.cedula} )
    
    objeto.nombre = empleado.nombre
    objeto.apellido = empleado.apellido
    objeto.usuario = empleado.usuario
    objeto.clave = empleado.clave    

    const resultado = await objeto.save()
    return resultado
}

function eliminarEmpleado( cedula ) {
    return model.deleteOne({cedula: cedula})
}

module.exports = {
    agregar: agregarEmpleado,
    obtener: obtenerEmpleados,
    actualizar: actualizarEmpleado,
    eliminar: eliminarEmpleado,
}