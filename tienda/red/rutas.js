const facturar = require('../componentes/facturar/interfaz')
const cliente = require('../componentes/cliente/interfaz')

const rutas = function(servidor) {
    servidor.use('/cliente', cliente)
}

module.exports = rutas