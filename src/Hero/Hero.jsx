import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <h1>
            Global Markets, <br />
            Smarter Investing.
          </h1>

          <p>
            Trade and invest globally with low costs, tax advantages, and expert
            support — built for NRIs and Indian investors.
          </p>
        </div>

        <div className="hero-right">
          <button className="hero-btn">
            For NRI / International Investor <span>›</span>
          </button>

          <button className="hero-btn">
            For Indian Investor <span>›</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
