import React, { useContext, useEffect, useState } from "react";
import {
  actualizarDocumentoDatabase,
  consultarDatabase,
} from "../config/firebase";
import "./Juego.css";
import { InfoUsuario } from "./UserContext";

// INTERFAZ DE JUEGO DE LA APP, DONDE EL JUGAR ESCOGE LAS RESPUESTAS DE ACUERDO A LA PREGUNTA QUE SALE.
// LAS PREGUNTAS EN CADA NIVEL SON ALEATORIAS, ASI COMO SU LUGAR EN A,B,C,D QUE TAMBIÉN ES ALEATORIO.

export default function Juego() {
  const { usuario, setUsuario } = useContext(InfoUsuario);
  const [preguntasC1, setPreguntasC1] = useState([]);
  const [preguntasC2, setPreguntasC2] = useState([]);
  const [preguntasC3, setPreguntasC3] = useState([]);
  const [preguntasC4, setPreguntasC4] = useState([]);
  const [preguntasC5, setPreguntasC5] = useState([]);
  const [contador, setContador] = useState(0);
  const [numPreguntaAleatoria, setNumPreguntaAleatoria] = useState();
  const [pregunta, setPregunta] = useState({
    enunciado: "",
    respuesta: "",
    fRespuestas: ["", "", "", ""],
  });
  const [ordenPreguntas, setOrdenPreguntas] = useState([]);
  const [puntos, setPuntos] = useState();

  useEffect(() => {
    console.log(contador)
    actualizarDatos();
    setNumPreguntaAleatoria(Math.floor(Math.random() * 5));
    elegirCategoria();
    setOrdenPreguntas(barajar());
    if (contador == 6) {
      setUsuario({
        ...usuario,
        puntuacion: usuario.puntuacion + 1000 * contador,
        fecha: new Date().toDateString(),
      });
      actualizarDocumentoDatabase("usuarios", usuario);
      setPuntos(0);
      setContador(0);
    }
  }, [contador]);

  async function actualizarDatos() {
    setPreguntasC1(await consultarDatabase("preguntasC1"));
    setPreguntasC2(await consultarDatabase("preguntasC2"));
    setPreguntasC3(await consultarDatabase("preguntasC3"));
    setPreguntasC4(await consultarDatabase("preguntasC4"));
    setPreguntasC5(await consultarDatabase("preguntasC5"));
  }

  function elegirCategoria() {
    switch (contador) {
      case 1:
        setPregunta(preguntasC1[numPreguntaAleatoria]);
        return;
      case 2:
        setPregunta(preguntasC2[numPreguntaAleatoria]);
        return;
      case 3:
        setPregunta(preguntasC3[numPreguntaAleatoria]);
        return;
      case 4:
        setPregunta(preguntasC4[numPreguntaAleatoria]);
        return;
      case 5:
        setPregunta(preguntasC5[numPreguntaAleatoria]);
        return;
      default:
        setPregunta({
          enunciado: "",
          respuesta: "",
          fRespuestas: ["", "", "", ""],
        });
        return;
    }
  }

  const handleIniciar = () => {
    setContador(1);
  };

  const barajar = () => {
    let posiciones = [0, 1, 2, 3];
    let j, x, i;
    const nMezclas = Math.floor(Math.random() * 10 + 2);

    for (let z = 0; z <= nMezclas; z++)
      for (i = posiciones.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = posiciones[i - 1];
        posiciones[i - 1] = posiciones[j];
        posiciones[j] = x;
      }

    return posiciones;
  };

  const handleRespuestaA = () => {
    if (pregunta.fRespuestas[ordenPreguntas[0]] === pregunta.respuesta) {
      setPuntos(puntos + 1250 * contador);
      setContador(contador + 1);
    } else{
      setContador(0)
      setPuntos(0)
    }
  };

  const handleRespuestaB = () => {
    if (pregunta.fRespuestas[ordenPreguntas[1]] === pregunta.respuesta) {
      setPuntos(puntos + 1250 * contador);
      setContador(contador + 1);
    } else{
      setContador(0)
      setPuntos(0)
    }
  };

  const handleRespuestaC = () => {
    if (pregunta.fRespuestas[ordenPreguntas[2]] === pregunta.respuesta) {
      setPuntos(puntos + 1250 * contador);
      setContador(contador + 1);
    } else{
      setContador(0)
      setPuntos(0)
    }
  };

  const handleRespuestaD = () => {
    if (pregunta.fRespuestas[ordenPreguntas[3]] === pregunta.respuesta) {
      setPuntos(puntos + 1250 * contador);
      setContador(contador + 1);
    } else{
      setContador(0)
      setPuntos(0)
    }
  };

  const handleRetirar = () => {
    if (puntos >= usuario.puntuacion) {
      console.log(usuario.nickname)
      setUsuario({
        ...usuario,
        puntuacion: puntos,
        fecha: new Date().toDateString(),
      });
      actualizarDocumentoDatabase("usuarios", usuario);
      setPuntos(0);
      setContador(0);
    } else {
      setPuntos(0);
      setContador(0);
    }
  };

  return (
    <>
      <div className="d-flex body-Juego justify-content-center">
        <div className="w-75">
          <div className="card mt-5 bg-dark">
            <h5 className="card-header text-light">Pregunta #{contador}</h5>
            <div className="card-body">
              <h5 className="card-title text-light">{pregunta.enunciado}</h5>
            </div>
          </div>
          <div className="d-flex justify-content-around align-items-center">
            <button
              className="btn w-100"
              onClick={handleRespuestaA}
              disabled={contador === 0 ? "true" : ""}
            >
              <div className="card mt-4 container text-light" id="p">
                <div className="card-body d-flex">
                  A) {pregunta.fRespuestas[ordenPreguntas[0]]}
                </div>
              </div>
            </button>

            <button
              className="btn w-100"
              onClick={handleRespuestaB}
              disabled={contador === 0 ? "true" : ""}
            >
              <div className="card mt-4 container text-light" id="p">
                <div className="card-body d-flex">
                  B) {pregunta.fRespuestas[ordenPreguntas[1]]}
                </div>
              </div>
            </button>
          </div>

          <div className="d-flex">
            <button
              className="btn w-100"
              onClick={handleRespuestaC}
              disabled={contador === 0 ? "true" : ""}
            >
              <div className="card mt-4 container text-light" id="p">
                <div className="card-body d-flex">
                  C) {pregunta.fRespuestas[ordenPreguntas[2]]}
                </div>
              </div>
            </button>

            <button
              className="btn w-100"
              onClick={handleRespuestaD}
              disabled={contador === 0 ? "true" : ""}
            >
              <div className="card mt-4 container text-light" id="p">
                <div className="card-body d-flex">
                  D) {pregunta.fRespuestas[ordenPreguntas[3]]}
                </div>
              </div>
            </button>
          </div>

          <button
            className="btn btn-dark btn-outline-light btn-lg mt-4 d-flex"
            onClick={handleIniciar}
            disabled={contador > 0 ? "true" : ""}
          >
            comenzar
          </button>
          <button
            className="btn btn-dark btn-outline-light btn-lg mt-4 d-flex"
            onClick={handleRetirar}
            disabled={contador > 0 ? "" : "true"}
          >
            Retirar
          </button>
        </div>
      </div>
    </>
  );
}
