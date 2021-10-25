import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/Logo.png";
import "./NavBar.css";

//BARRA DE NAVEGACIÓN, QUEDA EN LA PARTE DE ARRIBA DE LA PÁGINA.
//EL USUARIO PUEDE DARLE AL LOGO DEL JUEGO PARA IR A LA PANTALLA DE INICIO, A A RESULTADOS PARA VER PARTE DEL REGISTRO.

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse d-flex flex-row-reverse">
            <div className="container d-flex justify-content-between align-items-center">
              <Link to="/">
                <img src={logo} className="img-fluid" alt="logo" />
              </Link>
              <Link to="/puntuaciones">
                <button className="btn">Historia Puntuaciones</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
