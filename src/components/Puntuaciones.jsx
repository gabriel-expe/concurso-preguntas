import React from "react";
import "./Puntuaciones.css";
import Oro from "../img/Oro.png";
import Plata from "../img/Plata.png";
import Bronce from "../img/Bronce.png";

export default function Puntuaciones() {
  return (
    <>
      <div className="body-puntuaciones">
        <div className="container d-flex align-items-center align-self-center justify-content-center">
          <div className="row mt-2 mx-5 cl-12">
            <div className="card col-md-3 my-5 mx-md-5 pt-3 order-md-2 bg-dark text-warning">
              <img
                src={Oro}
                className="card-img-top responsive"
                alt="Copa de oro"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Primer Lugar</h5>
                <p className="card-text">Puntuacion:</p>
                <p className="card-text">Fecha:</p>
              </div>
            </div>
            <div className="card col-md-3 my-5 mx-md-4 pt-3 order-md-1 bg-dark text-light">
              <img src={Plata} className="card-img-top" alt="Copa de oro" />
              <div className="card-body">
                <h5 className="card-title text-center">Segundo Lugar</h5>
                <p className="card-text">Puntuacion:</p>
                <p className="card-text">Fecha:</p>
              </div>
            </div>
            <div className="card col-md-3 my-5 mx-md-4 pt-3 order-md-3 bg-dark text-light">
              <img src={Bronce} className="card-img-top" alt="Copa de oro" />
              <div className="card-body">
                <h5 className="card-title text-center">Tercer Lugar</h5>
                <p className="card-text">Puntuacion:</p>
                <p className="card-text">Fecha:</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-flex align-items-center align-self-center justify-content-center">
            <div className="list-group w-50">
              <li 
              className="list-group-item list-group-item-action flex-column align-items-start bg-dark text-light">
                <div className="d-flex">
                  <h5 className="mb-1 container-fluid mt-2">Nickname: </h5>
                  <small className="w-25">3 days ago</small>
                </div>
                <p className="container-fluid mt-2">
                  Puntaje: 
                </p>
              </li>
            </div>
          </div>
      </div>
    </>
  );
}
