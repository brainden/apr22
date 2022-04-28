import React from 'react'
import '../styles/Chatheader.css'
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";



function Chatheader() {
  return (
    <div className='chatHeader'>
      <h2>Chat header</h2>
      <div className='chatHeader__left' >
        <h3>
          Test Channel Name
          <span className='chatHeader__hash'>#</span>
        </h3>
      </div>
      <div className='chatHeader__right' >
        <NotificationsIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />
        <div className='chatHeader__search'>
          <input placeholder="search">
          </input>
          <SearchRoundedIcon />
        </div>
        <SendRoundedIcon />
        <HelpRoundedIcon />

      </div>
    </div>
  )
}

export default Chatheader