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
          <div className="row mt-2 mx-5">
            <div className="card col-md-3 my-5 mx-md-5 pt-3 order-md-2">
              <img
                src={Oro}
                className="card-img-top responsive"
                alt="Copa de oro"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Primer Lugar</h5>
                <p className="card-text">Puntuacion:</p>
              </div>
            </div>
            <div className="card col-md-3 my-5 mx-md-4 msm pt-3 order-md-1">
              <img src={Plata} className="card-img-top" alt="Copa de oro" />
              <div className="card-body">
                <h5 className="card-title text-center">Segundo Lugar</h5>
                <p className="card-text">Puntuacion:</p>
              </div>
            </div>
            <div className="card col-md-3 my-5 mx-md-4 pt-3 order-md-3">
              <img src={Bronce} className="card-img-top" alt="Copa de oro" />
              <div className="card-body">
                <h5 className="card-title text-center">Tercer Lugar</h5>
                <p className="card-text">Puntuacion:</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
