import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiVjw2E2CPPWWnkCCOI_yGNGHS2I5q80g",
  authDomain: "twitter-clone-b353f.firebaseapp.com",
  projectId: "twitter-clone-b353f",
  storageBucket: "twitter-clone-b353f.appspot.com",
  messagingSenderId: "42999674368",
  appId: "1:42999674368:web:bf68b0ecab6000e0154ae5",
  measurementId: "G-XDGPHE0EGM"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
