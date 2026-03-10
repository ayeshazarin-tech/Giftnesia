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

          <div className="dropdown">
            <span>Services ▾</span>
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
