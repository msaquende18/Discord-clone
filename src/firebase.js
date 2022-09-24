import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDVKKMeP5MT7cvoWSRoak7ZBpp66FDXkgk",
  authDomain: "discordd-clone.firebaseapp.com",
  projectId: "discordd-clone",
  storageBucket: "discordd-clone.appspot.com",
  messagingSenderId: "133268623141",
  appId: "1:133268623141:web:d2487112ec133675a554cc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
