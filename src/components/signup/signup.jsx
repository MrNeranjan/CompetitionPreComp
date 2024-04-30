import React from "react";
import "./signup.css";
import { FaGoogle, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";

function SignUp() {
  return (
    <div className="SignUp_form_container">
      <h1>SignUp</h1>
      <div className="SignUp_form_container_options">
        <h3>Sign Up with:</h3>
        <div className="SignUp_form_container_options_icons">
        <a href="#home"><FaFacebook className="icon"/></a>
          <a href="#home"><FaGoogle className="icon"/></a>
          <a href="#home"><FaTwitter className="icon"/></a>
          <a href="#home"><FaGithub className="icon"/></a>
        </div>
        <p>or:</p>
        <div className="SignUp_form_container_inputs">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" /> 
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
