/** @jsxImportSource @emotion/react */
import { Button } from '@mui/material'
import React,{useState} from 'react'
import * as styles from './styles'
import login from '../../assets/login.svg'
import signup from '../../assets/register.svg'
import './stylll.css'

const SignInDiv = ({setSignInShow,setSignUpShow}) => {
const handleClick = ()=>{
    setSignInShow(prev=>!prev)
    setSignUpShow(prev=>!prev)
}
  return (
    <div css={styles.signInDiv} className="signUp">
        <div >
            <h1>Sign IN form here</h1>
        </div>
        <div style={{color:'white'}}>
        <h1>New here?</h1>
            <p>Create an account and have full acces to our services.</p>
            <Button variant='contained' onClick={handleClick}>Sign Up</Button>
            <img src={login} css={styles.svgImage}/>
        </div>
        
    </div>
  )
}


const SignUpDiv = ({setSignInShow,setSignUpShow}) => {
const handleClick = ()=>{
    setSignUpShow(prev=>!prev)
    setSignInShow(prev=>!prev)
}
  return (
    <div css={styles.signUpDiv} className="signUp">
        <div style={{color:'white'}}>
        <h1>One of us already?</h1>
            <p>Connect to your account with email and password</p>
            <Button variant='contained' onClick={handleClick}>Sign In</Button>
            <img src={signup} css={styles.svgImage1}/>
        </div>
        <div>
            <h1>Sign up form here</h1>
            
        </div>
    </div>
  )
}

export const SignIn=()=>{
const [showSignUp,setShowSignUp] = useState(true) 
const [showSignIn,setShowSignIN] = useState(false) 

    return(
        <div >
            <div css={showSignUp? styles.backgroundUp:styles.backgroundIn} className="backBall">

            </div>
            {showSignIn && <SignInDiv setSignInShow={setShowSignIN} setSignUpShow={setShowSignUp}/>}
            {showSignUp && <SignUpDiv setSignUpShow={setShowSignUp} setSignInShow={setShowSignIN} />}
        </div>
    )
}

