import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyDCdF4rmuwmu_26nfYxsXUPzZ9_8kN8Huw",
  authDomain: "projeto01-d4039.firebaseapp.com",
  databaseURL: "https://projeto01-d4039-default-rtdb.firebaseio.com",
  projectId: "projeto01-d4039",
  storageBucket: "projeto01-d4039.appspot.com",
  messagingSenderId: "677992715369",
  appId: "1:677992715369:web:45c79ba08bbe0855573ef8",
  measurementId: "G-JQVNGCDEVN"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
