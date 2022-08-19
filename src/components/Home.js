import React from "react";
import { Link } from "react-router-dom"
import "./css/Home.css";

export default function Home() {
  return (
    <>
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <div className="login-form-box">
            <h2>Login</h2>
            <div className="sign-up-link">
              <span>Doesn't have an account yet? &nbsp;</span>
              <Link to="/">Sign Up</Link>
            </div>
            <span id="email-address-head">Email Address</span>
            <input id="email" type="email" placeholder="you@example.com"/>
            <div className="pass-forget-pass">
              <span>Password</span>
              <Link to="/">Forgot Password?</Link>
            </div>
            <input id="password" type="password" placeholder="Enter 6 characters or more"/>

            <label class="check-box">
              <input type="checkbox" id="cb1"/>
              <label htmlFor="cb1">Remember me</label>
            </label>

            <button id="login">LOGIN</button>
            {/* <div className="login-hr">
              <span>or login with</span>
            </div> */}
            <div id="hr-style" style={{
                color: 'black',
                position: "relative",
                backgroundColor: 'gray',
                height: 1,
                width: '100%',
                border: 0,
                marginBottom: '1.5rem'
            }}/>
            <div className="signup-buttons">

              <div className="google-btn">
                <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google-icon"/>
                <span>Google</span>
              </div>

              <div className="facebook-btn">
                <img src="images/facebook.png" alt="fb-icon"/>
                <span>Facebook</span>
              </div>

            </div>
          </div>
        </div>
        <div className="login-img">
          <img src="images/login.jpg" alt="login-img"/>
        </div>
      </div>
    </div>
    </>
  )
}

