class DriverPostgreSQL {

    constructor(){
        const {Pool} =require("pg"),
        config={
            user:"gabriel",
            host:"localhost",
            password:"stark",
            database:"proyecto_3"
        }
        this.database=new Pool(config);
    }

    conexion(){
        this.database.connect()
    }

    async query(sql){
        this.conexion()
        const respuesta=await this.database.query(sql)
        //console.log(respuesta)
        return respuesta
        //console.log("estoy en el driver de conexion")
    }


}

module.exports = DriverPostgreSQL