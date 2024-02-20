
import React, {useState} from "react";
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import './App.css'
import Home from './pages/Home.jsx';
import FirstScreen from "./pages/FirstScreen.jsx"
import SignUp from "./components/SignUp.jsx"
import Login from "./components/Login.jsx"
import Page404 from "./pages/Page404.jsx"


function App() {

  return (
    <>
      <div>
      <BrowserRouter>
      <Routes>
              <Route exact path="/" element={<FirstScreen/>}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route exact path="/home/*" element={<Home/>}/>
              {/* <Route exact path="/forms/:id" element={<Form/>}/> */}
              <Route path="*" element={<Page404/>}/>
          </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
