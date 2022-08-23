import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="main-container">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            {new Date().getFullYear()} © Wallet Pass | All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
