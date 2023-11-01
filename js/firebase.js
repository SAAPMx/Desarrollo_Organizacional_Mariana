// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  // Paste your firebase config here
  apiKey: "AIzaSyBy7D--5sJzjIvS3kQyvmcmyLS7qe9QeUE",
  authDomain: "sga-mariana.firebaseapp.com",
  databaseURL: "https://sga-mariana-default-rtdb.firebaseio.com",
  projectId: "sga-mariana",
  storageBucket: "sga-mariana.appspot.com",
  messagingSenderId: "167896396707",
  appId: "1:167896396707:web:ce9da09764d884f556a016",
  measurementId: "G-2HVTCS55YW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);

