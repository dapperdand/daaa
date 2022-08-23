import React from "react";
import { Link } from "react-router-dom";

const FooterCta = () => {
  return (
    <>
      <div className="footer-cta">
        <div className="main-container">
          <div className="container">
            <div className="footer-cta-wrapper">
                <h3>Resolve your issues in one click</h3>
                <Link to="/directory" className="btn-secondary btn1">Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterCta;
