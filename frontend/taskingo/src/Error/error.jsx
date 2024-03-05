import React from 'react';
import "../App.css";
import ErrorRobot from "../image/404-robot.png";
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="error">
      <section className="error-sec">
      <div className="error-txt-btn">
        <h1>404 <br /> Ooops! <br /> Page Not Found</h1>
        <p>The page not found or not accessible. <br /> We suggest you back to home.</p>
        <button type='button' onClick={()=>{
          navigate("/")
        }}>Back to Home</button>
      </div>
      <div className="error-img">
        <img src={ErrorRobot} alt="error-robot" />
      </div>
      </section>
    </div>
  )
}

export default Error;
