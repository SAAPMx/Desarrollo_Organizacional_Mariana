// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";

// https://firebase.google.com/docs/web/setup#available-libraries
import {
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
    getFirestore,
    query, 
    where,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

  // Your web app's Firebase configuration
const firebaseConfig = {
  // Put you credentials here
  apiKey: "AIzaSyBy7D--5sJzjIvS3kQyvmcmyLS7qe9QeUE",
  authDomain: "sga-mariana.firebaseapp.com",
  databaseURL: "https://sga-mariana-default-rtdb.firebaseio.com",
  projectId: "sga-mariana",
  storageBucket: "sga-mariana.appspot.com",
  messagingSenderId: "167896396707",
  appId: "1:167896396707:web:ce9da09764d884f556a016"
    
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore();
/* 
Se ha vuelto a desplegar ** firebaseConfig ** pues las diferentes versiones 
para el uso de auth y para el registro de nuevos datos se interfieren
entre sí.
VERSIÓN QUE SÍ PERMITE: https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js */


/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */


//FUNCIONES DE OPERACIONES GENERALES
/*Agregar*/
export const saveTask = (mail, predio, referencia, contacto, descripcion, fecha) =>
  addDoc(collection(db, "tasks"), { mail, predio, referencia, contacto, descripcion, fecha });
export const savePersonal = (correo, nombre, apellidoPaterno, apellidoMaterno, grado) =>
addDoc(collection(db,"personal"), {correo, nombre, apellidoPaterno, apellidoMaterno, grado});
/*Obetener*/
export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);
export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const onGetRegisters = (callback) =>
  onSnapshot(collection(db, "registro"), callback);
export const getRegister = (id) => getDoc(doc(db, "registro", id));

/*Borrar*/
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));
export const deleteRegister = (id) => deleteDoc(doc(db, "registro", id));

/*Actualizar*/
export const updateFolio = (newFields) => //Actualiza el último folio en UTILIDADES 
  updateDoc(doc(db, "utilidades", "folio"), newFields);
export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);

  
export const getTasks = () => getDocs(collection(db, "personal"));


