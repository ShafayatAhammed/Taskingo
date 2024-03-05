import React from "react";
import "../App.css";
import Logo from "../image/logo.png";
import { Link,useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <Link to="/" style={{textDecoration:"none"}}>
      <div className="brand">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="name">
          <h1 className="name">Taskingo</h1>
        </div>
      </div>
      </Link>
      <div className="menu-items">
        <ul>
          <Link to="/" style={{textDecoration:"none"}}>
            <li>Home</li>
          </Link>
          <Link to="/blog" style={{textDecoration:"none"}}>
            <li>Blog</li>
          </Link>
          <Link to="/pricing" style={{textDecoration:"none"}}>
            <li>Pricing</li>
          </Link>
          <Link to="/about" style={{textDecoration:"none"}}>
            <li>About</li>
          </Link>
          <Link to="/contact" style={{textDecoration:"none"}}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div className="cta-btn">
        <button onClick={()=>{
          navigate("/signup")
        }}>Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
