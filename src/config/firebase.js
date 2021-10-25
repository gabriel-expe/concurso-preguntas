import firebaseConfig from "./credenciales.js";
// COnfiguracion e inicializacion de la base de datos
import { initializeApp } from "firebase/app";
// Referencia a la base de datos
import { getFirestore } from "firebase/firestore";
// Referencia al paquete de autenticacion
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// Metodos de interaccion con la base de datos
import {
  addDoc,
  collection,
  getDocs,
  query,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

initializeApp(firebaseConfig);
export const database = getFirestore();
export const auth = getAuth();

// CONFIGURACIÓN DE FIREBASE PARA EL CONSUMO, CREACIÓN, ACTUALIZACIÓN Y ELIMINACIÓN DE DOCUMENTOS.

// Guardar nuevo documento en base de datos
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
        id: documento.uid,
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
  id,
  data
) => {
  try {
    const respuesta = await updateDoc(doc(database, nombreColeccion, id), data);
    console.log(respuesta);
  } catch (e) {
    throw new Error(e);
  }
};

// Eliminacion de un documento
export const eliminarDocumentoDatabase = async (nombreColeccion, id) => {
  try {
    const respuesta = await deleteDoc(doc(database, nombreColeccion, id));
    console.log(respuesta);
  } catch (e) {
    throw new Error(e);
  }
};

// CrearUsuarios
export const crearUsuario = async (email, password) => {
  try {
    const credencialesUsuario = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(credencialesUsuario);
    console.log(credencialesUsuario.user);
    console.log(credencialesUsuario.user.uid);
    const user = {
      id: credencialesUsuario.user.uid,
      email: credencialesUsuario.user.email,
    };
    guardarDatabase("listaUsuarios", user);
    return user;
  } catch (e) {
    throw new Error(e);
  }
};

// Login Usuarios
export const loginUsuario = async (email, password) => {
  try {
    const credencialesUsuario = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = {
      id: credencialesUsuario.user.uid,
      email: credencialesUsuario.user.email,
    };
    return user;
  } catch (e) {
    throw new Error(e.code);
  }
};

// LogOut -> salir
export const logOutUsuario = () => {
  const respuesta = signOut(auth);
  console.log(respuesta);
  console.log("Me sali...!");
};

//  datos usuario
export const datosUsuario = () => {
  const user = auth.currentUser;
  console.log(user);

  if (user) {
    console.log(user);
    return user;
  } else {
    console.log("datos usuario:", user);
    return undefined;
  }
};

// Usuario Activo
// onAuthStateChanged(auth, (user) => {

//   if (user) {
//     usuario = user
//     console.log('El usuario logueado');
//   } else {
//     console.log('El usuario ya no esta logueado');
//     usuario = undefined
//   }
// })
