import React from "react";
import Multitask from "../image/multitasking.png";
import "../App.css";
import {useNavigate} from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <main className="hero">
      <div className="hero-texts">
        <h1>Make your life in your own <br /> way and style</h1>
        <p>
          Taskingo is the best software to do this! You can do this for free
          with taskingo. There are about all the features to do that in your own
          way. Most of the feature are free, also there are some premium
          features that you can use if you want. So let's get started by
          clicking the button below.
        </p>
        <button onClick={()=>{
          navigate("/signup")
        }}>Get Started</button>
      </div>
      <div className="hero-image">
        <img src={Multitask} alt="multitasking" />
      </div>
    </main>
  );
};

export default Hero;
