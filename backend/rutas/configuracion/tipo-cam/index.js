const express=require("express"),
router=express.Router(),
bodyparser=require("body-parser"),
TipoCamControlador=require("../../../controlador/c_tipo_cam"),
VitacoraControlador=require("../../../controlador/c_vitacora")

router.use(bodyparser.json())

router.get("/generar-id",TipoCamControlador.generarId)
router.post("/registrar",TipoCamControlador.registrarControlador,VitacoraControlador.capturaDatos)
router.get("/consultar/:id/:token",TipoCamControlador.consultarControlador,VitacoraControlador.capturaDatos)
router.put("/actualizar/:id",TipoCamControlador.actualizarControlador,VitacoraControlador.capturaDatos)
router.get("/consultar-todos",TipoCamControlador.consultarTodosControlador)
router.get("/consultar-patron/:patron",TipoCamControlador.consultarTipoCamPatronControlador)


module.exports= router