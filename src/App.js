import "./App.css";
import React from "react";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import First from "./First";
import { useState } from "react";
import Second from "./Second";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
function App() {
  const [loggIn, setLoggIn] = useState(false);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      return setLoggIn(true);
    } else {
      return setLoggIn(false);
    }
  });
  return <>{loggIn ? <Second /> : <First />}</>;
}
export default App;

/*
 if (loggIn === false) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<First />} />
        </Routes>
      </Router>
    );
  } else {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Second />} />
        </Routes>
      </Router>
    );
  }*/
