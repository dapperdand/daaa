import React from "react";
import { Link } from "react-router-dom";

const QuickStart = () => {
  return (
    <>
      <div className="quickstart">
        <div className="main-container">
          <div className="container">
            <h3 className="quickstart-title">Quick Start</h3>
            <div className="quickstart-wrapper">
              <Link to="/directory" className="quickstart-card box-shadow">
                <div className="quickstart-card-icon">
                  <img
                    src="https://uploads-ssl.webflow.com/62c070ba08f4116f9873698f/62c0caccb1aa5d5e4540f86d_validate.svg"
                    alt="icon"
                  />
                </div>
                <div className="quickstart-card-title">
                  <h4>validate</h4>
                </div>
              </Link>
              <Link to="/directory" className="quickstart-card box-shadow">
                {" "}
                <div className="quickstart-card-icon">
                  <img
                    src="https://uploads-ssl.webflow.com/62c070ba08f4116f9873698f/62c0cacb6c921f296a1bbdc2_restore.svg"
                    alt="icon"
                  />
                </div>
                <div className="quickstart-card-title">
                  <h4>Restore</h4>
                </div>
              </Link>
              <Link to="/directory" className="quickstart-card box-shadow">
                {" "}
                <div className="quickstart-card-icon">
                  <img
                    src="https://uploads-ssl.webflow.com/62c070ba08f4116f9873698f/62c0cacbb44ea935ec86ba4a_recover.svg"
                    alt="icon"
                  />
                </div>
                <div className="quickstart-card-title">
                  <h4>recover funds</h4>
                </div>
              </Link>
              <Link to="/directory" className="quickstart-card box-shadow">
                {" "}
                <div className="quickstart-card-icon">
                  <img
                    src="https://uploads-ssl.webflow.com/62c070ba08f4116f9873698f/62c0cac37f5d6516102d907d_airdrop.svg"
                    alt="icon"
                  />
                </div>
                <div className="quickstart-card-title">
                  <h4>airdrop</h4>
                </div>
              </Link>
              <Link to="/directory" className="quickstart-card box-shadow">
                {" "}
                <div className="quickstart-card-icon">
                  <img
                    src="https://uploads-ssl.webflow.com/62c070ba08f4116f9873698f/62c0cac4f97098204ff17c24_bridge.svg"
                    alt="icon"
                  />
                </div>
                <div className="quickstart-card-title">
                  <h4>bridge</h4>
                </div>
              </Link>
              <Link to="/directory" className="quickstart-card box-shadow">
                {" "}
                <div className="quickstart-card-icon">
                  <img
                    src="https://uploads-ssl.webflow.com/62c070ba08f4116f9873698f/62c0cac6e7fe5c3e8c589536_claim.svg"
                    alt="icon"
                  />
                </div>
                <div className="quickstart-card-title">
                  <h4>claim</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickStart;
