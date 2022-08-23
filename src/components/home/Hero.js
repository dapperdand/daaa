import React from "react";
import { IoSearchCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="main-container">
        <div className="container">
          <div className="hero-content">
            <div className="hero-title">
              <h1>A gateway to crypto wallets and DApps</h1>
            </div>
            <p>
              Secure connection to blockchain wallets and decentralised
              application. Trusted by over 2 million users worldwide.
            </p>
            <div className="hero-buttons">
              <Link to="/directory" className="btn1" href="#">
                connect
              </Link>
              <Link to="/directory" className="btn2" href="#">
                <IoSearchCircle className="btn-icon" />
                explore the directory
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
