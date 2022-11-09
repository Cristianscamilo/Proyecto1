const conexion = require("../config/db")

module.exports = {

    async consultar() {
        const resultados = await conexion.query("select * from traslado");
        return resultados.rows;
    },

    async consultarPorSecuencia (secuencia) {
        const resultados = await conexion.query("select * from traslado where secuencia = $1", [secuencia]);
        return resultados.rows;
    },

    async crear (Sucursal_origen, Sucursal_destino, Usuario_origen, Usuario_destino, Observaciones ) {
        const resultados = await conexion.query(`insert into traslado (Sucursal_origen, Sucursal_destino, Usuario_origen, Usuario_destino, Observaciones) 
        values ($1, $2, $3, $4, $5)`, [Sucursal_origen, Sucursal_destino, Usuario_origen, Usuario_destino, Observaciones]);
        return resultados.rows;
    },

    async modificar(Sucursal_origen, Sucursal_destino, Usuario_origen, Usuario_destino, Observaciones, secuencia) {
        const resultados = await conexion.query(`update traslado 
        set Sucursal_origen = $1, 
        Sucursal_destino = $2,
        Usuario_origen = $3,
        Usuario_destino = $4,
        Observaciones = $5
        where secuencia = $6` , [Sucursal_origen, Sucursal_destino, Usuario_origen, Usuario_destino, Observaciones, secuencia]);
        return resultados.rows;
    },

    async eliminar (secuencia) {
        const resultados = await conexion.query(`delete from traslado where secuencia = $1`, [secuencia]);
        return resultados.rows;
    },
}