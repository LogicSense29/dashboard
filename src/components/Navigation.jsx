import React from 'react'
import {Link} from "react-router-dom"
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

export default function Navigation({onDashboard, setOnDashboard}) {
  return (
    <div className='sidebar-navigation'>
    <div>
        <Link to="/home/dashboard" className='nav-link' onClick={()=> {setOnDashboard(true)}}>
          <GridViewOutlinedIcon className='icon'/>
          <p>Dashboard</p>
        </Link>
    </div>
    <div>
        <Link to="/home/task" className='nav-link' onClick={()=> {setOnDashboard(false)}}>
          <HandymanOutlinedIcon className='icon'/>
          <p>Tasks</p>
        </Link>
    </div>
    <div>
        <Link to="/home/leave" className='nav-link' onClick={()=> {setOnDashboard(false)}}>
          <ExitToAppOutlinedIcon className='icon'/>
          <p>Leave</p>
        </Link>
    </div>
    <div>
        <Link to="/home/inbox" className='nav-link' onClick={()=> {setOnDashboard(false)}}>
          <ForwardToInboxOutlinedIcon className='icon'/>
          <p>Inbox</p>
        </Link>
    </div>
    <div>
        <Link to="/home/settings" className='nav-link' onClick={()=> {setOnDashboard(false)}}>
          <SettingsOutlinedIcon className='icon'/>
          <p>Settings</p>
        </Link>
    </div>
  </div>
  )
}
