const comunes = require("../config/comunes")
const modelo = require("../models/detalle_factura")

exports.consultar = (req, res) => {
    modelo
        .consultar()
        .then(resultados => {
            return res.send(comunes.respuestaConsulta(resultados))
        })
        .catch(err => {
            return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
        })
}

exports.consultarPorSecuencia = (req, res) => {
    modelo
        .consultarPorSecuencia(req.params.secuencia)
        .then(resultados => {
            return res.send(comunes.respuestaConsulta(resultados))
        })
        .catch(err => {
            return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
        })
}


exports.crear = (req, res) => {
    const {nombre, referencia, iva, precio, cantidad, total, factura, descuento} = req.body
    modelo
        .crear(nombre, referencia, iva, precio, cantidad, total, factura, descuento)
        .then(() => {
            return res.send(comunes.respuestaCreacion())        
        })     
        .catch(err => {
            return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
        })
}
exports.modificar = (req, res) => {
    const {nombre, referencia, iva, precio, cantidad, total, factura, descuento, secuencia} = req.body
    modelo
        .modificar(nombre, referencia, iva, precio, cantidad, total, factura, descuento, secuencia)
        .then(() => {
            return res.send(comunes.respuestaModificacion())       
            })   
        .catch(err => {
            return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
        })
}
exports.eliminar = (req, res) => {
    const { secuencia } = req.body
    modelo
        .eliminar(secuencia)
        .then(() => {
            return res.send(comunes.respuestaEliminar())        
            }) 
        .catch(err => {
            return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
        })
}