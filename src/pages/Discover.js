import React from "react";
import { Link } from "react-router-dom";
import { links } from "../utils/dummyData";

const Discover = () => {
  return (
    <div className="discovery">
      <div className="main-container">
        <div className="container">
          <div className="wallet-block">
            <div className="wallet-block-title">
              <h3>Select a wallet to continue</h3>
            </div>
 
            <div className="wallet-block-list">
            {links &&
              links.map((data, index) => (
                <Link to={`/wallets/${data?.name}`} className="wallet-card box-shadow" key={index}>
                  <div className="wallet-card-icon  ">
                    <img src={data?.endpoint} alt="icon" />
                  </div>
                  <h4 className="wallet-name">{data?.name}</h4>
                  <p className="wallet-type">Dap</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
