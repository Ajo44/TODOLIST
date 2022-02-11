import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDcdLnfAK9seH6-jr1O1L440QJBGSSV0Cw",
  authDomain: "todo--signin.firebaseapp.com",
  projectId: "todo--signin",
  storageBucket: "todo--signin.appspot.com",
  messagingSenderId: "991456556689",
  appId: "1:991456556689:web:7a01101f0430c745527130",
};
firebase.initializeApp(firebaseConfig);
export { firebase };
