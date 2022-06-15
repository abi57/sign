import React from "react";
import { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import "./Logged.css";
import { useNavigate } from "react-router-dom";

function Logged() {
  const [user, setUser] = useState({});
  let navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="Logged">
      <div className="Logged_contents">
        <h1> User Logged In: </h1>
        <p>{user?.email}</p>
        <button className="btn-primary" onClick={logout}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Logged;
