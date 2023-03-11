// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
import { getEnvironments } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  //VITE_DATABASEURL,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvironments();




// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDr3qbOGcBouuoeGazZylnQUb_HctG60Ms",
//     authDomain: "react-cursos-56cb3.firebaseapp.com",
//     projectId: "react-cursos-56cb3",
//     storageBucket: "react-cursos-56cb3.appspot.com",
//     messagingSenderId: "642715583440",
//     appId: "1:642715583440:web:3d4ccb819d21393464efd5"
// };

// //Testing
// const firebaseConfig = {
//     apiKey: "AIzaSyD_BU9f_MlvWMo-Nmxr7_tF4GP3mU7ecFc",
//     authDomain: "react-testing-46092.firebaseapp.com",
//     projectId: "react-testing-46092",
//     storageBucket: "react-testing-46092.appspot.com",
//     messagingSenderId: "421563215559",
//     appId: "1:421563215559:web:729ec7d7205d6e8c1018e2"
//   };
  

  const firebaseConfig = {
    apiKey: VITE_APIKEY,
    authDomain: VITE_AUTHDOMAIN,
 
    projectId: VITE_PROJECTID,
    storageBucket: VITE_STORAGEBUCKET,
    messagingSenderId: VITE_MESSAGINGSENDERID,
    appId: VITE_APPID,
  };


// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB= getFirestore(FirebaseApp);