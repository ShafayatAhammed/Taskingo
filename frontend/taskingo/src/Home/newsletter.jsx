import React from 'react';
import "../App.css";
import Email from "../image/email.png"

const Newsletter = () => {
  return (
    <section className="newsletter-sec">
        <div className="newsletter-icon">
            <img src={Email} alt="emailicon" />
        </div>
        <div className="newsletter-form">
            <h1>Subscribe to our <br /> Newsletter!</h1>
            <p>Subscribe to our newsletter and staty updated <br /> about our services</p>
            <div className="iput">
                <i className="fa-regular fa-envelope"></i>
                <input type="text" placeholder='Your email'/>
            </div>
            <button>Subscribe</button>
        </div>
    </section>
  )
}

export default Newsletter
