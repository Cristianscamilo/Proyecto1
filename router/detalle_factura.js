const express = require("express")
const controller = require("../controllers/detalle_factura")
const router = express.Router()
const path = '/detalle_factura'

router.get(path,controller.consultar)

router.get(path + '/:secuencia',controller.consultarPorSecuencia)


router.post(path, controller.crear)

router.put(path, controller.modificar) //modificar put

router.delete(path, controller.eliminar) // eliminar delete

module.exports = router