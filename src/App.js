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
import TablaJugadores from "./components/TablaJugadores";


function App() {
  return (
    <div className="App">
    <Router>
      <NavBar/>
      <Switch>
          <Route exact path="/juego" component = {Juego} />
          <Route exact path="/tablajugadores" component = {TablaJugadores} />
          <Route exact path="/login" component = {Login}/>
          <Route exact path="/" component = {Inicio} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
