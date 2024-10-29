import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/AuthContext";
import { ImageContextProvider } from "./context/ImageContext";
import { EmployeeTaskContextProvider } from "./context/EmployeeTaskContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ImageContextProvider>
      <EmployeeTaskContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </EmployeeTaskContextProvider>
    </ImageContextProvider>
  </AuthContextProvider>
);
