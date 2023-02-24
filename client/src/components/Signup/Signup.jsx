import React from "react";
import { GrFacebook } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./Signup.scss";
import Footer from "../Footer/Footer";

const Signup = () => {
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
        <span className="res-text">
          Sing up to see photos and video from your friends.
        </span>
        <a className="login-with-fb-register" href="#">
          {" "}
          <GrFacebook /> Login with Facebook
        </a>

        <div className="divider">OR</div>

        <form className="login-form">
          <input
            name="email"
            type="text"
            className="login-input"
            placeholder="Mobile number or email"
          />
          <input
            name="name"
            type="text"
            className="login-input"
            placeholder="Full Name"
          />
          <input
            name="username"
            type="text"
            className="login-input"
            placeholder="User Name"
          />
          <input
            name="password"
            type="password"
            className="login-input"
            placeholder="password"
          />

          <div className="res-info">
            <div className="res-from-text">
              People who use our service may have upload your contact
              information to Instagram.
              <a href="#">Lear More</a>
            </div>
            <div className="res-from-text">
              By singing up, you agree to our <a href="#">Terms</a>,{" "}
              <a href="#">Privacy Policy</a> and
              <a href="#"> Cookies Policy</a>
              <a href="#"> Lear More</a>
            </div>
          </div>

          <button type="submit" className="login-submit">
            Log IN
          </button>
        </form>
      </div>
      <div className="singup-wraper">
        <span className="singup-text">
          Have an account?
          <Link to="/accounts/login" className="singup-link">
            {" "}
            Login In
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

export default Signup;
