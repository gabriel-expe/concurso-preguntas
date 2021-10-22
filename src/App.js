import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import home from "./components/home";
import juego from "./components/juego";
import tablaJugadores from "./components/tablaJugadores";

function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route exact path="/" component = {home} />
          <Route exact path="/juego" component = {juego} />
          <Route exact path="/tablajugadores" component = {tablaJugadores} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
