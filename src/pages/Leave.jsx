import React from 'react'
import "../styles/Leave.css"

export default function Leave() {
  return (
    <div className='leave'>
      <h2>Leave</h2>
      <div className='leave-one'>
        <div>
          <p>Last Leave</p>
          <h2>30/02/2024 - 05/03/2024</h2>
        </div>
      </div>
      <div className='leave-two'>
          <div>
          <p>Remaining Leave</p>
          <h2>5 days</h2>
          </div>
          <div>
          <p>Allocated Leave</p>
          <h2>15 days</h2>
          </div>
          <div>
          <p>Used Leave</p>
          <h2>10 days</h2>
          </div>
        </div>
    </div>
  )
}
