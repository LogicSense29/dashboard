import React, { useState } from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import "../styles/FirstScreen.css";

const date = new Date();
const year = date.getFullYear();
export default function FirstScreen() {
  const [showSignUp, setShowSignUp] = useState(true);

  const toggleComponent = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div id="firstScreen">
      {showSignUp ? (
        <SignUp toggleComponent={toggleComponent} />
      ) : (
        <Login toggleComponent={toggleComponent} />
      )}
      <div className="footer">Copyright UMéRA {year}</div>
    </div>
  );
}
