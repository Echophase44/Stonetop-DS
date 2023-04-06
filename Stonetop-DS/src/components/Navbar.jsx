import React from "react";
import Logo from "../assets/logo.png"
import '../styles/navbar.css'

function Navbar () {
  return(
    <nav className="nav_navbar">
      <div className="nav_logo-container">
        <img className="nav_logo" src={Logo} alt="Company Logo" />
        <span className="nav_title">Stonetop Financial Solutions</span>
      </div>
      <ul className="nav_links-container">
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>WHAT WE DO</li>
        <li>THE PROCESS</li>
        <li>CONTACT US</li>
      </ul>
    </nav>
  )
}

export default Navbar