import React from "react";
import "./First.css";
import { firebase } from "./Firebase/Firebase";
function App() {
  function signIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <div className="textbox">
      <h1>LOGIN</h1>
      <a className="area">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet at
        eleifend feugiat vitae faucibus nibh dolor dui. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Aliquet at eleifend feugiat vitae
        faucibus nibh dolor dui.
      </a>
      <button className="btn sign" onClick={signIn}>
        <i className="icon">sign in with google</i>
      </button>
    </div>
  );
}

export default App;
