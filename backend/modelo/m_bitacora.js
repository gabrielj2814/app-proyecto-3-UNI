const DriverPostgre=require("./driver_postgresql")

class BitacoraModelo extends DriverPostgre {

    constructor(){
        super()
        this.id_vitacora=""
        this.trabajador=""
        this.operacion=""
        this.tabla=""
        this.fecha_operacion=""
        this.aquien_operacion=""
    }

    async consultarTodosModelo(fecha_desde,fecha_hasta){
        const SQL=`SELECT * FROM tvitacora WHERE fecha_operacion BETWEEN ${fecha_desde} AND ${fecha_hasta};`
        return await this.query(SQL)
    }

    async consultaSql(sql){
        return await this.query(sql)
    }

}

module.exports = BitacoraModelo