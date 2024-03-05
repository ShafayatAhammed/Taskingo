import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import Google from "../image/google.png";
import Facebook from "../image/facebook.png";
import Twitter from "../image/twitter.png";
import Logo from "../image/logo.png";
import Signupp from "../image/signup.png";
import "../App.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState(1);

  const Form1 = () => {
    return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setForm(2);
          }}
        >
          <div className="iput">
            <i className="fa-solid fa-signature"></i>
            <input type="text" placeholder="Fullname" required />
          </div>
          <div className="iput">
            <i className="fa-solid fa-user"></i>
            <input type="text" placeholder="Username" required />
          </div>
          <div className="iput">
            <i className="fa-regular fa-envelope"></i>
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="form-text-btn">
            <p>Already have an account? <Link to="/login" style={{textDecoration:"none"}}><span>Login</span></Link></p>
            <button type="submit" className="next-btn">
              Next
            </button>
          </div>
        </form>
      </>
    );
  };

  const Form2 = () => {
    return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setForm(1);
          }}
        >
          <div className="iput">
            <i className="fa-solid fa-phone"></i>
            <input type="number" placeholder="Phone Number" required />
          </div>
          <div className="iput">
            <i className="fa-solid fa-lock"></i>
            <input type="password" placeholder="Password" required />
          </div>
          <div className="iput">
            <i className="fa-solid fa-lock"></i>
            <input type="password" placeholder="Repeat Password" required />
          </div>
          <div className="form-btns">
            <button
              type="button"
              onClick={() => {
                setForm(1);
              }}
              className="back-btn"
            >
              Back
            </button>
            <button type="submit" className="signup-btn">
              Signup
            </button>
          </div>
        </form>
      </>
    );
  };

  return (
    <>
      <Navbar />

      <section className="auth-sec">
        <div className="auth-image">
          <img src={Signupp} alt="signupimg" />
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
          <h1>Welcome to Taskingo</h1>
          <p>
            Make your life in your own way and style with our <br /> mindblowing
            features.
          </p>
          <div className="form">
            {(form === 1 && <Form1 />) || (form === 2 && <Form2 />)}
          </div>
          <div className="social-auth">
            <p>Or you can join with</p>
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

export default Signup;
