import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ7be0JBfIbExr9eGO4IXhhkx55yXWiaI",
  authDomain: "discord-clone-dc0c1.firebaseapp.com",
  projectId: "discord-clone-dc0c1",
  storageBucket: "discord-clone-dc0c1.appspot.com",
  messagingSenderId: "650063734903",
  appId: "1:650063734903:web:768c419a64c84ef822fe72",
  measurementId: "G-8BQLQSV01V"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;