const comunes = require("../config/comunes")
const modelo = require("../models/detalle_cotizacion")

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
    const {referencia, iva, precio, cantidad, total, cotizacion, descuento} = req.body
    modelo
        .crear(referencia, iva, precio, cantidad, total, cotizacion, descuento)
        .then(() => {
            return res.send(comunes.respuestaCreacion())        
        })     
        .catch(err => {
            return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
        })
}
exports.modificar = (req, res) => {
    const {nreferencia, iva, precio, cantidad, total, cotizacion, descuento, secuencia} = req.body
    modelo
        .modificar(referencia, iva, precio, cantidad, total, cotizacion, descuento, secuencia)
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