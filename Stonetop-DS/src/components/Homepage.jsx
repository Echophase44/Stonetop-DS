import React from "react";
import '../styles/homepage.css'
import Hero from '../assets/mainOffice.jpg'
import Logo from "../assets/logo.png"


function Homepage() {
  return (
    <>
      <section className="home_hero-container">
        <img className="home_hero" src={Hero} alt="Office" />
        <img className="home_logo" src={Logo} alt="Company Logo" />
        <div className="home_title">Stonetop Financial Solutions</div>
      </section>
      <section className="home_about-container">

      </section>

    </>
  )
}

export default Homepage