const conexion = require("../config/db")

module.exports = {

    async consultar() {
        const resultados = await conexion.query("select * from marca");
        return resultados.rows;
    },

    async consultarPorSecuencia (secuencia) {
        const resultados = await conexion.query("select * from marca where secuencia = $1", [secuencia]);
        return resultados.rows;
    },

    async crear (nombre) {
        const resultados = await conexion.query(`insert into marca (nombre) 
        values ($1)`, [nombre]);
        return resultados.rows;
    },

    async modificar(nombre, secuencia) {
        const resultados = await conexion.query(`update marca 
        set nombre = $1
        where secuencia = $2` , [nombre, secuencia]);
        return resultados.rows;
    },

    async eliminar (secuencia) {
        const resultados = await conexion.query(`delete from marca where secuencia = $1`, [secuencia]);
        return resultados.rows;
    },
}