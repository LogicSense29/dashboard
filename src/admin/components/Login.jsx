import React, { memo, useState } from "react";
import "../styles/FirstScreen.css";
import logo from "../images/umera-red.svg";
// import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const { login, loading, error } = useLogin();
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    login({ email: userInput.email, password: userInput.password });
    console.log("Successfully Login");
  }

  return (
    <>
      <div className="login" style={{ backgroundColor: "#ffffff" }}>
        <img src={logo} alt="Umera Logo" width={100} />
        <form style={{ backgroundColor: "#ffffff" }} onSubmit={handleSubmit}>
          <input
            name="email"
            placeholder="Admin Username"
            type="email"
            onChange={handleChange}
            value={userInput.email}
          />
          <input
            name="password"
            placeholder="Password"
            type="text"
            onChange={handleChange}
            value={userInput.password}
          />
          <button
            type="submit"
            style={{ backgroundColor: "#890709", color: "#fff" }}
            disabled={loading}
          >
            {loading ? "Login..." : "Login"}
          </button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </>
  );
}

export default memo(Login);
