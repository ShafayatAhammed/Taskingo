import React from "react";
import "../App.css";
import Contactt from "../image/contact.png";
import Navbar from "../navbar/navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-sec">
        <h1>Contact Us</h1>
        <p>
          We love your feedback, suggestion and review on how to serve you. We
          always listen.
        </p>
        <div className="contact">
          <div className="contact-image">
              <img src={Contactt} alt="contact" />
          </div>
          <div className="contact-form">
            <form>
                <div className="lput">
                    <label htmlFor="flname">What's your name?</label>
                    <input type="text" id="flname" required/>
                </div>
                <div className="lput">
                    <label htmlFor="email">What's your email address?</label>
                    <input type="email" id="email" required />
                </div>
                <div className="lput">
                    <label htmlFor="phone">What's your phone number?</label>
                    <input type="text" id="phone" required />
                </div>
                <div className="lput">
                    <label htmlFor="message">What's your message to us?</label>
                    <textarea id="message" required />
                </div>
                <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
        <div className="contact-dts">
              <div className="sub-dts">
                <i className="fa-solid fa-location-dot"></i>
                <p>Trishal,Mymensingh,Bangladesh</p>
              </div>
              <div className="sub-dts">
                <i className="fa-solid fa-envelope"></i>
                <p>mdshafayat013@gmail.com</p>
              </div>
              <div className="sub-dts">
                <i className="fa-solid fa-phone"></i>
                <p>+8801627347707</p>
              </div>
            </div>
      </div>
    </>
  );
};

export default Contact;
