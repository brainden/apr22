import React from 'react'
import '../styles/Messages.css'
import { Avatar } from '@material-ui/core'

function Messages() {
  return (
    <div className='messages'>
      <div>
        <Avatar />
      </div>
      <div className='message__info'>
        <h4>mango_lover
          <span class="message__timestamp">2/22/22</span>
        </h4>
        <p>placeholder text messages</p>
      </div>
    </div>
  )
}

export default Messages