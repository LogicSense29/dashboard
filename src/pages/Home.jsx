import React from 'react'
import "../styles/Home.css"
import { Routes, Route } from 'react-router-dom';
import Dashboard from "../components/Dashboard.jsx"
import Task from "./Task.jsx"
import Leave from "./Leave.jsx"
import Inbox from "./Inbox.jsx"
import Settings from "./Settings.jsx"
import Sidebar from '../components/Sidebar.jsx'


export default function Home() {
  return (
    <div className='home'>
      <Sidebar/>
      <Routes>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="task" element={<Task/>}/>
        <Route path="leave" element={<Leave/>}/>
        <Route path="inbox" element={<Inbox/>}/>
        <Route path="settings" element={<Settings/>}/>
      </Routes>
    </div>
    
  )
}
