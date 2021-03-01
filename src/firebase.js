 import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCmv-LpVFIty5RlWKRqZboNvPeAV3wIRek",
    authDomain: "sw-facebook.firebaseapp.com",
    projectId: "sw-facebook",
    storageBucket: "sw-facebook.appspot.com",
    messagingSenderId: "201298415268",
    appId: "1:201298415268:web:7929441754604470c7e031",
    measurementId: "G-6288GW35WE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;