import React, { useEffect } from "react";
import "./Puntuaciones.css";
import Oro from "../img/Oro.png";
import Plata from "../img/Plata.png";
import Bronce from "../img/Bronce.png";
import { useState } from "react/cjs/react.development";
import { ConsultarColeccionFiltrada } from "../config/firebase";

export default function Puntuaciones() {
  const [listaUsuarios, setListaUsuarios] = useState([]);

  useEffect(() => {
    actualizarListaUsuarios();
  }, []);

  // Se extraen de la base de datos, los 10 primeros jugadores con mejor puntaje ordenado de mayor a menor

  async function actualizarListaUsuarios() {
    setListaUsuarios(
      await ConsultarColeccionFiltrada("usuarios", "puntuacion", ">", 0)
    );
  }

  return (
    <>
      {/* Se imprimen los 3 mejores jugadores de forma separada al resto */}

      <div className="body-puntuaciones">
        <div className="container d-flex align-items-center align-self-center justify-content-center">
          <div className="row mt-2 mx-5 cl-12">
            <div className="card col-md-3 my-5 mx-md-5 pt-3 order-md-2 bg-dark text-warning rounded border border-warning">
              <img
                src={Oro}
                className="card-img-top responsive"
                alt="Copa de oro"
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  {listaUsuarios[0]?.nickname}
                </h5>
                <p className="card-text">
                  Puntuacion: {listaUsuarios[0]?.puntuacion}{" "}
                </p>
                <p className="card-text">Fecha: {listaUsuarios[0]?.fecha}</p>
              </div>
            </div>
            <div className="card col-md-3 my-5 mx-md-4 pt-3 order-md-1 bg-dark text-light rounded border border-info">
              <img src={Plata} className="card-img-top" alt="Copa de oro" />
              <div className="card-body">
                <h5 className="card-title text-center">
                  {listaUsuarios[1]?.nickname}
                </h5>
                <p className="card-text">
                  Puntuacion: {listaUsuarios[1]?.puntuacion}
                </p>
                <p className="card-text">Fecha: {listaUsuarios[1]?.fecha}</p>
              </div>
            </div>
            <div className="card col-md-3 my-5 mx-md-4 pt-3 order-md-3 bg-dark text-light rounded border border-secondary">
              <img src={Bronce} className="card-img-top" alt="Copa de oro" />
              <div className="card-body">
                <h5 className="card-title text-center">
                  {listaUsuarios[2]?.nickname}
                </h5>
                <p className="card-text">
                  Puntuacion: {listaUsuarios[2]?.puntuacion}
                </p>
                <p className="card-text">Fecha: {listaUsuarios[2]?.fecha}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Se Imprimen los ultimos 7 jugadores en una lista aparte */}

        <div className="container d-flex align-items-center align-self-center justify-content-center">
          <div className="list-group w-50">
            {listaUsuarios.slice(3).map((usuario) => (
              <li
                key={usuario.id}
                className="list-group-item list-group-item-action flex-column align-items-start bg-dark text-light rounded border border-success"
              >
                <div className="d-flex">
                  <h5 className="mb-1 container-fluid mt-2">
                    {usuario?.nickname}
                  </h5>
                  <small className="w-25">{usuario?.fecha}</small>
                </div>
                <p className="container-fluid mt-2">
                  Puntaje: {usuario?.puntuacion}
                </p>
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
