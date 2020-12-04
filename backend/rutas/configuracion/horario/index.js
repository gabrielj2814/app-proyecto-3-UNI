const express=require("express"),
router=express.Router(),
bodyparser=require("body-parser"),
HorarioControlador=require("../../../controlador/c_horario"),
VitacoraControaldor=require("../../../controlador/c_vitacora")

router.use(bodyparser.json())

router.get("/consultar-activo",HorarioControlador.consultarHoraioActivoControlador)
router.post("/agregar-horario",HorarioControlador.agregarNuevoHorarioControlador,VitacoraControaldor.capturaDatos)
const json={
    "horario":{
        "horario_entrada":"07:30AM",
        "horario_salida":"10:30AM"
    }
}

module.exports=router