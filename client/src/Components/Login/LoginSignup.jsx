import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from "../Assets/user-icon.webp";
import email_icon from "../Assets/email-logo.png"
import password_icon from "../Assets/password-logo.jpeg"

export const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
        <div className="header">
            <div className="text">{action }</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:
            <div className="input">
                <img src={user_icon}alt="user_image" />
                <input type="text" name="UserId" id="" placeholder='Name'/>
            </div>
            }
            
            <div className="input">
                <img src={email_icon}alt="user_image" />
                <input type="email" name="UserId" id="" placeholder='Email Id' />
                
            </div>
            <div className="input">
                <img src={password_icon} alt="user_image" />
                <input type="password" name="UserId" id="" placeholder='Password'/>
                
            </div>
        </div>
        {action==="Sign Up"?<div></div>:
        <div className="forgot-password">Forgot Password <span>Click Here</span></div>
        }
        
        <div className="submit-container">
            {/* dynamically change the state  */}
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction('Login')}} >Login</div>
        </div>
    </div>
  )
}
