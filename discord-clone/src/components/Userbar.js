import { Avatar } from '@material-ui/core'
import React from 'react'
import { userData } from '../app/Userdata'
import '../styles/Userbar.css'

function Userbar() {
  return (
    <div className='userbar'>
      <h3 className='title'>Users</h3>
      {userData.map((data, key) => {
        return (
          <div className='Users'>
            <Avatar />
            <div className='Username' key={key}>
              {data.name}
            </div>
          </div>
        );
      })}

    </div>
  )
}

export default Userbar