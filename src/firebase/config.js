// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDr3qbOGcBouuoeGazZylnQUb_HctG60Ms",
    authDomain: "react-cursos-56cb3.firebaseapp.com",
    projectId: "react-cursos-56cb3",
    storageBucket: "react-cursos-56cb3.appspot.com",
    messagingSenderId: "642715583440",
    appId: "1:642715583440:web:3d4ccb819d21393464efd5"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB= getFirestore(FirebaseApp);