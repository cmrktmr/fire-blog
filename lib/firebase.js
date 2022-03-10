import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAm4SBGVVipECA8kY0QaGwIeLKt7agsaWE",
    authDomain: "fire-blog-next.firebaseapp.com",
    projectId: "fire-blog-next",
    storageBucket: "fire-blog-next.appspot.com",
    messagingSenderId: "418292950740",
    appId: "1:418292950740:web:da983e6d71b8c2afe0fd41",
    measurementId: "G-HKTWEQG0G2"
  };

  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig)
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const storage = firebase.storage();

