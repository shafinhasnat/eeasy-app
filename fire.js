import firebase from "firebase";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB5pgI915lK9BAMQ09SgVoHZ1mOa128LhA",
  authDomain: "eeasy-app-e9cc5.firebaseapp.com",
  databaseURL: "https://eeasy-app-e9cc5.firebaseio.com",
  projectId: "eeasy-app-e9cc5",
  storageBucket: "eeasy-app-e9cc5.appspot.com",
  messagingSenderId: "184873669079",
  appId: "1:184873669079:web:8cd87322dbb7af2b2f3b92",
  measurementId: "G-3K4YB4WJG1",
};
let fire = firebase.initializeApp(firebaseConfig);
export default fire;
