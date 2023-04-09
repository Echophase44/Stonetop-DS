import React from "react";
import logo from "../../assets/logo.png"

function Footer() {
  return (
    <footer className="footer-main">
      <img className="footer-logo" src={logo} alt="" />
      <span className="footer-text"> © 2020 by Stonetop Financial Solutions, LLC.</span>
      <a className="footer-privacy" href="">Privacy Policy</a>
    </footer>
  )
}

export default Footer