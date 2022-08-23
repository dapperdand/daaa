import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../utils/images/walletconnect.svg";

const Navbar = () => {
  return (
    <div>
      <div className="main-container">
        <div className="container">
          <div className="navbar">
            <Link to="/" className="logo">
              <img src={logo} alt="logo" />
            </Link>
            <Link to="/directory" className="navbar-right">
              <h4>Directory</h4>
              <FaBars className="navbar-icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
