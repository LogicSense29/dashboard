import React from 'react'
import profile from "../images/9334180.jpg"

export default function Profile() {
  return (
    <div className='profile-div'>
    <div className='profile-image'><img src={profile} alt="umera profile picture" width={150}/></div>
    <div className='profile-text'>
    <h2>Odunlade Oloye</h2>
    <p>Graphics Designer</p>
    </div>
  </div>
  )
}
