import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Inicio from "../Inicio.jsx";
import Juego from "../Juego.jsx";
import Login from "../Login.jsx";
import NavBar from "../NavBar.jsx";
import Puntuaciones from "../Puntuaciones.jsx";

//Componente que contiene las rutas disponibles en la app. Si se ingresa una no existente, redirige a inicio

export default function AppRutas() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/juego" component={Juego} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/puntuaciones" component={Puntuaciones} />
          <Route exact path="/concurso-preguntas" component={Inicio} />
          <Redirect to="/concurso-preguntas" />
        </Switch>
      </Router>
    </>
  );
}
