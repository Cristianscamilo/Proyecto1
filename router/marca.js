const express = require("express")
const controller = require("../controllers/marca")
const router = express.Router()
const path = '/marca'

router.get(path,controller.consultar)

router.get(path + '/:secuencia',controller.consultarPorSecuencia)


router.post(path, controller.crear)

router.put(path, controller.modificar) //modificar put

router.delete(path, controller.eliminar) // eliminar delete

module.exports = router