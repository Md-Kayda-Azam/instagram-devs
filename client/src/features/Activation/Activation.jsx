import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./Activation.scss";
import activation from "./activation.png";
import Cookie from "js-cookie";
import { useDispatch } from "react-redux";
import { activationByOtp } from "../Signup/signupAPI";
import swal from "sweetalert";
import { ToastContainer } from "react-toastify";

const Activation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const activationEmail = Cookie.get("otp");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input === "") {
      swal({
        title: "Please field in the gap!",
        text: "You clicked the button!",
        icon: "error",
      });
    } else {
      dispatch(
        activationByOtp(
          {
            code: input,
            email: Cookie.get("otp"),
          },
          navigate("/")
        )
      );
    }
  };
  useEffect(() => {
    if (!activationEmail) {
      navigate("/login");
    }
  });
  return (
    <>
      <div className="login-container">
        <div className="login-wraper">
          <div className="form-header">
            <div className="birthday-logo">
              <img src={activation} alt="" />
              <span>Just one more step</span>
            </div>
            <div className="text-area">
              <p>Enter the 6-digit code we sent to:</p>
              <span>{activationEmail}</span>
            </div>
          </div>
          <form className="login-form from-in" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="######"
              name="input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button type="submit" className="login-submit">
              Confirm
            </button>
          </form>
          <div className="number-and-code-request">
            <a href="#">Chnage Number</a> |<a href="#"> Request New Code</a>
          </div>
        </div>
        <div className="singup-wraper">
          <span className="singup-text">
            Have an account?
            <Link to="/login" className="singup-link">
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
    </>
  );
};

export default Activation;
