import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <>
      <div className="d-flex body-Login">
        <div className="container d-flex align-items-center align-self-center justify-content-center">
          <form>
            <div className="mb-2">
              <input
                className="form-control form-control-sm"
                placeholder="Nickname"
              />
              <div className="form-text">5-20 caracteres</div>
            </div>
            <div className="mt-2 d-flex justify-content-center">
              <Link to="/Juego" className="btn">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
