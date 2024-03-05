import React from 'react';
import "../App.css";
import OrganizeLife from "../image/organize-life.png";
import {useNavigate} from "react-router-dom";

const Cta = () => {
  const navigate = useNavigate();

  return (
    <section className="cta-sec">
        <div className="cta-txt-btn">
            <h1>Start your life organization with our <br /> mindblowing features.</h1>
            <p>Get Started for free of cost by clicking the button below.</p>
            <button onClick={()=>{
              navigate("/signup")
            }}>Get Started</button>
        </div>
        <div className="cta-image">
            <img src={OrganizeLife} alt="organize-life" />
        </div>
    </section>
  )
}

export default Cta;