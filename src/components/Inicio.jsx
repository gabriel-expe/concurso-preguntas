import React from "react";
import { Link } from "react-router-dom";
import "./Inicio.css";

// PANTALLA DE INICIO DE LA APP

export default function Inicio() {

  return (
    <>
      <div className="d-flex body-Inicio">
        <div className="container d-flex align-items-center align-self-center justify-content-center">
          <Link to="/login" className="btn btn-lg">
            JUGAR
          </Link>
        </div>
      </div>
    </>
  );
}
