const express=require("express"),
router=express.Router(),
bodyparser=require("body-parser"),
MedicoControlador=require("../../../controlador/c_medico"),
VitacoraControlador=require("../../../controlador/c_vitacora")

router.use(bodyparser.json())

router.post("/registrar",MedicoControlador.registrarControlador,VitacoraControlador.capturaDatos)
router.get("/consultar/:id/:token",MedicoControlador.consultarControlador,VitacoraControlador.capturaDatos)
router.put("/actualizar/:id",MedicoControlador.actualizarControlador,VitacoraControlador.capturaDatos)
router.get("/consultar-todos",MedicoControlador.consultarTodosControlador)
router.get("/consultar-patron/:patron",MedicoControlador.consultarMedicoPatronControlador)

module.exports = router