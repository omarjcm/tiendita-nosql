const factura = require('../componentes/factura/interfaz')
const cliente = require('../componentes/cliente/interfaz')
const producto = require('../componentes/producto/interfaz')
const empleado = require('../componentes/empleado/interfaz')

const rutas = function(servidor) {
    servidor.use('/factura', factura)
    servidor.use('/cliente', cliente)
    servidor.use('/producto', producto)
    servidor.use('/empleado', empleado)
}

module.exports = rutas