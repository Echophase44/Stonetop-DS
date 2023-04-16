import React from "react";
import Logo from "../assets/logo.png"
import '../styles/navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { Link as LinkScroll} from 'react-scroll'

function Navbar () {

  return(
    <nav className="nav_navbar">
      <div className="nav_logo-container">
        <img className="nav_logo" src={Logo} alt="Company Logo" />
        <span className="nav_title">Stonetop Financial Solutions</span>
      </div>
      <ul className="nav_links-container">
        <li>
          <Link to="/" >HOME</Link>
        </li>
        <li>
          <LinkScroll to="wwd" spy={true} smooth={true} offset={-80} duration={400}>WHAT WE DO</LinkScroll>
        </li>
        <li>
          <LinkScroll to="about" spy={true} smooth={true} offset={-84} duration={400}>ABOUT</LinkScroll>
        </li>
        <li>
          <LinkScroll to="contact" spy={true} smooth={true} offset={-85} duration={400}>CONTACT</LinkScroll>
        </li>
        <li>
          <NavLink to='/process'>THE PROCESS</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar