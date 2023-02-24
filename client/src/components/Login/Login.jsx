import React from "react";
import { GrFacebook } from "react-icons/gr";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-wraper">
        <a href="#" className="login-logo-link">
          {" "}
          <img
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            alt=""
            className="login-logo"
          />
        </a>

        <form className="login-form">
          <input
            name="auth"
            type="text"
            className="login-input"
            placeholder="phone number, username or email"
          />
          <input
            name="password"
            type="text"
            className="login-input"
            placeholder="password"
          />
          <button className="login-submit">Log IN</button>
        </form>

        <div className="divider">OR</div>

        <a className="login-with-fb" href="#">
          {" "}
          <GrFacebook /> Login with Facebook
        </a>
        <Link className="forgot-password" to="/forgot-password">
          Forgot Password?
        </Link>
      </div>
      <div className="singup-wraper">
        <span className="singup-text">
          Don't have an account?
          <Link to="/accounts/emailsignup" className="singup-link">
            {" "}
            Sign up
          </Link>
        </span>
      </div>
      <div className="get-app">
        <span className="app-text">
          Get the app.
          <div className="app-logo">
            <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
              alt=""
            />
            <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
              alt=""
            />
          </div>
        </span>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
