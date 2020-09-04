import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyDhWMOv9-ITA_alc17QJnxgLE93iApYSds",
    authDomain: "reactapp-824d2.firebaseapp.com",
    databaseURL: "https://reactapp-824d2.firebaseio.com",
    projectId: "reactapp-824d2",
    storageBucket: "reactapp-824d2.appspot.com",
    messagingSenderId: "924699564370",
    appId: "1:924699564370:web:851d1845c37392c0a1028b",
    measurementId: "G-Q4GQZTD1X7"
  };
  // Initialize Firebase

      firebase.initializeApp(firebaseConfig);
     

export default firebase;