import React, { useEffect } from "react";
import "./Puntuaciones.css";
import { useState } from "react/cjs/react.development";
import { consultarDatabase } from "../config/firebase";

// INTERFAZ DE PUNTUACIONES. A TRAVÉS DE UNA LISTA Y UN .MAP, SE MUESTRAN LOS USUARIOS, PUNTUACIONES Y FECHA.

export default function Puntuaciones() {
  const [listaUsuarios, setListaUsuarios] = useState([]);

  useEffect(() => {
    actualizarListaUsuarios();
  }, []);

  async function actualizarListaUsuarios() {
    setListaUsuarios(await consultarDatabase("usuarios"));
  }

  return (
    <>
      <div className="body-puntuaciones">
        <div className="container d-flex align-items-center align-self-center justify-content-center">
          <div className="list-group w-75 mt-5">
            {listaUsuarios.map((u) => (
              <li
                key={u.id}
                className="list-group-item list-group-item-action flex-column align-items-start bg-dark text-light"
              >
                <div className="d-flex">
                  <h5 className="mb-1 container-fluid mt-2">
                    Nickname: {u.nickname}{" "}
                  </h5>
                  <small className="w-25">{u.fecha}</small>
                </div>
                <p className="container-fluid mt-2">Puntaje: {u.puntuacion}</p>
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
