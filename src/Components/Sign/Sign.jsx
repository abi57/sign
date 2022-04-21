import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import "./Sign.css";
import { useHistory } from "react-router-dom";

function Sign() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
  let history = useHistory();
  const forget = () => {
    history.push("/forget");
  };

  const inputName = (e) => {
    return setLoginEmail(e.target.value);
  };
  const inputPassword = (e) => {
    return setLoginPassword(e.target.value);
  };

  // ************************

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  const login = async () => {
    if (inputName == null) {
      alert("Empty username");
    } else {
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        );
        history.push("/logged");
        console.log(user);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  // const logout = async () => {
  //   await signOut(auth);
  // };

  return (
    <>
      <div className="container">
        <div className="container_content">
          <section>
            <h3>LOGIN PAGE</h3>
            <label>Email:</label>
            <input
              type="email"
              placeholder="User Email"
              onChange={inputName}
              required
            ></input>
            <label>Password:</label>
            <input
              type="password"
              placeholder="password"
              onChange={inputPassword}
              required
            ></input>

            <button className="btn-primary" onClick={login}>
              Sign
            </button>
            <button className="btn-primary" onClick={forget}>
              Forget
            </button>
            <h3>New Users? Sign up</h3>
            <a href="/signup" className="btn-secondary">
              Sign up
            </a>
          </section>
        </div>
      </div>
      {/* <div>
        <h4> User Logged In: </h4>
        {user?.email}
        <button onClick={logout}> Sign Out </button>
      </div> */}
    </>
  );
}

export default Sign;
