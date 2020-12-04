import React from 'react'
import {withRouter} from 'react-router-dom'
// css
import '../css/barra_estado.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-grid.css'
import '../Icon-Simple/style.css'
//
import $ from'jquery';
import popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle';
import ImagenAvatar from '../galeria/usuario.png'

const BarraEsatdo= (props) =>{

    function salirDelSistema(){
        if(localStorage.getItem("usuario")){
            localStorage.removeItem("usuario")
            props.history.push("/login")
        }
    }

    return (
        <div className="row justify-content-start align-items-center contenedor_barra_estado">
            <div className="col-md-1 contenedor-foto-avatar">
                <img className="imagen-avatar" src={ImagenAvatar} alt="imagen-avatar" />
            </div>
            <div className="col-auto">
                <span className="nombre-usuario">{props.nombre_usuario}</span>
            </div>
            <div className="col-auto offset-4 offset-7">
                <div className="dropdown dropleft">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdown1" data-toggle="dropdown"></button>
                    <div className="dropdown-menu">
                        <span className="dropdown-item boton-cabecera" ><span className="icon-user"></span> perfil</span>
                        <span className="dropdown-item boton-cabecera" onClick={salirDelSistema}><span className="icon-exit"></span>  salir</span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default withRouter(BarraEsatdo)