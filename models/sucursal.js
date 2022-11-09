const conexion = require("../config/db")

module.exports = {

    async consultar() {
        const resultados = await conexion.query("select * from sucursal");
        return resultados.rows;
    },

    async consultarPorSecuencia (secuencia) {
        const resultados = await conexion.query("select * from sucursal where secuencia = $1", [secuencia]);
        return resultados.rows;
    },

    async crear (nombre, direccion, telefono, ciudad) {
        const resultados = await conexion.query(`insert into sucursal (nombre, direccion, telefono, ciudad) 
        values ($1, $2, $3, $4)`, [nombre, direccion, telefono, ciudad]);
        return resultados.rows;
    },

    async modificar(nombre, direccion, telefono, ciudad, secuencia) {
        const resultados = await conexion.query(`update sucursal 
        set nombre = $1, 
        direccion = $2,
        telefono = $3,
        ciudad = $4
        where secuencia = $5` , [nombre, direccion, telefono, ciudad, secuencia]);
        return resultados.rows;
    },

    async eliminar (secuencia) {
        const resultados = await conexion.query(`delete from sucursal where secuencia = $1`, [secuencia]);
        return resultados.rows;
    },
}