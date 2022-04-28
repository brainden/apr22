import React from "react";
import "../styles/SidebarChannel.css";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";

function SidebarChannel({ id, channelName }) {

  return (
    <div className="sidebarChannel">
      <h4>
        <span className="sidebarChannel__hash">#</span>
        {channelName}
      </h4>
      <div className="sidebar__voice">
        <SignalCellularAltIcon className="sidebar__voiceIcon" fontSize="large" />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>stream</p>
          <div className="sidebar__voiceIcons">
            <InfoOutlinedIcon />
            <CallIcon />
          </div>
        </div>
      </div>
      <div className="sidebar__profile">
        <div className="sidebar__profileInfo">
          <Avatar />
          <h3>Brando</h3>
          <p>#ID</p>
        </div>
        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default SidebarChannel;