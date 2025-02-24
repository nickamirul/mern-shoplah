// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "mern-shoplah.firebaseapp.com",
//   projectId: "mern-shoplah",
//   storageBucket: "mern-shoplah.firebasestorage.app",
//   messagingSenderId: "617698095797",
//   appId: "1:617698095797:web:e21045f1156e95b8c104fc",
//   measurementId: "G-4P008J8C9M"
// };

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ae1e9.firebaseapp.com",
  projectId: "mern-estate-ae1e9",
  storageBucket: "mern-estate-ae1e9.appspot.com",
  messagingSenderId: "589129740434",
  appId: "1:589129740434:web:8a35f4a862ac221580764b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);