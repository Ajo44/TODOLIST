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
      <button
        className="btn"
        onClick={signIn}
        src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
      >
        sign in with google
      </button>

      <img
        className="png"
        src="https://s3-alpha-sig.figma.com/img/fab2/74ff/77afff291d1e8633865a8703c64d153b?Expires=1645401600&Signature=W2oeMyyqDd0RqRfYBQ2gD-rN54JgpNp6YIiBZCPpJnGHhN6wH5zndcgd-WpZJ~XQUrZOcsbBjEKXhKOX3TbAZSI1NS~PLntZ51za2dvGSBTxsMoGwmlw3cO-r3yuk0dUHfC7h3GU~tnG0E4ROfOvBJNPnGMHnQ6GYe8P7xLrZFTitsGJM0wkpZDakAlHXkmPRhQdFj-WbD3SmxbgN7MIMDIlGvTrHi06KnAXdlnrbJElpOWtniY4CxxFryLzCBbT7QJ3HPnjYjt9p69m3TSEaNQe0bBAtVhegPI30UFDE6g~gKlFHdbB412QpiZIK7SWHhMq6SY1yAtd-g0qzPN~rg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      />
      <img
        className="lamb"
        src="https://s3-alpha-sig.figma.com/img/a272/99ac/1723838fe8cb0d1ed4f6a14aabe8945a?Expires=1645401600&Signature=XgJ7~IXa3dXwFNf8tvE7VU6R25BK4foAZfkPXJfGRBZolaqfl2nL14k4NuRoQ1ZSIM5bem6Ba0Kc629775hz9a8F--Zh8J5TduGCXyGFi4F4XgUeuCz-W6qpFTplecl4Qxrh~s8qPiS-cb35L9iRy5IYAM8pg52LBtb5GxKPtGcR4cnf9QaHf1ZnW5acD-KNvF065O99MOHcLwmks4NFfIUXz5G1e79YFLVba0mG7HNSXJgn3fYRggRJEgMrbJtm5Rz1LMf~v3eFQKCQ-EMZM32W7yslVjrj6tmDFEN3dPD8g5RYKhdUsRS2mOii8BUtwiqi~hat2LlpMvLpPYwJtQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      ></img>
    </div>
  );
}

export default App;
