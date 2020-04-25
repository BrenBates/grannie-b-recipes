import firebase from 'firebase/app';
import 'firebase/storage';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCGik-uANiYZmyfXZfgK76E25RITCGrytY",
    authDomain: "familykitchen-29334.firebaseapp.com",
    databaseURL: "https://familykitchen-29334.firebaseio.com",
    projectId: "familykitchen-29334",
    storageBucket: "familykitchen-29334.appspot.com",
    messagingSenderId: "257719022977",
    appId: "1:257719022977:web:8ae6f6f541351c37ac2480",
    measurementId: "G-9LW5XTC9BE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }
