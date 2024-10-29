import React, { useState } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import FirstScreen from "./pages/FirstScreen.jsx";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
import Page404 from "./pages/Page404.jsx";
import Admin from "./admin/Admin.jsx";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();

  return (
    <div style={{ position: "relative" }}>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={!user ? <FirstScreen /> : <Navigate to="/admin/" />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin/*"
            element={user ? <Admin /> : <Navigate to="/" />}
          />
          <Route exact path="/home/*" element={<Home />} />
          {/* <Route exact path="/forms/:id" element={<Form/>}/> */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
