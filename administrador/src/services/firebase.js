import firebase from 'firebase/app'
import 'firebase/storage'
// Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyBZR3ssQqqWrEvLek2T2b3BSr8tE3jay4Q",
    authDomain: "administrador-8d441.firebaseapp.com",
    projectId: "administrador-8d441",
    storageBucket: "administrador-8d441.appspot.com",
    messagingSenderId: "935458481001",
    appId: "1:935458481001:web:98ec1a53ab035b2b9313f8"
  };
  // Initialize Firebase
  
  const fire= firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();

  export{
      fire,
      storage,
      firebase
  }
  
