import firebaseConfig from "./credenciales.js";
// COnfiguracion e inicializacion de la base de datos
import { initializeApp } from "firebase/app";
// Referencia a la base de datos
import { getFirestore } from "firebase/firestore";

// Metodos de interaccion con la base de datos
import {
  addDoc,
  collection,
  getDocs,
  query,
  getDoc,
  doc,
  updateDoc,
} from "firebase/firestore";


initializeApp(firebaseConfig);
export const database = getFirestore();

// CONFIGURACIÓN DE FIREBASE PARA EL CONSUMO, CREACIÓN, ACTUALIZACIÓN Y ELIMINACIÓN DE DOCUMENTOS.

export const guardarDatabase = async (nombreColeccion, data) => {
  try {
    const respuesta = await addDoc(collection(database, nombreColeccion), data);
    console.log(respuesta);
    return respuesta;
  } catch (e) {
    throw new Error(e);
  }
};

// getAll()
export const consultarDatabase = async (nombreColeccion) => {
  try {
    const respuesta = await getDocs(
      query(collection(database, nombreColeccion))
    );

    const coleccionDatos = respuesta.docs.map((documento) => {
      const documentoTemporal = {
        id: documento.id,
        ...documento.data(),
      };
      return documentoTemporal;
    });
    return coleccionDatos;
  } catch (e) {
    throw new Error(e);
  }
};

// gteDocumentById()
// Consultar un documento
export const consultarDocumentoDatabase = async (nombreColeccion, id) => {
  try {
    const respuesta = await getDoc(doc(database, nombreColeccion, id));
    const documentoTemporal = {
      id: respuesta.id,
      ...respuesta.data(),
    };
    console.log(documentoTemporal);
    return documentoTemporal;
  } catch (e) {
    throw new Error(e);
  }
};

// Actualizacion de un documento
export const actualizarDocumentoDatabase = async (
  nombreColeccion,
  dato
) => {
  try {
    const cDatos = await consultarDatabase(nombreColeccion)
    let auxID
    cDatos.forEach(d=>{
      if(d.nickname === dato.nickname)
      auxID = d.id
    })
    await updateDoc(doc(database, nombreColeccion, auxID), dato);
  } catch (e) {
    throw new Error(e);
  }
};





