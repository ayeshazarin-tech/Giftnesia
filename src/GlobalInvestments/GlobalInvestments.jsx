import "./GlobalInvestments.css";

export default function GlobalInvestmentsHero() {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          Global <span>Investments</span>
          <br />
          Across Borders
        </h1>

        <p className="hero__subtitle">
          Unlock exclusive market access for NRIs, international investors, and
          Indian residents to trade globally and diversify with ease.
        </p>

        <button className="hero__cta">
          Contact Us <span>›</span>
        </button>
      </div>

      <div className="hero__logos">
        <div className="logo-column down">
          <img src="/Nifty.png" alt="Gift Nifty" className="logo-card" />
          <img src="/Nasdaq.png" alt="Nasdaq" className="logo-card" />
          <img src="/Indiain.png" alt="India INX" className="logo-card" />
        </div>

        <div className="logo-column up">
          <img src="/Nyse.png" alt="NYSE" className="logo-card" />
          <img src="/Otc.png" alt="OTC Markets" className="logo-card" />
          <img src="/Nseix.png" alt="NSE IX" className="logo-card" />
        </div>
      </div>
    </div>
  );
}
