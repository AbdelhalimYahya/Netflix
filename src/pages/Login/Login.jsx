import React, { useState } from 'react';
import './Login.css';
import logo from '../../image/logo.png';

const Login = () => {
  const [signState , setSignState] = useState("Sign In")

  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className='login-form'>
        <h2>{signState}</h2>
        
        <form>
          {signState == "Sign Up" ? <input type="text" placeholder='Your name' /> : <></>}
          <input type="email" placeholder='Ahmed Ali' />
          <input type="password" placeholder='Password' />

          <button>{signState}</button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>

            <p>Need Help?</p>
          </div>
        </form>
        
        <div className="form-switch">
          {signState != "Sign Up" ? <p>New to Netflix? <span onClick={(() => {setSignState("Sign Up")})}>Sign up Now</span></p> : <p>Already have an account? <span onClick={(() => {setSignState("Sign In")})}>Sign in Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login