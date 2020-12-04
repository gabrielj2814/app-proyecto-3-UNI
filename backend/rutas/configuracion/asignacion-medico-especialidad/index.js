const express=require("express"),
router=express.Router(),
bodyparser=require("body-parser"),
AsignacionMedicoEspecialidadControlador=require("../../../controlador/c_asignacion_medico_especialidad"),
VitacoraControlador=require("../../../controlador/c_vitacora")

router.use(bodyparser.json())

router.get("/generar-id",AsignacionMedicoEspecialidadControlador.generarId)
router.post("/registrar",AsignacionMedicoEspecialidadControlador.registrarControlador,VitacoraControlador.capturaDatos)
router.get("/consultar/:id/:token",AsignacionMedicoEspecialidadControlador.consultarControlador,VitacoraControlador.capturaDatos)
router.put("/actualizar/:id",AsignacionMedicoEspecialidadControlador.actualizarControlador,VitacoraControlador.capturaDatos)
router.get("/consultar-todos",AsignacionMedicoEspecialidadControlador.consultarTodosControlador)

module.exports= router