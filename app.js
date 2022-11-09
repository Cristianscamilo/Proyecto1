//Dependencias
const express = require("express")
require("dotenv").config()
const bodyParser = require("body-parser")
const db = require("../Proyecto1/config/db")
const routeSucursal = require("../Proyecto1/router/sucursal")
const routeMarca = require("../Proyecto1/router/marca")
const routeDetalle_Factura = require("../Proyecto1/router/detalle_factura")
const routeTraslado = require("../Proyecto1/router/traslado")
const routeCredito = require("../Proyecto1/router/credito")
const routeDetalle_cotizacion = require("../Proyecto1/router/detalle_cotizacion")
//Variables
const app = express()

//Configuraciones
const port = process.env.PORT

app.use(
    bodyParser.json({
        limit:"50mb"
    })
)

app.use(
    bodyParser.urlencoded({
        limit:"50mb",
        extended: "true"
    })
)

app.use(routeSucursal)
app.use(routeMarca)
app.use(routeDetalle_Factura)
app.use(routeTraslado)
app.use(routeCredito)
app.use(routeDetalle_cotizacion)

app.listen(port, () => {
    console.log(`La aplicación esta en linea por el puerto ${port}`)
})