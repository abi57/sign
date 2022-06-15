import React, { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

import "./Signup.css";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [name, setName] = useState("");
  const [confirm, setConfirm] = useState("");
  const [contact, setContact] = useState("");

  let navigate = useNavigate();

  const changeName = (e) => {
    return setName(e.target.value);
  };
  const changePassword = (e) => {
    return setRegisterPassword(e.target.value);
  };
  const changeconfirm = (e) => {
    return setConfirm(e.target.value);
  };
  const changeemail = (e) => {
    return setRegisterEmail(e.target.value);
  };
  const changecontact = (e) => {
    return setContact(e.target.value);
  };

  // ************ASYNC FUNCTION ********

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      navigate("/");

      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="signcontainer">
      <div className="signcontents">
        <section>
          <h3>SIGN UP PAGE</h3>
          <label>Name:</label>
          <input type="text" placeholder="Name" onChange={changeName}></input>

          <label>Password:</label>
          <input
            type="password"
            placeholder="password"
            onChange={changePassword}
          ></input>

          <label> Confirm Password:</label>
          <input
            type="password"
            placeholder="password"
            onChange={changeconfirm}
          ></input>

          <label>Email:</label>
          <input
            type="email"
            placeholder="email"
            onChange={changeemail}
          ></input>

          <label>Contact:</label>
          <input
            type="number"
            placeholder="number"
            onChange={changecontact}
          ></input>

          <button className="btn-submit" onClick={register}>
            Submit
          </button>
        </section>
      </div>
    </div>
  );
};

export default Signup;
