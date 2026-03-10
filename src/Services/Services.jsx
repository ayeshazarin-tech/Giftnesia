import "./Services.css";
import { FaGlobe } from "react-icons/fa";
                                           
const Services = () => {
  return (
    <div className="services">
      <h1 className="services-title">
        Effortlessly Access to <br /> Global Markets
      </h1>

      <div className="services-grid">
              
        <div className="service-card">
          <h4 className="card-title">BROKING SERVICE</h4>

          <div className="card-content">
            <div className="card-box">
              <FaGlobe className="icon" />
              <h3>For Non-Resident Traders</h3>
              <p>
                Gain access to GIFT City-based exchanges and instruments such as
                GIFT Nifty Futures, INR-USD, GOLD and many more
              </p>
            </div>

            <div className="divider"></div>

            <div className="card-box">
              <span className="icon">⚛</span>
              <h3>For Indian Resident Traders</h3>
              <p>
                Trade U.S. equity markets by seamlessly digitally signing up on
                our platform in partnership with a top-tiered U.S.-based broker
              </p>
            </div>
          </div>
        </div>

        <div className="service-card">
          <h4 className="card-title">FUND MANAGEMENT</h4>
             
          <div className="card-content">
            <div className="card-box">
             <FaGlobe className="icon" />
              <h3>For Non-Resident Traders</h3>
              <p>
                Allowing global investors and NRIs to participate in a unique
                fund that aligns with their values
              </p>
            </div>

            <div className="divider"></div>

            <div className="card-box">
              <span className="icon">⚛</span>
              <h3>For Indian Resident Traders</h3>
              <p>
                Invest for the next decade and gain exposure in innovative
                companies globally
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
