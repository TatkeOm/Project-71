import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDm9fFytJSbYYrK91GtG1uhKaI8AvTcLXo",
    authDomain: "project-71-d0a75.firebaseapp.com",
    projectId: "project-71-d0a75",
    storageBucket: "project-71-d0a75.appspot.com",
    messagingSenderId: "551248777871",
    appId: "1:551248777871:web:8b36275cfbe44c3c8cd6fa"
  };
  //
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
