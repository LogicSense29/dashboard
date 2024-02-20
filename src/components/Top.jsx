import React from 'react'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function Top() {
    const message_notification = 4;
  return (
    <div className='row one'>
    <div>
    <NotificationsOutlinedIcon/>
    <span id='notification-icon'>{message_notification}</span>
    <SettingsOutlinedIcon/>
    </div>
    <div>
        <select id="dateType">
          <option value="Month" defaultChecked>Month</option>
          <option value="Week">Week</option>
          <option value="Year">Year</option>
        </select>
    </div>
</div>
  )
}
