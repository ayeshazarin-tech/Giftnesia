import React from "react";
import "./ContactPage.css";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>Have questions? We'd love to hear from you.</p>

          <div className="info-box">
            <h4>Email</h4>
            <p>support@example.com</p>
          </div>

          <div className="info-box">
            <h4>Phone</h4>
            <p>+1 (123) 456-7890</p>
          </div>

          <div className="info-box">
            <h4>Location</h4>
            <p>123 Main Street, City, Country</p>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div className="input-group">
              <input type="text" required />
              <label>Name</label>
            </div>

            <div className="input-group">
              <input type="email" required />
              <label>Email</label>
            </div>

            <div className="input-group">
              <textarea rows="4" required></textarea>
              <label>Message</label>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
