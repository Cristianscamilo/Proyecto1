const conexion = require("../config/db")

module.exports = {

    async consultar() {
        const resultados = await conexion.query("select * from detalle_factura");
        return resultados.rows;
    },

    async consultarPorSecuencia (secuencia) {
        const resultados = await conexion.query("select * from detalle_factura where secuencia = $1", [secuencia]);
        return resultados.rows;
    },

    async crear (nombre, referencia, iva, precio, cantidad, total, factura, descuento) {
        const resultados = await conexion.query(`insert into detalle_factura (nombre, referencia, iva, precio, cantidad, total, factura, descuento) 
        values ($1, $2, $3, $4, $5, $6, $7, $8)`, [nombre, referencia, iva, precio, cantidad, total, factura, descuento]);
        return resultados.rows;
    },

    async modificar(nombre, referencia, iva, precio, cantidad, total, factura, descuento, secuencia) {
        const resultados = await conexion.query(`update detalle_factura 
        set nombre = $1,
        referencia = $2,
        iva = $3,
        precio = $4,
        cantidad = $5,
        total = $6,
        factura = $7,
        descuento = $8
        where secuencia = $9` , [nombre, referencia, iva, precio, cantidad, total, factura, descuento, secuencia]);
        return resultados.rows;
    },

    async eliminar (secuencia) {
        const resultados = await conexion.query(`delete from detalle_factura where secuencia = $1`, [secuencia]);
        return resultados.rows;
    },
}