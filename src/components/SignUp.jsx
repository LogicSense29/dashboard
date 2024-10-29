import React, { useState, memo } from "react";
import { useSignUp } from "../hooks/useSignUp";
import logo from "../images/umera-red.svg";
import "../styles/FirstScreen.css";

function SignUp({ toggleComponent }) {
  const { signup, loading, error } = useSignUp();
  const [userInput, setUserInput] = useState({
    fullName: "",
    email: "",
    department: "",
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
    signup(
      userInput.fullName,
      userInput.email,
      userInput.department,
      userInput.password
    );
    console.log("Form submitted");
  }

  return (
    <>
      {/* <img src={logo} alt="Umera Logo" width={100} /> */}
      <div className="login" style={{ backgroundColor: "#ffffff" }}>
        <img src={logo} alt="Umera Logo" width={100} />
        <form style={{ backgroundColor: "#ffffff" }} onSubmit={handleSubmit}>
          <input
            name="fullName"
            placeholder="Full Name"
            type="text"
            onChange={handleChange}
            value={userInput.fullName}
          />
          <input
            name="email"
            placeholder="Office Email"
            type="email"
            onChange={handleChange}
            value={userInput.email}
          />
          <select
            name="department"
            id="departmentDropDown"
            onChange={handleChange}
            value={userInput.department}
          >
            <option value="" disabled>
              Select Department
            </option>
            <option value="admin">Admin</option>
            <option value="portfolio">Portfolio</option>
            <option value="research & development">
              Research & Development
            </option>
            <option value="media">Media</option>
            <option value="account">Account</option>
            <option value="it">IT</option>
          </select>
          <input
            name="password"
            placeholder="Password"
            type="password"
            onChange={handleChange}
            value={userInput.password}
          />
          <button
            type="submit"
            style={{ backgroundColor: "#890709", color: "#fff" }}
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
          {error && <div className="error">{error}</div>}
        </form>

        <div className="createAccountContainer">
          <p>Have an Account? </p>
          <button className="other-link" onClick={toggleComponent}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default memo(SignUp);
