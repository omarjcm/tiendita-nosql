const facturar = require('../componentes/facturar/interfaz')
const cliente = require('../componentes/cliente/interfaz')
const producto = require('../componentes/producto/interfaz')

const rutas = function(servidor) {
    servidor.use('/cliente', cliente)
    servidor.use('/producto', producto)
}

module.exports = rutas