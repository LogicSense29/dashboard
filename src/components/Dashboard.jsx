import React, { useState } from 'react'
import Top from './Top';
import "../styles/Dashboard.css"
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import SouthWestIcon from '@mui/icons-material/SouthWest';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import LineChart from './LineChart';
import {employeeData}from "../data.js"

export default function Dashboard() {
  const [data, setData] = useState({
    labels: employeeData.map((value) => value.achievedTask),
    datasets: [
      {
      label: "Employee Productivity",
      data: employeeData.map((value) => value.productivity),
      backgroundColor: ["#AC5152"]
    },
    ]
  })
  return (
    <div className='dashboard'>
        <Top/>
        <div className='row two'>
        <div className='card-one c'>
          <div>
          <h2>10/20</h2>
          <div className='dicon'><HandymanOutlinedIcon/></div>
          </div>
          <div>
            <p>Achieved Task</p>
            <div><NorthEastIcon/></div>
          </div>
        </div>

        <div className='card-two c'>
        <div>
          <h2>10/20</h2>
          <div className='dicon'><ExitToAppOutlinedIcon/></div>
          </div>
          <div>
            <p>Leave</p>
            <div><NorthEastIcon/></div>
          </div>
        </div>

        <div className='card-three c'>
        <div>
          <h2>10/20</h2>
          <div className='dicon'><ForwardToInboxOutlinedIcon/></div>
          </div>
          <div>
            <p>Inbox</p>
            <div><NorthEastIcon/></div>
          </div>
        </div>
        </div>
        <div className='row three'>
            <div className='row-three-item'>
              <h2>Departments</h2>
              <div>
                <ul id='departments'>
                  <li>Media</li>
                  <li>Content Creation</li>
                  <li>Research and Development</li>
                  <li>Portfolio</li>
                  <li>Account</li>
                  <li>Affairs</li>
                  <li>IT</li>
                </ul>
              </div>
            </div>
            <div className='row-three-item'>
              <div className='chart'><LineChart data={data}/></div>
              <div className='top-employee'>
                <h2>Top 2 Employee by Productivity</h2>
                <div className='firstEmployee'>
                  <label>Tominsin Jaga</label>
                  <div className='range'>
                  <div style={{width: "100%",border: "1px solid rgba(255, 255, 255, 0.2)", borderRadius: "50px"}}>
                    <div style={{width: "87%", backgroundColor: "#E9C265", color: "#E9C265", borderRadius: "50px", textAlign: "center"}}>0</div>
                  </div>
                  <p>87%</p>
                  </div>
                </div>
                <div className='secondEmployee'>
                  <label>Kemi Afusa</label>
                  <div className='range'>
                  <div style={{width: "100%",border: "1px solid rgba(255, 255, 255, 0.2)",borderRadius: "50px"  }}>
                    <div style={{width: "85%", backgroundColor: "#51ACAB", color: "#51ACAB", borderRadius: "50px", }}>0</div>
                  </div>
                  <p>85%</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
