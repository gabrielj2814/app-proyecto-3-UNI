import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
//componentes
import ComponentInicio from './componentes/componentInicio';
import ComponentNosotros from './componentes/componentNosotros';
import ComponentLogin from './componentes/componentLogin';
import ComponentRecuperarCuenta from './componentes/componentRecuperarCuenta';
import ComponentTrabajadorRegistrar from './componentes/componentTrabajadorRegistro'
//APP
//import ComponentDashboard from './componentes/componentDashboard';
import ComponentInicioDashboard from './componentes/componentInicioDashboard';
//modulos transaccion
//PERMISO TRABAJADOR
import ComponentSolicitarPermisoForm from './componentes/componentSolicitarPermisoForm'
import ComponentPermisoTrabajador from './componentes/componentPermisoTrabajador'
import ComponentEditarPermisoTrabajador from './componentes/componentEditarPermisoTrabajadorForm'
//modulos reporte
//modulos configuracion
//ACCESO
import ComponentAcceso from './componentes/componentAcceso'
import ComponentAccesoForm from './componentes/componentAccesoForm'
import ComponentAccesoConsulta from './componentes/componentAccesoConsulta'
//PERMISO
import ComponentPermiso from './componentes/componentPermiso'
import ComponentPermisoForm from './componentes/componentPermisoForm'
import ComponentPermisoConsulta from './componentes/componentPermisoConsulta'
//TIPO TRABAJADOR
import ComponentTipoTrabajador from './componentes/componentTipoTrab'
import ComponentTipoTrabajadorForm from './componentes/componentTipoTrabForm'
import ComponentTipoTrabajadorConsulta from './componentes/componentTipoTrabajadorConsulta'
//TRABAJADOR
import ComponentTrabajadorForm from './componentes/componentTrabajadorForm'
import ComponentTrabajadorConsulta from './componentes/componentTrabajadorConsulta'
import ComponentTrabajador from './componentes/componentTrabajador'
//FUNCION TRABAJADOR
import ComponentFuncionTrabajadorForm from './componentes/componentFuncionTrabajadorForm'
import ComponentFuncionTrabajadorConsulta from './componentes/componentFuncionTrabajadorConsulta'
import ComponentFuncionTrabajador from './componentes/componentFuncionTrabajador'
//modulos seguridad

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ComponentInicio}/>
        <Route exact path="/nosotros" component={ComponentNosotros}/>
        <Route exact path="/login:mensaje?" component={ComponentLogin}/>
        <Route exact path="/registrar/trabajador:mensaje?" component={ComponentTrabajadorRegistrar}/>
        <Route exact path="/recuperar-cuenta" component={ComponentRecuperarCuenta}/>
        <Route exact path="/dashboard" component={ComponentInicioDashboard}/>
        <Route exact path="/dashboard/configuracion/acceso/consultar/:id" component={ComponentAccesoConsulta}/>
        <Route exact path="/dashboard/configuracion/acceso/:operacion/:id?" component={ComponentAccesoForm}/>
        <Route exact path="/dashboard/configuracion/acceso:mensaje?" component={ComponentAcceso}/>
        <Route exact path="/dashboard/configuracion/permiso/consultar/:id" component={ComponentPermisoConsulta}/>
        <Route exact path="/dashboard/configuracion/permiso/:operacion/:id?" component={ComponentPermisoForm}/>
        <Route exact path="/dashboard/configuracion/permiso:mensaje?" component={ComponentPermiso}/>
        <Route exact path="/dashboard/configuracion/tipo-trabajador/consultar/:id" component={ComponentTipoTrabajadorConsulta}/>
        <Route exact path="/dashboard/configuracion/tipo-trabajador/:operacion/:id?" component={ComponentTipoTrabajadorForm}/>
        <Route exact path="/dashboard/configuracion/tipo-trabajador:mensaje?" component={ComponentTipoTrabajador}/>
        <Route exact path="/dashboard/configuracion/trabajador/consultar/:id" component={ComponentTrabajadorConsulta}/>
        <Route exact path="/dashboard/configuracion/trabajador/:operacion/:id?" component={ComponentTrabajadorForm}/>
        <Route exact path="/dashboard/configuracion/trabajador:mensaje?" component={ComponentTrabajador}/>
        <Route exact path="/dashboard/configuracion/funcion-trabajador/consultar/:id" component={ComponentFuncionTrabajadorConsulta}/>
        <Route exact path="/dashboard/configuracion/funcion-trabajador/:operacion/:id?" component={ComponentFuncionTrabajadorForm}/>
        <Route exact path="/dashboard/configuracion/funcion-trabajador:mensaje?" component={ComponentFuncionTrabajador}/>
        <Route exact path="/dashboard/transaccion/permiso-trabajador/solicitar" component={ComponentSolicitarPermisoForm}/>
        <Route exact path="/dashboard/transaccion/permiso-trabajador:mensaje?" component={ComponentPermisoTrabajador}/>
        <Route exact path="/dashboard/transaccion/permiso-trabajador/editar:id" component={ComponentEditarPermisoTrabajador}/>
      </Switch>
    </Router>
  );
}

export default App;
