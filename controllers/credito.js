const comunes = require("../config/comunes")
const modelo = require("../models/credito")

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
    const {factura, cliente, fecha_pago, estado} = req.body
    modelo
        .crear(factura, cliente, fecha_pago, estado)
        .then(() => {
            return res.send(comunes.respuestaCreacion())        
        })     
        .catch(err => {
            return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
        })
}
exports.modificar = (req, res) => {
    const {factura, cliente, fecha_pago, estado, secuencia} = req.body
    modelo
        .modificar(factura, cliente, fecha_pago, estado, secuencia)
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