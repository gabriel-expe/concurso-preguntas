import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Inicio from "../Inicio";
import Juego from "../Juego";
import Login from "../Login";
import NavBar from "../NavBar";
import Puntuaciones from "../Puntuaciones";

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
          <Route exact path="/" component={Inicio} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}
