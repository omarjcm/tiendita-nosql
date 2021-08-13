const express = require('express')
const respuesta = require('../../red/respuestas')
const controlador = require('./controlador')

const ruta = express.Router()

ruta.get('/', function(req, res) {
    const filtroCliente = req.query.cliente || null
    controlador.obtenerClientes( filtroCliente )
        .then((data) => {
            respuesta.exito(req, res, data, 200)
        })
        .catch((error) => {
            respuesta.error(req, res, error, 500)
        })
})

ruta.post('/', function(req, res) {
    controlador.agregarCliente( req.body )
        .then((data) => {
            respuesta.exito(req, res, data, 200)
        })
        .catch((error) => {
            respuesta.error(req, res, error, 500)
        })
})

ruta.patch('/', function(req, res) {
    controlador.actualizarCliente(req.body.nombre, req.body.abreviatura)
        .then((data) => {
            respuesta.exito(req, res, data, 200)
        })
        .catch((error) => {
            respuesta.error(req, res, error, 500)
        })
})

ruta.delete('/', function(req, res) {
    controlador.eliminarCliente(req.body.abreviatura)
        .then((data) => {
            respuesta.exito(req, res, data, 200)
        })
        .catch((error) => {
            respuesta.error(req, res, error, 500)
        })
})

module.exports = ruta