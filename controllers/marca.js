const comunes = require("../config/comunes")
const modelo = require("../models/marca")

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
    const {nombre} = req.body
    modelo
        .crear(nombre)
        .then(() => {
            return res.send(comunes.respuestaCreacion())        
        })     
        .catch(err => {
            return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
        })
}

exports.modificar = (req, res) => {
    const {nombre, secuencia} = req.body
    modelo
        .modificar(nombre, secuencia)
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