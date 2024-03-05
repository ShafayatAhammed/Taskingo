import React from "react";
import "../App.css";
import LifeMaking from "../image/life-making.jpg"

const Hero = () => {
  return (
    <section className="about-hero">
      <div className="hero-texts">
        <h1>
          Our mission is to remove <br /> complexities from your life.
        </h1>
        <p>
          Yes! this is the main purpose behind our services. We want to remove <br /> all of the complexities from your life and give you an organized, <br /> balanced life. We will give the power into your hands. You can make <br /> your life, how do you want. All the neccessary feature are free of cost.<br />This is the main mission and vision of our whole team and company.
        </p>
      </div>
      <div className="hero-image">
        <img src={LifeMaking} alt="life-making" />
      </div>
    </section>
  );
};

export default Hero;
