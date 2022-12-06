import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyCfbmOnsHnGNpgfZW14z8hkHZ1-oulGV98",
  authDomain: "kothayacho-7e984.firebaseapp.com",
  databaseURL: "https://kothayacho-7e984-default-rtdb.firebaseio.com",
  projectId: "kothayacho-7e984",
  storageBucket: "kothayacho-7e984.appspot.com",
  messagingSenderId: "315422195305",
  appId: "1:315422195305:web:f3c584e19fc1b59e09ecf8",
  measurementId: "G-XDZ4N3FZST"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.database();