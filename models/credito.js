const conexion = require("../config/db")

module.exports = {

    async consultar() {
        const resultados = await conexion.query("select * from credito");
        return resultados.rows;
    },

    async consultarPorSecuencia (secuencia) {
        const resultados = await conexion.query("select * from credito where secuencia = $1", [secuencia]);
        return resultados.rows;
    },

    async crear (factura, cliente, fecha_pago, estado) {
        const resultados = await conexion.query(`insert into credito (factura, cliente, fecha_pago, estado) 
        values ($1, $2, $3, $4)`, [factura, cliente, fecha_pago, estado]);
        return resultados.rows;
    },

    async modificar(factura, cliente, fecha_pago, estado, secuencia) {
        const resultados = await conexion.query(`update credito 
        set factura = $1, 
        cliente = $2,
        fecha_pago = $3,
        estado = $4
        where secuencia = $5` , [factura, cliente, fecha_pago, estado, secuencia]);
        return resultados.rows;
    },

    async eliminar (secuencia) {
        const resultados = await conexion.query(`delete from credito where secuencia = $1`, [secuencia]);
        return resultados.rows;
    },
}