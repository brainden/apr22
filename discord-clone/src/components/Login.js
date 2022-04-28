import { Button } from '@material-ui/core'
import { auth, provider } from "../firebase";
import "../styles/Login.css"
import React from 'react'

function Login() {
  let signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className='login'>
      <div className="login__logo">
        <img src='https://cdn.logojoy.com/wp-content/uploads/20210422095037/discord-mascot.png' alt='mascot' />
      </div>
      <Button onClick={signIn}></Button>
    </div>
  )
}

export default Login