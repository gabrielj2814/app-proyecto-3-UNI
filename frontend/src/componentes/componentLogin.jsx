import React from 'react';
import {withRouter} from 'react-router-dom'
//JS
import axios from 'axios'
// css
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import '../css/componentLogin.css';
//SubComponent
import ComponentFormCampo from '../subComponentes/componentFormCampo';
import LinkButton from '../subComponentes/link_button';
import InputButton from '../subComponentes/input_button'

class ComponentLogin extends React.Component{

    constructor(){
        super();
        this.cambiarEstado=this.cambiarEstado.bind(this);
        this.validarNumero=this.validarNumero.bind(this);
        this.iniciarSesion=this.iniciarSesion.bind(this)
        this.state={
            id_cedula:"",
            clave_trabajador:"",
            mensaje:{
                texto:"",
                estado:""
              },
        }
    }

    async UNSAFE_componentWillMount(){
        var servidor={}
        if(this.props.match.params.mensaje){
          const msj=JSON.parse(this.props.match.params.mensaje)
          var mensaje=this.state.mensaje
          mensaje.texto=msj.texto
          mensaje.estado=msj.estado
          servidor.mensaje=mensaje
          this.setState(servidor)
        }
      }

    validarNumero(a){
        var input=a.target;
        const expresion=/[0-9]$/;
        if(expresion.test(input.value)){
            console.log("OK NUMEROS VALIDADOS");
            if(input.value.length<=8){
                this.cambiarEstadoInput(input);
            }
        }
        else{
            if(input.value===""){
                console.log("-> ''");
                this.cambiarEstadoInput(input)
            }
            else{
                console.log("EN CAMPO "+input.name+"ACEPTA SOLO NUMEROS");
                input.value=this.state[input.name];
                this.cambiarEstadoInput(input)
            }
        }
    }


    cambiarEstadoInput(input){
        this.setState({[input.name]:input.value});
    }

    cambiarEstado(a){
        const input=a.target;
        this.setState({[input.name]:input.value})
    }

    iniciarSesion(){
        if(this.validarLoginForm()){
            var respuesta_servidor=""
            var mensaje=this.state.mensaje
            axios.get(`http://localhost:8080/login/iniciar-session/${this.state.id_cedula}/${this.state.clave_trabajador}`)
            .then(respuesta=>{
                respuesta_servidor=respuesta.data
                if(respuesta_servidor.estado_peticion==="200"){
                    if(respuesta_servidor.estado_sesion===true && respuesta_servidor.token){
                        console.log("シーテムに入ります")
                        if(localStorage.getItem("usuario")){
                            localStorage.removeItem("usuario")
                            localStorage.setItem("usuario",respuesta_servidor.token)
                        }
                        else{
                            localStorage.setItem("usuario",respuesta_servidor.token)
                        }
                        this.props.history.push("/dashboard")
                    }
                }
                else if(respuesta_servidor.estado_peticion==="404"){
                    mensaje.texto=respuesta_servidor.mensaje
                    mensaje.estado=respuesta_servidor.estado_peticion
                    this.setState(mensaje)
                }
            })
        }
    }

    validarCedulaUsuario(){
        var estado=false
        if(this.state.id_cedula!==""){
            if(this.state.id_cedula.length===8){
                estado=true
            }
            else{
                alert("el codigo del usuario no cumple con los caracteres minimos "+this.state.id_cedula.length+"/8")
            }
        }
        else{
            alert("el codigo del usuario no puede estar vacio")
        }
        return estado
    }

    validarClave(){
        var estado=false
        if(this.state.clave_trabajador!==""){
            if(this.state.clave_trabajador.length>=6){
                estado=true
            }
            else{
                alert("la clave del usuario no cumple con los caracteres minimos "+this.state.clave_trabajador.length+"/6 la clave puede tener 6 o mas caracteres")
            }
        }
        else{
            alert("el clave del usuario no puede estar vacio")
        }
        return estado
    }

    validarLoginForm(){
        var estado=false
        const validar_Cedula_Usuario=this.validarCedulaUsuario(),
        validar_Clave=this.validarClave()
        if(validar_Cedula_Usuario && validar_Clave){
            estado=true
        }
        return estado
    }

    render(){
        return(
            <div className="containter-fluid component_login">
                <div className="row align-items-center justify-content-center fila_login">
                    <div className="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 contenedor_login">
                        <form id="form_login">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 titulo_formulario">
                                    Login
                                </div>
                            </div>
                            <div className="col-12 col-ms-12 col-md-12 col-lg-12 col-xl-12">
                                {this.state.mensaje.texto!=="" && (this.state.mensaje.estado==="200" || this.state.mensaje.estado==="404" || this.state.mensaje.estado==="401" || this.state.mensaje.estado==="500") &&
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                            <div className={`alert alert-${(this.state.mensaje.estado==="200" || this.state.mensaje.estado==="401")?"success":"danger"} alert-dismissible`} >
                                                <p>Mensaje: {this.state.mensaje.texto}</p>
                                                <button className="close" data-dismiss="alert">
                                                    <span>X</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="row justify-content-center margen_bottom_10 ">
                                <ComponentFormCampo
                                clasesColumna="col-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 text-center"
                                nombreCampo="Usuario"
                                activo="si"
                                clasesCampo="form-control"
                                type="text"
                                value={this.state.id_cedula}
                                name="id_cedula"
                                id="id_cedula"
                                placeholder="CEDULA TRABAJADOR"
                                eventoPadre={this.validarNumero}
                                />
                            </div>
                            <div className="row justify-content-center margen_bottom_10 ">
                                <ComponentFormCampo
                                clasesColumna="col-7 col-sm-7 col-md-7 col-lg-7 col-xl-7  text-center"
                                nombreCampo={`Clave: ${this.state.clave_trabajador.length}/6`}
                                activo="si"
                                clasesCampo="form-control"
                                type="password"
                                value={this.state.clave_trabajador}
                                name="clave_trabajador"
                                id="clave_trabajador"
                                placeholder="CLAVE"
                                eventoPadre={this.cambiarEstado}
                                />
                            </div>
                            <div className="row row justify-content-center margen_bottom_10">    
                                <div className="col-auto">
                                    <InputButton 
                                    clasesBoton="btn btn-success"
                                    id="boton-registrar"
                                    value="iniciar sesion"
                                    eventoPadre={this.iniciarSesion}
                                    />   
                                </div>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-auto">
                                    <LinkButton clases="btn btn-primary" ruta="/registrar/trabajador" texto="Registrate"/>
                                </div>
                                <div className="col-auto">
                                    <LinkButton clases="btn btn-primary" ruta="/recuperar-cuenta" texto="Recuperar Cuenta"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(ComponentLogin);