import React, { useState } from "react";
import AppRutas from "./components/Routes/AppRutas";
import { InfoUsuario } from "./components/UserContext";

  //PADRE DE TODO, SE PONE EL CONTEXT PARA QUE PUEDA SER USADO DENTRO DE TODAS LAS INTERFACES.

function App() {

  const fecha = new Date().toDateString()

  const [usuario, setUsuario] = useState({
    nickname: '',
    fecha: fecha,
    puntuacion: 0
  })

  return (
    <InfoUsuario.Provider value = {{
      usuario,
      setUsuario,
    }}>
      <AppRutas/>
    </InfoUsuario.Provider>
  );
}

export default App;
