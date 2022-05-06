import '../styles/Chat.css'
import Chatheader from '../components/Chatheader'
import React from 'react'
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Messages from './Messages';
import { userMsg } from '../app/Usermsg'
import { Avatar } from '@material-ui/core';


function Chat() {
  return (
    <div className='chat'>
      <Chatheader />
      <div className='chat__messages'>
        <Messages />
        {userMsg.map((data, key) => {
          return (
            <div className='messages'>
              <div>
                <Avatar />
              </div>
              <div className='message__info'>
                <h4 key={key}>{data.name}
                  <span class="message__timestamp">{data.date}</span>
                </h4>
                <p>{data.message}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className='chat__input'>
        <AddCircleIcon fontSize="large" />

        <form>
          <input placeholder="Message #TESTCHANNEL"></input>
          <button className='chat__inputButton' type='submit'>Send Message</button>
        </form>
        <div className='chat__inputIcons'>
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  )
}

export default Chat