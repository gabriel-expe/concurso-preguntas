import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/Logo.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse d-flex flex-row-reverse justify-content-end">
            <div className="container d-flex justify-content-between align-items-center">
          <Link to="/">
            <img src={logo} className="img-fluid" alt="logo" />
          </Link>
              <Link to="/puntuaciones">
                <button className="btn">
                  Mejores Puntuaciones
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
