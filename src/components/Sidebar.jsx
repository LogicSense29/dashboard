import React from 'react';
import "../styles/Sidebar.css"
import Profile from './Profile'
import Navigation from './Navigation';
import Logout from './Logout';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <h2>UMéRA</h2>
        <Profile/>
        <Navigation/>
        <Logout/>
    </div>
  )
}
