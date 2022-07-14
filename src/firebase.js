import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAkhfcIee-4mc6A9tqmEq32U3pV6k4Sa1M",
  authDomain: "messaging-f2a09.firebaseapp.com",
  projectId: "messaging-f2a09",
  storageBucket: "messaging-f2a09.appspot.com",
  messagingSenderId: "839018713187",
  appId: "1:839018713187:web:6ebaa387037a27858a2856",
  measurementId: "G-HJ64ZFQQ86"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;