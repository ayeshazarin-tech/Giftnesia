import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      
      <div className="footer-top">
       
        <div className="footer-about">
          <div className="footer-logo">TRADEAIR</div>
          <p>
            We specialize in financial services for NRIs, OCIs, and
            international investors to secure and efficient investing and
            trading across GIFT City and global markets.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-links">
          <h4>Broking Services</h4>
          <a href="#">Non-Resident Traders</a>
          <a href="#">Indian Resident Traders</a>

          <h4 className="mt">Fund Management (AIF & PMS)</h4>
          <a href="#">Non-Resident Investors</a>
          <a href="#">Indian Resident Investors</a>
        </div>

        <div className="footer-connect">
          <h4>Connect</h4>
          <a href="#">LinkedIn</a>
          <a href="#">X</a>
        </div>
      </div>

      {/* <div className="footer-middle">
        <div className="policy-links">
          <span>Privacy Policy</span>
          <span>Disclosures and T&C</span>
          <span>NSE IX</span>
          <span>India INX</span>
          <span>IFSCA</span>
          <span>GIFT CITY</span>
          <span>India ICC</span>
          <span>NSE ICC</span>
        </div>

        <div className="policy-links">
          <span>IFSCA Broker Registration</span>
          <span>IFSCA FME Registration</span>
          <span>Placeholder</span>
          <span>Form MGT-7</span>
          <span>CSR Policy</span>
          <span>Investor Grievance Redressal Policy</span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="ids">
          <span><b>CIN:</b> U65990GJ2016PTC094880</span>
          <span><b>GSTN:</b> 24AAICP9066C1ZD</span>
          <span><b>IFSCA Broker-Dealer Regn. No:</b> INZ000180635</span>
          <span><b>IFSCA FME Regn. No:</b> IFSCA/FME/II/2022-23/059</span>
          <span><b>NSE IFSC Trading Member ID:</b> 10037</span>
          <span><b>India INX Trading/Clearing Member ID:</b> 5042</span>
          <span><b>NSE IFSC Clearing Member ID:</b> M50011</span>
        </div>

        <div className="copyright">
          © 2025 TradeAir. All rights reserved.
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
