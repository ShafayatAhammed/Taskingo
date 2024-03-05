import React from "react";
import Navbar from "../navbar/navbar";
import Google from "../image/google.png";
import Facebook from "../image/facebook.png";
import Twitter from "../image/twitter.png";
import Logo from "../image/logo.png";
import Loginn from "../image/login.png";
import "../App.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Navbar />

      <section className="auth-sec">
        <div className="auth-image">
          <img src={Loginn} alt="loginimg" />
        </div>
        <div className="auth-form">
          <div className="auth-brand">
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
            <div className="name">
              <h1>Taskingo</h1>
            </div>
          </div>
          <h1>Welcome back to the <br /> Taskingo</h1>
          <p>Login to continue with Taskingo</p>
          <div className="form">
            <form>
              <div className="iput">
                <i className="fa-solid fa-user"></i>
                <input type="text" placeholder="Username" required />
              </div>
              <div className="iput">
                <i className="fa-solid fa-lock"></i>
                <input type="password" placeholder="Password" required />
              </div>
              <div className="form-text-btn">
                <p>
                  New user on Taskingo?{" "}
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    <span>Signup</span>
                  </Link>
                </p>
                <button type="submit" className="next-btn">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="social-auth">
            <p>Or you can login with</p>
            <div className="social-icons">
              <button type="button">
                <img src={Google} alt="google" />
              </button>
              <button type="button">
                <img src={Facebook} alt="facebook" />
              </button>
              <button type="button">
                <img src={Twitter} alt="twitter" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
