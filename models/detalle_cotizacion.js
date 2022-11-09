const conexion = require("../config/db")

module.exports = {

    async consultar() {
        const resultados = await conexion.query("select * from detalle_cotizacion");
        return resultados.rows;
    },

    async consultarPorSecuencia (secuencia) {
        const resultados = await conexion.query("select * from detalle_cotizacion where secuencia = $1", [secuencia]);
        return resultados.rows;
    },

    async crear (referencia, iva, precio, cantidad, total, cotizacion, descuento) {
        const resultados = await conexion.query(`insert into detalle_cotizacion (referencia, iva, precio, cantidad, total, cotizacion, descuento) 
        values ($1, $2, $3, $4, $5, $6, $7, $8)`, [referencia, iva, precio, cantidad, total, cotizacion, descuento]);
        return resultados.rows;
    },

    async modificar(referencia, iva, precio, cantidad, total, cotizacion, descuento, secuencia) {
        const resultados = await conexion.query(`update detalle_cotizacion 
        set nombre = $1,
        referencia = $2,
        iva = $3,
        precio = $4,
        cantidad = $5,
        total = $6,
        cotizacion = $7,
        descuento = $8
        where secuencia = $9` , [referencia, iva, precio, cantidad, total, cotizacion, descuento, secuencia]);
        return resultados.rows;
    },

    async eliminar (secuencia) {
        const resultados = await conexion.query(`delete from detalle_cotizacion where secuencia = $1`, [secuencia]);
        return resultados.rows;
    },
}