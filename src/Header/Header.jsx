import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon"></div>
          <span>TRADEAIR</span>
        </div>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          <div className="service-wrapper">
            <select className="service-dropdown">
              <option>Services ▾</option>
              <option>Birthday Gifts</option>
  <option>Anniversary Gifts</option>
  <option>Same-Day Delivery</option>
            </select>
           
          </div>
          <Link to="/contactpage">Contact</Link>
        </nav>
        <Link className="login-btn" to="/loginpage">
          Login ▾
        </Link>
      </div>
    </div>
  );
};

export default Header;
