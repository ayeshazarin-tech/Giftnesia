import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <h1>
          About TradeAir <br /> (IFSC)
        </h1>
        <div className="view-wrapper">
          <button className="view-btn">
            View Services <span>›</span>
          </button>
        </div>
      </div>

      <div className="about-right">
        <div className="about-card">
          <h3>✦ Financial Services</h3>
          <p>
            As an IFSCA-registered Broker-Dealer and Fund Manager, TradeAir
            (IFSC) delivers smart wealth and trading solutions to Institutions,
            NRIs, OCIs, and international clients — connecting you to
            opportunities in GIFT City and global markets with confidence.
          </p>
        </div>

        <div className="about-card">
          <h3>✦ GIFT City</h3>
          <p>
            GIFT City stands as India’s global finance gateway, offering
            world-class infrastructure and regulatory support for international
            financial services.
          </p>
        </div>

        <div className="regulated-card">
          <div className="regulated-text">
            <span className="rotate-icon">⟳</span>
            <h2>Regulated By</h2>
            <span className="arrow">››</span>
          </div>

          <div className="regulated-logos">
            <img src="/Ifsca.png" alt="IFSCA" />
            <img src="/Gift.png" alt="GIFT City" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
