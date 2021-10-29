import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { consultarDatabase, guardarDatabase } from "../config/firebase";
import "./Login.css";
import { InfoUsuario } from "./UserContext";

//PANTALLA DE LOGIN, DONDE EL USUARIO SE PUEDE LOGUEAR SIMPLEMENTE CON EL NICKNAME.
//NO HAY NICKNAME REPETIDOS, PERO NO TIENEN RESTRICCIONES EN TEMA DE NÚMERO DE CARACTERES.
//SI SE INGRESA UN NICKNAME QUE YA SE ENCUENTRA EN LA BASE DE DATOS, SE EXTRAE SU INFORMACIÓN Y SE JUEGA CON ÉL

export default function Login() {
  const { usuario, setUsuario } = useContext(InfoUsuario);
  const [listaUsuarios, setListaUsuarios] = useState([]);

  useEffect(() => {
    actualizarListaUsuarios();
  }, []);

  async function actualizarListaUsuarios() {
    setListaUsuarios(await consultarDatabase("usuarios"));
  }

  const handleUsuario = () => {
    let usuarioExiste = null;
    usuarioExiste = listaUsuarios.find((u) => u.nickname === usuario.nickname);
    if (usuarioExiste) {
      setUsuario(usuarioExiste);
    } else {
      setUsuario({
        nickname: usuario.nickname,
        fecha: new Date().toDateString(),
        puntuacion: 0,
      });
      // setListaUsuarios([...listaUsuarios, usuario])
      guardarDatabase("usuarios", usuario);
    }
  };

  const handleSetUsuario = (e) => {
    setUsuario({ ...usuario, nickname: e.target.value });
  };
  return (
    <>
      <div className="d-flex body-Login">
        <div className="container d-flex align-items-center align-self-center justify-content-center">
          <form>
            <div className="mb-2">
              <input
                className="form-control form-control-sm"
                placeholder="Nickname"
                onChange={handleSetUsuario}
                value={usuario.nickname}
                required
              />
              {/* <div className="form-text text-center">0 a 20 caracteres</div> */}
            </div>
            <div className="mt-2 d-flex justify-content-center">
              <Link to="/Juego" className="btn" onClick={handleUsuario}>
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
