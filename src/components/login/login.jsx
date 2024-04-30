import React from "react";
import "./login.css";
import { FaGoogle, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";

function Login() {
  return (
    <div className="login_form_container">
        <h1>Login</h1>
        <h2>Sign in with:</h2>
        <div className="social_media_icons">
          <a href="#home"><FaFacebook className="icon"/></a>
          <a href="#home"><FaGoogle className="icon"/></a>
          <a href="#home"><FaTwitter className="icon"/></a>
          <a href="#home"><FaGithub className="icon"/></a>
        </div>
        <h2>or:</h2>
        <form className="login_form">
          <input type="text" placeholder="Email or username" />
          <input type="password" placeholder="Password" />
          <div className="extras">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#home">Forgot password?</a>
          </div>
          <button type="submit">SIGN IN</button>
        </form>
        <p>Not a member? <a href="#home">Register</a></p>
    </div>
  )
}

export default Login;
