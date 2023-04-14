import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"

function Footer() {
  return (
    <footer className="footer-main">
      <img className="footer-logo" src={logo} alt="" />
      <span className="footer-text"> © 2020 by Stonetop Financial Solutions, LLC.</span>
      <NavLink className="footer-privacy" to="/privacypolicy">Privacy Policy</NavLink>
    </footer>
  )
}

export default Footer