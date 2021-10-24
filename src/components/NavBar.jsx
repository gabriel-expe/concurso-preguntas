import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/Logo.png"
import './NavBar.css';

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container-fluid">
          <Link to = '/'>
          <img src={logo} className="img-fluid" alt="logo"/>
          </Link>
          <div className="collapse navbar-collapse d-flex flex-row-reverse justify-content-end">
            

              <div className="container d-flex justify-content-end">
                <Link to="./Juego.jsx">
                <button type="button" className="btn">Mejores Resultados</button>
                </Link>
              </div>
            
          </div>
        </div>
      </nav>
    </>
  );
}
