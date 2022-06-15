import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  // signOut,
  // onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import "./Sign.css";
import { useNavigate } from "react-router-dom";

const Sign = () => {
  //Input data state for Email and password
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  let navigate = useNavigate();

  //Password forget
  const forget = () => {
    navigate("/forget");
  };

  const inputName = (e) => {
    return setLoginEmail(e.target.value);
  };
  const inputPassword = (e) => {
    return setLoginPassword(e.target.value);
  };

  // FOR lOGIN i.e Sign page

  const login = async () => {
    if (inputName === "") {
      alert("Empty username...");
    } else {
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        );
        navigate("/logged");
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  return (
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
          <button className="btn-primary" onClick={() => navigate("/signup")}>
            Sign up
          </button>
        </section>

        {}
      </div>
    </div>
  );
};

export default Sign;
