import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Inicio from "./components/Inicio";
import Juego from "./components/Juego";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Puntuaciones from "./components/Puntuaciones";


function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
          <Route exact path="/juego" component = {Juego} />
          <Route exact path="/login" component = {Login}/>
          <Route exact path="/puntuaciones" component = {Puntuaciones}/>
          <Route exact path="/" component = {Inicio} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
