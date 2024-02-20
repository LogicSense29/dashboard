import React, { useState } from 'react'
import "../styles/Task.css"
import {task} from "../task.js"

export default function Task() {

  return (
    <div className='task'>
        <h2>Tasks</h2>
        <div className='row-two'>
            <div className='task-container'>
              {
                task.map((item)=> (
                  <div key={item.id} className='round'>
                  <input type='text' className='task-input' value={item.value} name='task' readOnly/>
                  <input type='checkbox' className='check' checked/>
                  <label for="checkbox"></label>
                  </div>
                ))
              }
            </div>

            <div className='date'>
              <div>
              <p>Due Date</p>
              <h2>29th Feb</h2>
              </div>

              <div>
              <p>Days Left</p>
              <h2>21 Days</h2>
              </div>
            </div>
        </div>
    </div>
  )
}
