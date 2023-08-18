// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,FacebookAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC7TXBtGOWexG9v7m5TVOdEeQKTetRJuDY",
  authDomain: "f8clone-203d1.firebaseapp.com",
  projectId: "f8clone-203d1",
  storageBucket: "f8clone-203d1.appspot.com",
  messagingSenderId: "699574790280",
  appId: "1:699574790280:web:1484deb3b592c8ecf0573d",
  measurementId: "G-8FS7T3FEQL"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
getAnalytics(app);
const auth =getAuth(app)
const provider = new FacebookAuthProvider();
export{auth,provider}