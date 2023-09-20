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

import {app} from "./firebase.js"
export const db = getFirestore(app);


export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

export const getTask = (id) => getDoc(doc(db, "tasks", id));